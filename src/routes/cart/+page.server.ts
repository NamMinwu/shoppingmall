import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const prismaClient = new PrismaClient();
	const user = await prismaClient.user.findUnique({
		where: { id: 0 },
		include: {
			orders: {
				include: {
					product: true
				}
			}
		}
	});
	return { user: locals.user, products: user?.orders.map((item) => item.product) };
}) satisfies PageServerLoad;
