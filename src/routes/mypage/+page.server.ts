import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	if (locals.user === undefined) {
		throw redirect(303, '/login');
	}
	const prismaClient = new PrismaClient();
	const user = await prismaClient.user.findUnique({
		where: { id: locals.user.id },
		include: {
			orders: {
				include: {
					products: true
				}
			}
		}
	});
	return { user: locals.user, orders: user?.orders };
}) satisfies PageServerLoad;
