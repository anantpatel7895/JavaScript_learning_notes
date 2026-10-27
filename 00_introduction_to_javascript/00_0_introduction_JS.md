# What is JavaScript?

JavaScript (JS) is a programming language mainly used to make websites **interactive and dynamic**.  
It runs directly **inside web browsers** (like Chrome, Firefox, Safari), allowing developers to control how elements on a web page behave.

 - [NOTE]Today, JavaScript is everywhere — it can run in **browsers (client-side)** and on **server-side(with Node.js)**, in mobile apps, desktop apps, and even IoT devices.

---

# Dynamic Behavior in JavaScript

## What is Dynamic Behavior?
Dynamic behavior means a webpage can change its content, style, or functionality **without reloading**.

---

## Examples
- Showing/hiding elements on button click  
- Form validation while typing  
- Animations (dropdowns, sliders)  
- Updating content dynamically  

---

## API Calls and Dynamic Behavior
Yes, API calls are part of dynamic behavior.

They allow a webpage to:
1. Request data from a server  
2. Receive the response  
3. Update the page instantly  

---

## Example
```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").textContent = data.message;
  });
```

### Key Point
Dynamic behavior = real-time updates using JavaScript without page reload

---

## What Can JavaScript Do?

### ✔ Manipulate Web Pages (DOM Manipulation)
- Change text, images, or styles on a web page  
- Show or hide elements  
- React to user actions (clicks, typing, scrolling)

### ✔ Handle Events
- Do something when a **button is clicked** 
- Validate forms before submission  
- Play animations when the user scrolls

### ✔ Work With Data
- Fetch data from servers (APIs)  
- Process and store data locally

### ✔ Create Full Applications
- Web apps (e.g., Gmail, Facebook)  
- Backend servers (Node.js)  
- Mobile apps (React Native)

---

## How JavaScript Works

JavaScript is executed by the browser’s JavaScript engine.  
Examples:

- **Chrome** → V8  
- **Firefox** → SpiderMonkey  
- **Safari** → JavaScriptCore  

It runs in a single thread but handles asynchronous tasks efficiently using:

- Callbacks  
- Promises  
- `async/await`

---

## Where Do You Write JavaScript?

- you can write the JavaScript at two place

### 1. Inside an HTML file
```html
<script>
  console.log("Hello, JavaScript!");
</script>
```

### 2. In a separate .js file
#### HTML:
```html
<script src="script.js"></script>
```

#### JS (script.js):
```js
console.log("External JS file loaded!");
```

