# React Exercise - Recursion
This is a template app for React Exercise.

## How to start the application
- `yarn install`
- `yarn start`

## Instructions
Write a React component, that receives array of React Component classes (e.g. "One", "Two", "Three") as prop, then **recursively** renders HTML with those components:
```html
<One>
  <Two>
    <Three>
    </Three>
  </Two>
</One>
```

Let the produced html be as followed:

```html
<div class='App-box'>
  One
  <div class='App-box'>
    Two
    <div class='App-box'>
      Three
    </div>
  </div>
</div>
```

Files that should be edited:
- src/recursion/Recursion.js
- src/recursion/RecursiveComponent.js

Do not edit any other files.

### Bonus exercise
Modify your `One`, `Two` and `Three` components, so they don't re-render on every timer tick. `RecursiveComponent` can re-render, but each component in recursive function shouldn't.
