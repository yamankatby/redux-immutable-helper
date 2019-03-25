# redux-immutable-helper

[![Latest Stable Version](https://img.shields.io/npm/v/redux-immutable-helper.svg)](https://www.npmjs.com/package/react-native-js-tableview)
[![NPM Downloads](https://img.shields.io/npm/dm/redux-immutable-helper.svg)](https://www.npmjs.com/package/react-native-js-tableview)
[![GitHub issues](https://img.shields.io/github/issues-raw/yamankatby/redux-immutable-helper.svg)](https://github.com/mohakapt/react-native-js-tableview/issues)

### Installation

```
npm i redux-immutable-helper
```
Or (If you're using yarn):

```
yarn add redux-immutable-helper
```

### Usage
####array(target).push(...elements);
```js
import { array } from 'redux-immutable-helper';

const numbers = [0, 1, 2];
const newNumbersArray = array(todoList).push(3); // output => [0, 1, 2, 3];
```

:dress:

######Also you can pass multiple element:  

```js
const numbers = [0, 1, 2];
const newNumbersArray = array(numbers).push(3, 4, 5); // output => [0, 1, 2, 3, 4, 5];
```
####array(target).unshift(...elements);

```js
import { array } from 'redux-immutable-helper';

const characters = ['b', 'c', 'd'];
const newCharactersArray = array(characters).unshift('a'); // output => ['a', 'b', 'c', 'd'];
```

######Also you can pass multiple element:

```js
const characters = ['b', 'c', 'd'];
const newCharactersArray = array(characters).unshift('x', 'a'); // output => ['x', 'a', 'b', 'c', 'd'];
```
####array(target).pop(...elements);

```js
import { array } from 'redux-immutable-helper';

const clothes = ['🧥', '👗', '👠'];
const newClothesArray = array(clothes).pop(); // output => ['🧥', '👗'];
```
