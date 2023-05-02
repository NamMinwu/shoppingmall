import { PrismaClient } from '@prisma/client';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const actions = {
	default: async (event) => {
		const prismaClient = new PrismaClient();
		const data = await event.request.formData();

		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const confirmPassword = data.get('confirmPassword') as string;
		const name = data.get('name') as string;

		if (password !== confirmPassword) {
			return fail(400, { message: 'Not a match password' });
		}

		const hashPassword = await bcrypt.hash(password, 10);

		try {
			const user = await prismaClient.user.create({
				data: { email, name, password: hashPassword }
			});

			const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, 'secret', {
				expiresIn: '1h'
			});
			event.cookies.set('session', token);
		} catch (error) {
			return fail(400, { message: 'Already exist' });
		}
		throw redirect(302, '/');
	}
} satisfies Actions;
