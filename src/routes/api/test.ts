import { env } from 'process';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const first = import.meta.env.SUPERSECRET_VARIABLE;
	const second = import.meta.env['SUPERSECRET_VARIABLE'];
	const third = process.env.SUPERSECRET_VARIABLE;
	const fourth = process.env['SUPERSECRET_VARIABLE'];
	const fifth = env.SUPERSECRET_VARIABLE;

	console.log(first, second, third, fourth, fifth);

	return {
		body: { response: first || second || third || fourth || fifth }
	};
}
