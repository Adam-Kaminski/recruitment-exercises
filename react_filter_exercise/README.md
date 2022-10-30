# React Exercise - Filter
This is a template app for React Exercise.

## How to start the application
Just run `npm start`. App will be available at `localhost:3000`.
To make debugging easier, use Chrome browser and download Redux DevTools extension for Chrome.

## Instructions
### First step
Create a component that displays list of people persisted in redux store. `People.jsx` should display list of people in such way:
```html
<div class='App-box'>John Doe</div>
<div class='App-box'>Foo Bar</div>
<div class='App-box'>James Bond</div>
<!-- and so on... -->
```
Collection of divs should be returned from a callback (not directly in `return`).

### Second step
In `Filter.jsx` create an input, which modifies `people.query` property in redux store. This should be done by `onChange` callback. Don't use `refs` or `jquery`. Also, no need to use any `debounce` or `throttle`.

### Third step
In `People.jsx` in a method that renders people list, create a method that will filter people collection by query from our input. This filter should be **case insensitive**.

Files that should be edited:
- src/components/People.jsx
- src/components/Filter.jsx
- src/redux/*
  - types.js
  - reducer.js
  - actions.js
  - selectors.js

Do not edit any other files.

### Final result
Here's how this application should work: https://gfycat.com/SimilarDefensiveCatbird

## Note
Take commented ellipsises (...) as hints where to put lines of code. **Don't forget to remove unnecessary chunks of code such as unused methods and variables!**.
