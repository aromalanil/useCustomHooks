# Documentation

## 📗 Index

- [useLocalStorage](#-uselocalstorage)
- [useStack](#-usestack)
- [useDebounce](#-usedebounce)
- [useDarkMode](#-usedarkmode)
- [useToggle](#-usetoggle)
- [useMousePosition](#-usemouseposition)
- [useGeoLocation](#-usegeolocation)

## 💾 useLocalStorage

Custom useState hook which saves the state value in localStorage

### Usage

```jsx
import React from "react";
import { useLocalStorage } from "use-custom-hooks";

const LocalValue = () => {
  const [username, setUserName] = useLocalStorage("john_doe", "username");
  /*
   If username exists in localStorage, the value of username state will be
   localStorage.getItem("username"). If username doesn't exist in localStorage, 
   the value of the state will be "john-doe" and a new item will be created in
   localStorage will key "username"
  */

  return <span>Value from localstorage is {username}</span>;
};
```

### Parameters

1. `initialValue` (_any_) : Initial value of the state.
2. `key` (_String_) : Key for the localStorage.

### Return value

`[state,setState]`

1. `state` (_any_) : The created state.
2. `setState` (_function_) : Function to change the state value.

## 📚 useStack
Hook for creating and managing Stack.

### Usage

```jsx
import React from "react";
import { useStack } from "use-custom-hooks";

const LocalValue = () => {
  const [stack, push, pop] = useStack([]);
  /*
    Returns an array with stack itself, push and pop functions.
  */

  const generateStackSpan = () => stack.map((x) => <span>{x} </span>);

  return (
    <div>
      <h1>The stack contains: {generateStackSpan()}</h1>
      <button onClick={pop}>Pop</button>
      {/* Removes last element from stack */}
      <button onClick={() => push(1)}>Push</button>
      {/* Adds one to the end of the stack */}
    </div>
  );
};
```

### Parameters

1. `initialValue` (_Array_) : Initial value of the stack.

### Return value

`[stack,push,pop]`

1. `stack` (_Array_) : The created stack.
2. `push` (_function_) : Function to add an element to the end of the stack.
3. `pop` (_function_) : Function to remove last element from the stack.

## 🏀 useDebounce

Convert a normal function to a debounced function.

> Note: More about Debouncing : [here](https://www.geeksforgeeks.org/debouncing-in-javascript/)

### Usage

```jsx
import React from "react";
import { useDebounce } from "use-custom-hooks";

const LocalValue = () => {
  const fetchData = () => {
    //Fetch Data function
  };

  const debouncedFetchData = useDebounce(fetchData, 300);
  /*
   No matter how many times we call this function in 300ms, it will only
   execute once.
  */

  return <div>Lorem Ipsum</div>;
};
```

## 🌑 useDarkMode

Let's you toggle dark-mode by adding and removing a className from/to
the body. The user-preference is stored in localStorage.

### Usage

```jsx
import React from "react";
import { useDarkMode } from "use-custom-hooks";

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode("dark");
  /*
    "dark" is the class name to be added to the body.
  */

  return (
    <div>
      <h1>Hello World</div>
      <button onClick={toggleDarkMode}>Toggle Dark-Mode</button>
      {/* The class '.dark' is added to body when dark-mode, and removed when light-mode. */}
    </div>
  );
};
```

## 🔘 useToggle

Returns a boolean state and a state toggle function.

### Usage

```jsx
import React from "react";
import { useToggle } from "use-custom-hooks";

const Mood = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  /*
    If isHappy state is true calling toggleIsHappy function will set 
    the isHappy state to false, and vise versa.
  */

  return (
    <div>
      <h1>Hello World</div>
      <p>{`The user is ${isHappy ? "Happy 😃" : "Sad 😢"}`}</p>
      <button onClick={toggleIsHappy}>Toggle</button>
    </div>
  );
};
```

## 🖱 useMousePosition

Returns an object with the current coordinates of the mouse pointer.

### Usage

```jsx
import React from "react";
import { useMousePointer } from "use-custom-hooks";

const Mouse = () => {
  const { x, y } = useMousePosition();
  /*
    Using Object destructuring to get x & y coordinates
    from mousePosition object.
  */

  return (
    <div>
      <h1>Mouse Pointer Location</div>
      <p>The mouse pointer is at : {`(${x},${y})`}</p>
      {/* The x,y coordinates will be updated as you move your mouse.*/}
    </div>
  );
};
```

## 🌎 useGeoLocation

Get latitude and longitude positions from your browser

### Usage

```jsx
import React from "react";
import { useGeoLocation } from "use-custom-hooks";

const Home = () => {
  /*
   * The hook will return you an object like this:
   *
   * {
   *   latitude: 1233234,
   *   longitude: -1234345,
   * }
   *
   */
  const geoLocation = useGeoLocation();

  return (
    <div>
      {geoLocation.latitude}
      {geoLocation.longitude}
    </div>
  );
};
```

# Contribution Guidelines

Documentation for each hook should follow this template.

## Name

Description goes here.

### Usage

```jsx
//Code Example with comments
```

### Parameters

List the parameters passed to the hook, their type and description as ordered list.

> Note : If the parameter is optional mention it.

### Return value

Specify the value return by the hook, with type and description.
