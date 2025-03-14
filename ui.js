
// UI utility functions

export function showNotification(message) {
    const div = document.createElement("div");
    div.innerText = message;
    div.style.position = "fixed";
    div.style.top = "10px";
    div.style.right = "10px";
    div.style.background = "#333";
    div.style.color = "#fff";
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.style.zIndex = "10000";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 5000);
}

export function showLoadingSpinner() {
    const spinner = document.createElement("div");
    spinner.innerHTML = '<div class="spinner"></div>';
    spinner.style.position = "fixed";
    spinner.style.top = "50%";
    spinner.style.left = "50%";
    spinner.style.transform = "translate(-50%, -50%)";
    spinner.style.background = "rgba(0,0,0,0.5)";
    spinner.style.padding = "20px";
    spinner.style.borderRadius = "5px";
    spinner.style.zIndex = "10000";
    document.body.appendChild(spinner);
    return spinner;
}

export function hideLoadingSpinner(spinner) {
    document.body.removeChild(spinner);
}
