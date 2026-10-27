# how React was traditionally added directly into a plain HTML page without using tools like Vite, Create React App, or npm.


## 1. React and ReactDOM are two different libraries
### React
- Used to create components and UI structure
- Handles the logic of your interface
### ReactDOM
- Takes what React creates and puts it into the browser page (DOM)

Think of it like:
- React → designs the furniture
- ReactDOM → places the furniture inside the house

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Samples</title>
  </head>
  <body>
    <!-- Target container -->
    <div id="root"></div>

    <!-- React library & ReactDOM (Development Version)-->
    <script
  src="https://unpkg.com/react@16/umd/react.development.js">
  </script>
    <script
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js">
  </script>
    <script>
      // Pure React and JavaScript code
    </script>
  </body>
</html>
```

## 2. unpkg CDN

This line:

```html
<script src="https://unpkg.com/react@16/umd/react.development.js">
</script>
```
downloads React from a CDN.

A CDN (Content Delivery Network) is simply a server that hosts files online so you don't have to install them manually.


# React Execution in the Browser

React is a **JavaScript library that runs in the browser (client side)** when included in a web page, but React itself does not execute independently.

The **browser's JavaScript v8 engine** executes React code.

## Execution Flow

```text
Browser
   ↓
JavaScript Engine (V8, SpiderMonkey, etc.)
   ↓
React library code
   ↓
Your React application code
```

## Example

When you write:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

The browser does not directly understand React syntax.

Instead, the browser executes JavaScript that includes:

- React library code
- Your React application code

React then helps create and update the UI.

## Important Point

React is not replacing browser functionality.

React is built **on top of browser APIs** such as:

```js
document.createElement()
document.getElementById()
appendChild()
```

## Better Definition

Instead of saying:

> React executes in the browser

A more accurate statement is:

> React is a JavaScript library whose code is executed by the browser's JavaScript engine to help build and update user interfaces.

## Other Environments Where React Can Run

- Browser → Web applications
- Server → Server-side rendering
- Mobile → React Native
- Desktop → Electron