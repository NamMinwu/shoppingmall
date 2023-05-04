// import { writable } from 'svelte/store';
// export type TItem = {
// 	name: string;
// 	price: number;
// };
// export const products = writable<TItem[]>([
// 	{ name: '사과', price: 1000 },
// 	{ name: '바나나', price: 2000 },
// 	{ name: '딸기', price: 3000 }
// ]);

import { writable } from 'svelte/store';
import type { Product } from '@prisma/client';

export const cart = writable<Product[]>([]);
