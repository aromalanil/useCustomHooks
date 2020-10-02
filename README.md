<div align="center">
    <h1>useCustomHooks</h1>
    <p>A collection of custom hooks for your next React project as an npm package</p>
	<br/>
	<div align="center">
  <a href="https://github.com/aromalanil/useCustomHooks/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/aromalanil/useCustomHooks?style=for-the-badge">
  </a>
	<a href="https://github.com/aromalanil/useCustomHooks/issues">
		<img alt="GitHub issues" src="https://img.shields.io/github/issues/aromalanil/useCustomHooks?style=for-the-badge">
	</a>
	<a href= "https://www.npmjs.com/package/use-custom-hooks/">
		<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/use-custom-hooks?style=for-the-badge">
	</a>
        <a href= "https://www.npmjs.com/package/use-custom-hooks/v/latest">
		<img alt="npm" src="https://img.shields.io/npm/v/use-custom-hooks?style=for-the-badge">
	</a>
	<a href= "https://www.npmjs.com/package/use-custom-hooks/">
		<img alt="npm Downloads/Week" src="https://img.shields.io/npm/dw/use-custom-hooks?style=for-the-badge">
	</a>
	<a href="https://github.com/aromalanil/useCustomHooks/blob/master/LICENSE">
		<img alt="GitHub License" src="https://img.shields.io/github/license/aromalanil/useCustomHooks?style=for-the-badge">
	</a>
  </br>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="https://github.com/aromalanil/useCustomHooks/graphs/contributors"><img src="https://img.shields.io/badge/all_contributors-3-orange.svg?style=for-the-badge" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END --> 

  </div>
</div>
<br/>

## 🧰 Installation

### Using npm or yarn 📦

```bash
# Using npm
npm i use-custom-hooks

# Using yarn
yarn add use-custom-hooks
```


## 📘 Available Hooks

- [useLocalStorage](#-uselocalstorage)
- [useDebounce](#-usedebounce)
- [useDarkMode](#-usedarkmode)
- [useToggle](#-usetoggle)
- [useGeoLocation](#-usegeolocation)

## 💾 useLocalStorage
Custom useState hook which saves the state value in localStorage

### Usage

```jsx
import React from "react"
import { useLocalStorage } from "use-custom-hooks"

const LocalValue = () =>{
  const [username,setUserName] = useLocalStorage("john_doe","username")
  /*
   If username exists in localStorage, the value of username state will be
   localStorage.getItem("username"). If username doesn't exist in localStorage, 
   the value of the state will be "john-doe" and a new item will be created in
   localStorage will key "username"
  */

  return(
   <span>
    Value from localstorage is {username}
   </span>
  );
}
```

## 🏀 useDebounce
Convert a normal function to a debounced function.

> Note: More about Debouncing : [here](https://www.geeksforgeeks.org/debouncing-in-javascript/)


### Usage

```jsx
import React from "react"
import { useDebounce } from "use-custom-hooks"

const LocalValue = () =>{
   
  const fetchData= () =>{
    //Fetch Data function
  }
  
  const debouncedFetchData = useDebounce(fetchData,300)
  /*
   No matter how many times we call this function in 300ms, it will only
   execute once.
  */ 

  return(
   <div>
    Lorem Ipsum
   </div>
  );
}
```

## 🌑 useDarkMode
Let's you toggle dark-mode by adding and removing a className from/to
the body. The user-preference is stored in localStorage.

### Usage

```jsx
import React from "react"
import { useDarkMode } from "use-custom-hooks"

const App = () =>{
  const [isDarkMode,toggleDarkMode] = useDarkMode("dark")
  /*
    "dark" is the class name to be added to the body.
  */ 

  return(
   <div>
    <h1>Hello World</div>
    <button onClick={toggleDarkMode}>Toggle Dark-Mode</button>
    {/* The class '.dark' is added to body when dark-mode, and removed when light-mode. */}
   </div>
  );
}
```
## 🔘 useToggle
Returns a boolean state and a state toggle function.

### Usage

```jsx
import React from "react"
import { useToggle } from "use-custom-hooks"

const Mood = () =>{
  const [isHappy,toggleIsHappy] = useToggle(true);
  /*
    If isHappy state is true calling toggleIsHappy function will set 
    the isHappy state to false, and vise versa.
  */

  return(
   <div>
    <h1>Hello World</div>
    <p>{ `The user is ${switchState ? "Happy 😃" : "Sad 😢"}` }</p>
    <button onClick={toggleIsHappy}>Toggle</button>
   </div>
  );
}
```

## 🌎 useGeoLocation
Get latitude and longitude positions from your browser

### Usage

```jsx
import React from "react"
import { useGeoLocation } from "use-custom-hooks"

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
}
```

## 🤝🏻 Contributing
Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/aromalanil/useCustomHooks/compare).

### 📋 Guidelines
Please read [CONTRIBUTING](https://github.com/aromalanil/useCustomHooks/blob/master/CONTRIBUTING.md) for details and the process for submitting pull requests to us.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://aromalanil.me"><img src="https://avatars1.githubusercontent.com/u/49222186?v=4" width="100px;" alt=""/><br /><sub><b>Aromal Anil</b></sub></a><br /><a href="https://github.com/aromalanil/useCustomHooks/commits?author=aromalanil" title="Documentation">📖</a> <a href="https://github.com/aromalanil/useCustomHooks/commits?author=aromalanil" title="Code">💻</a> <a href="#maintenance-aromalanil" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://www.rahulmahesh.me/"><img src="https://avatars3.githubusercontent.com/u/41413029?v=4" width="100px;" alt=""/><br /><sub><b>Rahul Mahesh</b></sub></a><br /><a href="https://github.com/aromalanil/useCustomHooks/commits?author=RahulMahesh62" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/fernandoamz"><img src="https://avatars3.githubusercontent.com/u/7818620?v=4" width="100px;" alt=""/><br /><sub><b>Fernando Amezcua</b></sub></a><br /><a href="https://github.com/aromalanil/useCustomHooks/commits?author=fernandoamz" title="Code">💻</a> <a href="https://github.com/aromalanil/useCustomHooks/commits?author=fernandoamz" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/aromalanil/useCustomHooks/blob/master/LICENSE) file for details.

## ✍🏻 Creator

[Aromal Anil](https://aromalanil.me)
