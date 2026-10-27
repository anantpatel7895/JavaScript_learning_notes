# App Component

```tsx
function App() {
return (
<div>
<h1>Hello React</h1>
</div>
);
}
export default App;
```

# IMPORTANT NOTE
- The `App` component is a **function** that returns JSX, which is a syntax extension for JavaScript that looks similar to HTML.
- A component has to start with a capital letter, otherwise it isn’t treated as a component in React. If you name it `app` instead of `App`, React will not recognize it as a component and will treat it as a regular HTML tag, which can lead to unexpected behavior.