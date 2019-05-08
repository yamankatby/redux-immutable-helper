# redux-immutable-helper

[![Latest Stable Version](https://img.shields.io/npm/v/redux-immutable-helper.svg)](https://www.npmjs.com/package/redux-immutable-helper)
[![NPM Downloads](https://img.shields.io/npm/dm/redux-immutable-helper.svg)](https://www.npmjs.com/package/redux-immutable-helper)
[![GitHub issues](https://img.shields.io/github/issues-raw/yamankatby/redux-immutable-helper.svg)](https://github.com/yamankatby/redux-immutable-helper/issues)
[![Used Languages](https://img.shields.io/github/languages/top/yamankatby/redux-immutable-helper.svg)](https://github.com/yamankatby/redux-immutable-helper/issues)

To make sure that you understood why I wrote this library, I want you to compare the "Todo App" reducer below which I wrote twice. One time only by using Javascript and one time by using the power of `redux-immutable-hlper` library.

**Only Javascript**
```js
const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, { ...action.newTodo }];
    }
    case "UPDATE_TODO": {
      const updated_todo_index = state.findIndex(
        todo => todo.id === action.updatedTodo.id
      );
      return [
        ...state.slice(0, updated_todo_index),
        action.updatedTodo,
        ...state.slice(updated_todo_index + 1)
      ];
    }
    case "TOGGLE_TODO": {
      const toggled_todo_index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, toggled_todo_index),
        {
          ...state[toggled_todo_index],
          completed: !state[toggled_todo_index]
        },
        ...state.slice(toggled_todo_index + 1)
      ];
    }
    case "REMOVE_TODO": {
      const removed_todo_index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, removed_todo_index),
        ...state.slice(removed_todo_index + 1)
      ];
    }

    default:
      return state;
  }
};
``` 

**Using the power of `redux-immutable-helper`**

```js
import { array } from "redux-immutable-helper";

const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return array(state)
        .push(action.newTodo)
        .toArray();
    case "UPDATE_TODO":
      return array(state)
        .replace(todo => todo.id === action.updatedTodo.id, action.updatedTodo)
        .toArray();
    case "TOGGLE_TODO":
      return array(state)
        .replace(
          todo => todo.id === action.id,
          prevTodo => ({ ...prevTodo, completed: !prevTodo.completed })
        )
        .toArray();
    case "REMOVE_TODO":
      return array(state)
        .remove(todo => todo.id === action.id)
        .toArray();

    default:
      return state;
  }
};

``` 

If it does make sense for you go up ⭐ me and let's read the documentation.

## Installation


```bash
npm install redux-immutable-helper --save
```
**Or if you're using yarn:**

```
yarn add redux-immutable-helper
```

## Documentation

This is a list of the methods that you can access by calling `array()` function that we provide. 

|                  | description                                                                | parametres                                                                    |
|------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| `push()`         | Adds an element or more to the end of the source array.                    | ...elements: any[]                                                            |
| `unshift()`      | Adds an element or more to the beginning of the source array.              | ...elements: any[]                                                            |
| `pop()`          | Removes an element or more from the end of the source array.               | count: number = 1                                                             |
| `shift()`        | Removes an element or more from the beginning of the source array.         | count: number = 1                                                             |
| `concat()`       | Concats the passed array with the end of the source array.                 | target: any[]                                                                 |
| `replace()`      | Replaces an element from the source array with the one that you pass.      | index: number | ((element) => boolean), element: any | ((prevElement) => any) |
| `insertAfter()`  | Inserts an element to the source array after the index that you pass.      | index: number | ((element) => boolean), element: any                          |
| `insertBefore()` | Inserts an element to the source array before the index that you pass.     | index: number | ((element) => boolean), element: any                          |
| `remove()`       | Removes an element from the index the you pass.                            | index: number | ((element) => boolean)                                        |
| `toArray()`      | Returns the result of the operations those you took over the source array. |                                                                               |

### push()
`push()` method like the original `Array.prototype.push()` method helps you to add an element to the end of the array but without mutating the original array. For example: 
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .push("🐈")
  .toArray(); // output => ["🐼", "🐶", "🐑", "🐈"];
```
the `newList` variable will contain the new array and the `list` variable will still as it.


Also it's allowing you to add multi elements to the end of the array by passing them as a separated arguments as following.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .push("🐈", "🐓", "🐇")
  .toArray(); // output => ["🐼", "🐶", "🐑", "🐈", "🐓", "🐇"];
```


### unshift()
`unshift()` method works exactly like the `Array.prototype.unshift()` method which can be found inside the original `Array.prototype` object which allows you to add an element to the beginning of the array but without mutating the original array. For example:
```js
import { array } from "redux-immutable-helper";

const list = ["🐶", "🐑", "🐈"];
const newList = array(list)
  .unshift("🐼")
  .toArray(); // output => ["🐼", "🐶", "🐑", "🐈"];
```

As the `push()` method also the `unshift()` method also allowing you to add multi elements to the beginning of the array by passing the elements as separated arguments as following.
```js
const list = ["🐶", "🐑", "🐈"];
const newList = array(list)
  .unshift("🐼", "🐓", "🐇")
  .toArray(); // output => ["🐼", "🐓", "🐇", "🐶", "🐑", "🐈"];
```


### pop()
As the `Array.prototype.pop()` method `pop()` method allows you to remove an element from the end of the array but without mutating the original array. For example:
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .pop()
  .toArray(); // output => ["🐼", "🐶"];
```

Also you can remove multi elements from the of end the array by passing the count of the elements those you want to remove as following.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .pop(2)
  .toArray(); // output => ["🐼"];
```


### shift()
As the `Array.prototype.shift()` method `shift()` method allows you to remove an element from the beginning of the array but without mutating the original array. For example:
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .shift()
  .toArray(); // output => ["🐶", "🐑"];
```

Also you can remove multi elements from the beginning of the array by passing the count of the elements those you want to remove as following.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .shift(2)
  .toArray(); // output => ["🐑"];
```


### replace()
`replace()` method unlike the other methods has no synonym in the `Array.prototype` object. `replace()` method helps you to replace an element in the array with another one that you pass. `replace()` method takes two arguments. First argument the index of the element that you want to replace and the second argument the new element. For example:
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .replace(0, "🐈")
  .toArray(); // output => ["🐈", "🐶", "🐑"];
```

If you don't know the exact index of the element that you want to replace you can pass a predicate function as the first argument. The predicate funtion is a function to execute on each value in the array until the function returns true, indicating that the satisfying element was found. The `replace()` method will use the index of that element as the `index` argument.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .replace(animal => animal === "🐼", "🐈")
  .toArray(); // output => ["🐈", "🐶", "🐑"];
```

If you calculating your new element with an expensive operation and you want to use the previous element to calculate the new one you can pass a callback function as the second argument to the `replace()` method. The callback function is a function takes the previous element as the first argument and returns the new element.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .replace(animal => animal === "🐼", prevAnimal => prevAnimal + "🐈")
  .toArray(); // output => ["🐼🐈", "🐶", "🐑"];

```


### insertAfter()
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list).insertAfter(1, "🐈").toArray(); // output => ["🐼", "🐶", "🐈", "🐑"];
```

**Also you can it a expression**
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list).insertAfter(animal => animal === "🐶", "🐈").toArray(); // output => ["🐼", "🐶", 🐈", "🐑"];
```


### insertBefore()
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list).insertBefore(1, "🐈").toArray(); // output => ["🐼", "🐈", "🐶", "🐑"];
```

**Also you can it a expression**
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list).insertBefore(animal => animal === "🐶", "🐈").toArray(); // output => ["🐼", 🐈", "🐶", "🐑"];
```


### remove()
```js
import { array } from "redux-immutable-helper";

const list = ["🐼", "🐶", "🐑"];
const newList = array(list).remove(2).toArray(); // output => ["🐼", "🐶"];
```

**Also you can it a expression**
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list).remove(animal => animal === "🐑").toArray(); // output => ["🐼", "🐶"];
```


## Contributing
We would love to have community contributions and support! A few areas where could use help right now:
* Adding `replaceAll` method to array object
* Adding `removeAll` method to array object
* Bug reports and/or fixes
* Writing tests
* Creating examples for the docs

If you want to contribute, please submit a pull request, or contact m.yaman.katby@gmail.com for more information.
When you commit your messages, follow this convention:
```
Main changes subject
- Optional message
- Another optional message
```

If you do a breaking change, add an explanation preceded by `BREAKING CHANGE:` keyword. For example:
```
BREAKING CHANGE: Main changes subject
- Optional message
- Another optional message
```

## Authors

* **Yaman KATBY** - *Initial work* - [Website](https://yaman.idewaxa.com/)

See also the list of [contributors](https://github.com/yamankatby/redux-immutable-helper/contributors) who participated in this project.

## License

This library is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
