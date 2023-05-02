import { json, type RequestHandler } from '@sveltejs/kit';

import { PrismaClient } from '@prisma/client';

export const POST = (async (event) => {
	const data = await event.request.json();
	const prismaClient = new PrismaClient();
	const todo = await prismaClient.cart.create({
		data: { title: data.title, content: data.content }
	});
	return json(todo);
}) satisfies RequestHandler;
