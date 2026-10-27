# Browser DOM

The  **DOM  API**  is  a  collection  of  objects  that  JavaScript  can  use  to  interact  with  the **browser**  to  modify  the **browser DOM**.  If  you’ve  used  ***document.createElement**  or  **document.appendChild**, you’ve worked with the DOM API.

- **DOM API**: A set of methods and properties that allow JavaScript to interact with the browser's Document Object Model (DOM).
- **document**: The root object of the DOM that represents the entire HTML document.
- **DOM API** is a part of the browser's JavaScript environment that allows developers to manipulate the structure, style, and content of web pages dynamically. It provides methods for creating, modifying, and deleting elements in the DOM tree, as well as handling events and accessing element properties.
- **document.createElement**: Creates a new DOM element.
- **document.appendChild**: Adds a new child element to a parent element.

HTML is simply a set of instructions that a browser follows when constructing the **document object model**, or **DOM**. The **HTML elements** that make up an **HTML document** are just instructions for the browser to create a user interface. When the browser loads an HTML document, it reads the **HTML elements** and creates a corresponding **DOM tree**. Each **HTML element** becomes a **DOM node**, and the structure of the HTML document is reflected in the structure of the DOM tree. The DOM nodes can be manipulated using JavaScript to change the content, structure, and style of the user interface dynamically. In summary, HTML elements become DOM elements (or DOM Node) when the browser loads HTML and renders the user inter‐face.

# Virtual DOM

The **Virtual DOM** is a concept implemented by libraries like **React** to improve the performance of web applications. Instead of directly manipulating the real DOM, which can be slow and inefficient, React creates a lightweight copy of the DOM **in memory**. This copy is called the **Virtual DOM**.

When a component's state changes, React updates the Virtual DOM first. It then compares the updated Virtual DOM with the previous version using a process called **reconciliation**. By identifying the differences (or "diffs") between the two versions, React can determine the minimal set of changes needed to update the **real DOM**.

This approach has several benefits:

1. **Performance**: Updating the Virtual DOM is faster than updating the real DOM, as it involves fewer direct manipulations of the DOM tree.

2. **Batching**: React can batch multiple updates together, reducing the number of times the real DOM is updated and improving overall performance.

3. **Abstraction**: Developers can work with a simpler, more intuitive representation of the UI without worrying about the complexities of the real DOM

In summary, the Virtual DOM is a key feature of React that helps optimize rendering performance and provides a more efficient way to manage UI updates.

> Inserting an element into the DOM is one of the most costly DOM API operations—it’s slow. In contrast, updating DOM elements that are already in place performs much more quickly than inserting new ones.
