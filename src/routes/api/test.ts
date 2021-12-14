/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const first = import.meta.env.SUPERSECRET_VARIABLE;
	const second = import.meta.env['SUPERSECRET_VARIABLE'];
	const third = process.env.SUPERSECRET_VARIABLE;
	const fourth = process.env['SUPERSECRET_VARIABLE'];

	// undefined undefined undefined undefined
	console.log(first, second, third, fourth);

	return {
		body: { response: first || second || third || fourth }
	};
}
