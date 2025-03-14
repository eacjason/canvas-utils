
// API utility functions for Canvas LMS

export async function fetchJson(url) {
    const response = await fetch(url, {
        headers: { 'Accept': 'application/json' },
        credentials: 'include'
    });
    if (!response.ok) throw new Error(`Error fetching ${url}: ${response.statusText}`);
    return response.json();
}

export async function getAllPages(url) {
    let results = [];
    let nextUrl = url;
    while (nextUrl) {
        const response = await fetchJson(nextUrl);
        results = results.concat(response);

        const linkHeader = response.headers.get('Link');
        if (linkHeader) {
            const links = linkHeader.split(',').map(l => l.trim());
            const nextLink = links.find(l => l.includes('rel="next"'));
            if (nextLink) {
                const urlMatch = nextLink.match(/<([^>]+)>/);
                nextUrl = urlMatch ? urlMatch[1] : null;
            } else {
                nextUrl = null;
            }
        } else {
            nextUrl = null;
        }
    }
    return results;
}
