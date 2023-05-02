import { PrismaClient } from '@prisma/client';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const actions = {
	default: async (event) => {
		const prismaClient = new PrismaClient();
		const data = await event.request.formData();
		console.log(data);

		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const user = await prismaClient.user.findUnique({ where: { email } });
		if (user === null || user === undefined) {
			return fail(400, { message: 'Need to register' });
		}
		const confirmPassword = await bcrypt.compare(password, user.password);
		if (!confirmPassword) {
			return fail(400, { message: 'Not correct password' });
		}
		const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, 'secret');
		event.cookies.set('session', token);

		throw redirect(302, '/');
	}
} satisfies Actions;
