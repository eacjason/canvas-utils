
// General utility functions

export function getCsrfToken() {
    const csrfRegex = new RegExp('^_csrf_token=(.*)$');
    let csrf;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const match = csrfRegex.exec(cookie);
        if (match) {
            csrf = decodeURIComponent(match[1]);
            break;
        }
    }
    return csrf;
}

export function getCourseId() {
    const match = window.location.pathname.match(/\/courses\/(\d+)/);
    return match ? match[1] : null;
}
