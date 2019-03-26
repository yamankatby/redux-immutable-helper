# redux-immutable-helper

[![Latest Stable Version](https://img.shields.io/npm/v/redux-immutable-helper.svg)](https://www.npmjs.com/package/redux-immutable-helper)
[![NPM Downloads](https://img.shields.io/npm/dm/redux-immutable-helper.svg)](https://www.npmjs.com/package/redux-immutable-helper)
[![GitHub issues](https://img.shields.io/github/issues-raw/yamankatby/redux-immutable-helper.svg)](https://github.com/yamankatby/redux-immutable-helper/issues)
[![Used Languages](https://img.shields.io/github/languages/top/yamankatby/redux-immutable-helper.svg)](https://github.com/yamankatby/redux-immutable-helper/issues)

## Installation


```bash
npm install redux-immutable-helper --save
```
**Or if you're using yarn:**

```
yarn add redux-immutable-helper
```

## Getting Started
To make sure that you understood why I written this librery I want you to compare the Todo reducer below which I have written twice. One time only by using Javascript and one time using `redux-immutable-hlper` power.

**Only Javascript**
```js
const todoList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          ...action.newTodo,
        },
      ];
    case 'UPDATE_TODO':
      const updated_todo_index = state.findIndex((todo) => todo.id === action.updatedTodo.id);
      return [
        ...state.slice(0, updated_todo_index),
        action.updatedTodo,
        ...state.slice(updated_todo_index + 1),
      ];
    case 'TOGGLE_TODO':
      const toggled_todo_index = state.findIndex((todo) => todo.id === action.id);
      return [
        ...state.slice(0, toggled_todo_index),
        {
          ...state[toggled_todo_index],
          completed: !state[toggled_todo_index],
        },
        ...state.slice(toggled_todo_index + 1),
      ];
    case 'REMOVE_TODO':
      const removed_todo_index = state.findIndex((todo) => todo.id === action.id);
      return [
        ...state.slice(0, removed_todo_index),
        ...state.slice(removed_todo_index + 1),
      ];

    default:
      return state;
  }
};
``` 

**Using the power of redux-immutable-helper**

```js
import { array } from 'redux-immutable-helper';

const todoList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return array(state).push(action.newTodo);
    case 'UPDATE_TODO':
      return array(state).replace((todo) => todo.id === action.updatedTodo.id, action.updatedTodo);
    case 'TOGGLE_TODO':
      return array(state).replace((todo) => todo.id === action.id, {
        ...state[state.findIndex((todo) => todo.id === action.id)],
        completed: !state.findIndex((todo) => todo.id === action.id),
      });
    case 'REMOVE_TODO':
      return array(state).remove((todo) => todo.id === action.id);

    default:
      return state;
  }
};
```
**Note: Maybe you have noticed that the code in the 'TOGGLE_TODO' case uglier than the rest code. Let me congrats you for your Hawk Eyes. That's right because right now we only work with arrays and the todo individual is an object. But in the very near future we will be able to handle objects.** 

If it does make sense for you go up ⭐ me and let's read the documentation.

## Documentation

This is a list of the methods that you can access by calling `array()` function that we provide. 

|                  | Description                                                          | Parameters                                                | Example                            |
|------------------|----------------------------------------------------------------------|-----------------------------------------------------------|------------------------------------|
| `push()`         | Adds an element or more to the end of the targeted array.            | ...elements: any[]                                        | array([1, 2, 3]).push(4, 5);       |
| `unshift()`      | Adds an element or more to the beginning of the targeted array.      | ...elements: any[]                                        | array([3, 4]).unshift(1, 2);       |
| `pop()`          | Removes an element or more from the end of the targeted array.       | count: number                                             | array([1, 2, 3]).pop(2);           |
| `shift()`        | Removes an element or more from the beginning of the targeted array. | count: number                                             | array([1, 2, 3]).shift(2);         |
| `concat()`       | Concats the passed array with the end of the targeted array.         | newArray: any[]                                           | array([1, 2]).concat([3, 4]);      |
| `insertAfter()`  | Adds an element to the targeted array after the passed index.        | expression: number | ((element) => boolean), element: any | array([1, 3]).insertAfter([0, 2]); |
| `insertBefore()` | Adds an element to the targeted array before the passed index.       | expression: number | ((element) => boolean), element: any | array([1, 3]).insertBefore(1, 2);  |
| `remove()`       | Removes an element from the passed index.                            | expression: number | ((element) => boolean)               | array([1, 2, 3]).remove(2);        |

##push()
```js
import { array } from 'redux-immutable-helper';

const animals = ['🐼', '🐶', '🐑'];
const newAnimalsArray = array(animals).push('🐈'); // output => ['🐼', '🐶', '🐑', '🐈'];
```

**Also you can pass multiple element:**

```js
const animals = ['🐼', '🐶', '🐑'];
const newAnimalsArray = array(animals).push('🐈', '🐓', '🐇'); // output => ['🐼', '🐶', '🐑', '🐈', '🐓', '🐇'];
```
##unshift()

```js
import { array } from 'redux-immutable-helper';

const fastFood = ['🍗', '🍤', '🍟'];
const newFastFoodArray = array(fastFood).unshift('🍔'); // output => ['🍔', '🍗', '🍤', '🍟'];
```

**Also you can pass multiple element:**

```js
const fastFood = ['🍗', '🍤', '🍟'];
const newFastFoodArray = array(fastFood).unshift('🍔', '🍕', '🍣'); // output => ['🍔', '🍕', '🍣', '🍗', '🍤', '🍟'];
```
##pop()

```js
import { array } from 'redux-immutable-helper';

const clothes = ['👗', '👜', '👠'];
const newClothesArray = array(clothes).pop(); // output => ['👗', '👜'];
```

**Also you can pass it a count**

```js
const clothes = ['👗', '👜', '👠'];
const newClothesArray = array(clothes).pop(2); // output => ['👗'];
```

##shift()

```js
import { array } from 'redux-immutable-helper';

const flowers = ['🌸', '🌹', '🌻'];
const newFlowersArray = array(flowers).shift(); // output => ['🌹', '🌻'];
```

**Also you can pass it a count**

```js
const flowers = ['🌸', '🌹', '🌻'];
const newFlowersArray = array(flowers).shift(2); // output => ['🌹'];
```

##replace()

```js
import { array } from 'redux-immutable-helper';

const fruits = ['🍎', '🍉', '🍓'];
const newFruitsArray = array(fruits).replace(0, '🍐'); // output => ['🍐', '🍉', '🍓'];
```

**Also you can it a expression**

```js
const fruits = ['🍎', '🍉', '🍓'];
const newFruitsArray = array(fruits).replace((fruit) => fruit === '🍎', '🍐'); // output => ['🍐', '🍉', '🍓'];
```

##insertAfter()

```js
import { array } from 'redux-immutable-helper';

const shoes = ['👡', '👠', '👞'];
const newShoesArray = array(shoes).insertAfter(0, '👢'); // output => ['👡', '👢', '👠', '👞'];
```

**Also you can it a expression**

```js
const shoes = ['👡', '👠', '👞'];
const newShoesArray = array(shoes).insertAfter((shoe) => shoe === '👡', '👢'); // output => ['👡', '👢', '👠', '👞'];
```

##insertBefore()

```js
import { array } from 'redux-immutable-helper';

const balls = ['🏀', '🎾', '⚽️'];
const newBallsArray = array(balls).insertBefore(1, '🎱'); // output => ['🏀', '🎱', '🎾', '⚽'];
```

**Also you can it a expression**

```js
const balls = ['🏀', '🎾', '⚽️'];
const newBallsArray = array(balls).insertBefore((ball) => ball === '🎾', '🎱'); // output => ['🏀', '🎱', '🎾', '⚽'];
```

##remove()

```js
import { array } from 'redux-immutable-helper';

const cars = ['🚙', '🚗', '🚕'];
const newCartsArray = array(cars).remove(1); // output => ['🚙', '🚕'];
```

**Also you can it a expression**

```js
const cars = ['🚙', '🚗', '🚕'];
const newCartsArray = array(cars).remove((car) => car === '🚗'); // output => ['🚙', '🚕'];
```

## Authors

* **Yaman KATBY** - *Initial work* - [Website](https://yaman.idewaxa.com/)

See also the list of [contributors](https://github.com/yamankatby/redux-immutable-helper/contributors) who participated in this project.

## License

This library is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
