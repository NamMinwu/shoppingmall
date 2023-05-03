import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const prismaClient = new PrismaClient();
	const products = await prismaClient.product.findMany();
	return { products, user: locals.user };
}) satisfies PageServerLoad;
