# Waht is Node ?

Node.js is a **runtime environment** that lets you run JavaScript **outside the browser** — on your computer or server.

JavaScript was originally designed to run only inside **web browsers** (like Chrome or Firefox).
For example, **console.log("hello")** in a browser runs inside Chrome’s JS engine (called V8).

## What Node.js does

Node.js takes that same V8 engine from Chrome and lets you run JavaScript directly on your machine or server, without needing a browser.
- So you can use JavaScript to:
- Build backend servers (like you’d use Python + FastAPI)
- Build command-line tools
- Automate tasks
- Interact with files, databases, or APIs


| Feature              | Browser JS    | Node.js                 |
| -------------------- | ------------- | ----------------------- |
| Where it runs        | In browser    | On computer/server      |
| Access to DOM        | ✅ Yes         | ❌ No                    |
| Access to Filesystem | ❌ No          | ✅ Yes                   |
| Primary use          | Frontend (UI) | Backend, scripts, tools |
| Global object        | `window`      | `global`                |
