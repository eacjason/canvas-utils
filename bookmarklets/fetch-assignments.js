
// Fetch all assignments in a course and show a notification

import { api, ui, helpers } from "../index.js";

(async function() {
    const courseId = helpers.getCourseId();
    if (!courseId) {
        alert("Course ID not found. Run this script within a Canvas course.");
        return;
    }

    ui.showNotification("Fetching assignments...");
    const assignments = await api.getAllPages(`/api/v1/courses/${courseId}/assignments?per_page=100`);
    ui.showNotification(`Fetched ${assignments.length} assignments.`);
})();
