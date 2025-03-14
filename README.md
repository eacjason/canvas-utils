# Canvas Bookmarklets

A collection of **JavaScript bookmarklets** for automating tasks in **Canvas LMS**.  
This repository includes a **modular utility library (`canvas-utils`)** with reusable functions for:  
✅ API calls (fetching assignments, modules, users, etc.)  
✅ UI enhancements (notifications, spinners, prompts)  
✅ CSRF token management & authentication  

## 📌 How It Works
These bookmarklets allow you to execute powerful automation tasks in **Canvas LMS** with just one click.  
Each script loads a hosted JavaScript file that interacts with Canvas API and enhances the user experience.

## 🚀 Installation & Usage
1. **Host the scripts** (GitHub Pages, your own server, or a CDN).  
2. **Copy a bookmarklet** and add it to your browser bookmarks.  
3. **Run it inside Canvas LMS** to automate tasks.

### 📌 Example Bookmarklet (Fetch Assignments)
```javascript
javascript:(function(){
  document.body.appendChild(document.createElement('script')).src='https://yourdomain.com/canvas-utils/bookmarklets/fetch-assignments.js?v=1.0';
})();
```

## 🛠️ Available Scripts
| Script Name         | Description |
|---------------------|------------|
| `fetch-assignments.js` | Fetches all assignments in a course and displays a notification. |
| `sync-blueprint.js` | Triggers a sync for blueprint courses. |
| `modules-report.js` | Generates a detailed report of all module items in a course. |

## 🔧 Developers Guide
### Folder Structure
```
/canvas-utils/
│── api.js          # Handles API requests & pagination
│── ui.js           # UI functions (notifications, spinners, modals)
│── helpers.js      # Utilities (CSRF token, course ID extraction)
│── index.js        # Main entry point for utilities
│── bookmarklets/   # Folder for individual bookmarklet scripts
│   ├── fetch-assignments.js
│   ├── sync-blueprint.js
│   ├── modules-report.js
```

### Adding New Bookmarklets
1. **Create a new JavaScript file** in `/bookmarklets/`.
2. **Import necessary functions** from `/canvas-utils/` (e.g., API calls, UI elements).
3. **Deploy the script** to a hosted location.
4. **Generate a bookmarklet** that dynamically loads your script.

## 💡 Future Enhancements
- More automation scripts (gradebook exports, course backups, user analytics)
- UI improvements (custom menus, enhanced modals)
- Full documentation for API usage

## 📄 License
This project is licensed under the **MIT License**.  

---

Made with ❤️ by [eacjason](https://github.com/eacjason) 🚀
