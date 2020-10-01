<div align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
    <h1>useCustomHooks</h1>
    <p>A collection of custom hooks for your next React project.</p>
	<br/>
	<div align="center">
  <a href="https://github.com/aromalanil/useCustomHooks/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/aromalanil/useCustomHooks?style=for-the-badge">
  </a>
	<a href="https://github.com/aromalanil/useCustomHooks/issues">
		<img alt="GitHub issues" src="https://img.shields.io/github/issues/aromalanil/useCustomHooks?style=for-the-badge">
	</a>
	<a href="https://github.com/aromalanil/useCustomHooks/commits/master">
		<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/aromalanil/useCustomHooks?style=for-the-badge">
	</a>
	</div>
</div>
<br/>

## 📘 Available Hooks

- [useLocalStorage](#-useLocalStorage)
- [useDebounce](#-useDebounce)

## 💾 useLocalStorage
Custom useState hook which saves the state value in localStorage

### Usage

```jsx
import React from "react"
import {useLocalStorage} from "useLocalStorage"

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

> Note: More about Debouncing : [here]()


### Usage

```jsx
import React from "react"
import {useDebounce} from "useDebounce"

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

## 🤝🏻 Contribution
PRs are welcome.

### Guidelines
- Create an issue before contributing
- If you are contributing a custom hook, please explain the working or include an example, a [CodeSandBox](https://codesandbox.io/) link will be ideal.


</br>

## 📜 License

```
MIT License

Copyright (c) 2020 Aromal Anil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## ✍🏻 Author

[Aromal Anil](https://aromalanil.me)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://aromalanil.me"><img src="https://avatars1.githubusercontent.com/u/49222186?v=4" width="100px;" alt=""/><br /><sub><b>Aromal Anil</b></sub></a><br /><a href="https://github.com/aromalanil/useCustomHooks/commits?author=aromalanil" title="Documentation">📖</a> <a href="https://github.com/aromalanil/useCustomHooks/commits?author=aromalanil" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!