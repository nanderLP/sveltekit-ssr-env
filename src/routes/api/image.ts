import sharp from 'sharp';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(req) {
	const img = req.body;
	const neuesImg = await sharp(img).resize(300).png().toBuffer();
	return {
		body: neuesImg
	};
}
