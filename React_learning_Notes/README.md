# React Component Notes

1. A component has to start with a capital letter, otherwise it isn’t treated as a component in React. If you name it `app` instead of `App`, React will not recognize it as a component and will treat it as a regular HTML tag, which can lead to unexpected behavior.

2. A component must return a single React element. This means that if you want to return multiple elements, they must be wrapped in a single parent element, such as a `<div>` or a **React Fragment** (`<>...</>`).

3. 