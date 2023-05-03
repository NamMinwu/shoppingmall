import { PrismaClient } from '@prisma/client';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const prismaClient = new PrismaClient();
		const data = await event.request.formData();

		const name = data.get('name') as string;
		const price = data.get('price') as string;

		const product = await prismaClient.product.create({
			data: { name, price: Number(price) }
		});
	}
} satisfies Actions;
