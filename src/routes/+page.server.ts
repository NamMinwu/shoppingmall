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
