addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	let response = await fetch(request);
	response = new Response(response.body, response);
	response.headers.append('Content-Security-Policy', "default-src 'self'");
	response.headers.append('Permissions-Policy', 'interest-cohort=()');
	response.headers.append('X-Frame-Options', 'DENY');
	response.headers.append('X-XSS-Protection', '0');
	// response.headers.append('X-Content-Type-Options', 'nosniff');
	// response.headers.append('Referrer-Policy', 'strict-origin-when-cross-origin');
	return response;
}
