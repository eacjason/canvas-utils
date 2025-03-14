(async function () {
    // Dynamically load external scripts
    async function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = () => reject(`Failed to load ${url}`);
            document.head.appendChild(script);
        });
    }

    // Load dependencies from GitHub Pages
    await loadScript("https://eacjason.github.io/canvas-utils/helpers.js");
    await loadScript("https://eacjason.github.io/canvas-utils/api.js");
    await loadScript("https://eacjason.github.io/canvas-utils/ui.js");

    // Ensure required functions are available
    if (typeof getCourseId === "undefined" || typeof getAllPages === "undefined" || typeof showNotification === "undefined") {
        alert("Failed to load required scripts.");
        return;
    }

    // Main script logic
    const courseId = getCourseId();
    if (!courseId) {
        alert("Course ID not found. Run this script within a Canvas course.");
        return;
    }

    showNotification("Fetching assignments...");
    const assignments = await getAllPages(`/api/v1/courses/${courseId}/assignments?per_page=100`);
    showNotification(`Fetched ${assignments.length} assignments.`);
})();
