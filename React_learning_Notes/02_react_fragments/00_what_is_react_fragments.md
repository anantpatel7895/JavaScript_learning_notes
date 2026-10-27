# What are React Fragments?

React Fragments are a way to group a list of children (react elements) without adding extra nodes to the DOM. They let you return **multiple elements** from a component **without a wrapper element**.

## Why use React Fragments?

In React, **a component must return a single element**. If you want to return multiple elements, you typically wrap them in a div or another container. However, this can lead to unnecessary nesting in the DOM, which can affect styling and performance. React Fragments solve this problem by allowing you to group elements without adding extra nodes to the DOM.

## How to use React Fragments?

You can use React Fragments in two ways:

1. **Using the Fragment component**:

```jsx
import React from "react";

function MyComponent() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
    </React.Fragment>
  );
}
```

2. **Using the shorthand syntax**:

```jsx
import React from "react";

function MyComponent() {
  return (
    <>
      <ChildA />
      <ChildB />
    </>
  );
}
```

Both approaches achieve the same result: grouping multiple elements without adding extra nodes to the DOM.
