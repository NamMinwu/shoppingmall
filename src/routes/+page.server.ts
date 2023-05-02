import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (({ locals }) => {
	return {
		user: locals.user
	};
}) satisfies PageServerLoad;
