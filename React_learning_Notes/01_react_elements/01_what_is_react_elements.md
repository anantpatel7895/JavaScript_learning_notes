# What are React Elements?
> React Elements are the definition and description Of HTML elements in browser dom

React Elements are the building blocks of React applications. They are plain JavaScript objects that represent a DOM node or a component. React Elements describe what you want to see on the screen, and React takes care of rendering them efficiently.

When you write JSX (JavaScript XML), it gets transformed into React Elements. For example, the JSX code:

```jsx
    const element = <h1>Hello, world!</h1>;
```

is transformed into a React Element that looks like this:

```jsx
    const element = {
      type: 'h1',
      props: {
        children: 'Hello, world!'
      }
    };
```

> a React element is just a JavaScript literal that tells React how to construct the DOM element
