| Feature                | Browser JS                                                          | Node.js JS                                                |
| ---------------------- | ------------------------------------------------------------------- | --------------------------------------------------------- |
| **Environment**        | Runs inside the browser (Chrome, Firefox, etc.)                     | Runs on the server using Node.js runtime                  |
| **Global Object**      | `window`                                                            | `global`                                                  |
| **DOM / BOM Access**   | ✅ Can access `document`, `window`, `navigator`, etc.                | ❌ No DOM/BOM access (no document, no window)              |
| **Use Case**           | Frontend / UI interactions                                          | Backend / server-side logic                               |
| **Modules**            | ES Modules (`import/export`)                                        | CommonJS (`require/module.exports`) + ES Modules (modern) |
| **APIs Available**     | `alert()`, `console`, `fetch()`, `setTimeout()`                     | `fs`, `http`, `path`, `os`, `process`                     |
| **Events**             | Browser events (`onclick`, `onload`)                                | Node events (`EventEmitter`)                              |
| **Networking**         | `fetch`, `XMLHttpRequest`                                           | `http`, `https`, `axios`, `net`                           |
| **File System Access** | ❌ Cannot read/write local files (except sandboxed via browser APIs) | ✅ Can read/write files on server                          |
