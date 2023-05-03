import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { Connect } from 'vite';
import { fail } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const prismaClient = new PrismaClient();
	const products = await prismaClient.product.findMany();
	return { products, user: locals.user };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const prismaClient = new PrismaClient();
		const data = await event.request.formData();
		console.log(data);
		const productId = data.get('id') as string;
		if (!event.locals.user) {
			return fail(403, { message: "don't have locals" });
		}
		const productData = await prismaClient.order.create({
			data: {
				userId: event.locals.user?.id,
				products: {
					connect: { id: Number(productId) }
				}
			}
		});
	}
} satisfies Actions;
