```scss
                           ┌────────────────────────────┐
                           │     JavaScript Events      │
                           └────────────────────────────┘
                                       │
          ┌──────────────┬─────────────┼───────────────┬──────────────┐
          │              │             │               │              │
     Mouse Events  Keyboard Events  Form Events  Window/Document  Other Events
          │              │             │               │              │
  ┌───────┼──────┐  ┌────┼────┐  ┌────┼─────┐  ┌─────┼─────┐  ┌──────┼────────┐
  │ click       │  │ keydown  │  │ submit    │  │ load      │  │ error        │
  │ dblclick    │  │ keyup    │  │ change    │  │ resize    │  │ contextmenu  │
  │ mousedown   │  │ keypress │  │ input     │  │ scroll    │  │ animation*   │
  │ mouseup     │             │ focus      │  │ DOMContentLoaded │ │ transition* │
  │ mousemove   │             │ blur       │             │   │ touch events*
  │ mouseenter  │             │            │             │   │ drag & drop*
  │ mouseleave  │             │            │             │
  │ mouseover   │             │            │             │
  │ mouseout    │             │            │             │
  ```