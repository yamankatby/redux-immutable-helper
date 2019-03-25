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
array(target).push(...elements);
```js
import { array } from 'redux-immutable-helper';

const animals = ['🐼', '🐶', '🐑'];
const newAnimalsArray = array(animals).push('🐈'); // output => ['🐼', '🐶', '🐑', '🐈'];
```

Also you can pass multiple element:  

```js
const animals = ['🐼', '🐶', '🐑'];
const newAnimalsArray = array(animals).push('🐈', '🐓', '🐇'); // output => ['🐼', '🐶', '🐑', '🐈', '🐓', '🐇'];
```
array(target).unshift(...elements);

```js
import { array } from 'redux-immutable-helper';

const fastFood = ['🍗', '🍤', '🍟'];
const newFastFoodArray = array(fastFood).unshift('🍔'); // output => ['🍔', '🍗', '🍤', '🍟'];
```

Also you can pass multiple element:

```js
const fastFood = ['🍗', '🍤', '🍟'];
const newFastFoodArray = array(fastFood).unshift('🍔', '🍕', '🍣'); // output => ['🍔', '🍕', '🍣', '🍗', '🍤', '🍟'];
```
array(target).pop(count);

```js
import { array } from 'redux-immutable-helper';

const clothes = ['👗', '👜', '👠'];
const newClothesArray = array(clothes).pop(); // output => ['👗', '👜'];
```

Also you can pass it a count

```js
const clothes = ['👗', '👜', '👠'];
const newClothesArray = array(clothes).pop(2); // output => ['👗'];
```

array(target).shift(count);

```js
import { array } from 'redux-immutable-helper';

const flowers = ['🌸', '🌹', '🌻'];
const newFlowersArray = array(flowers).shift(); // output => ['🌹', '🌻'];
```

Also you can pass it a count

```js
const flowers = ['🌸', '🌹', '🌻'];
const newFlowersArray = array(flowers).shift(2); // output => ['🌹'];
```

array(target).replace(expression, element);

```js
import { array } from 'redux-immutable-helper';

const fruits = ['🍎', '🍉', '🍓'];
const newFruitsArray = array(fruits).replace(0, '🍐'); // output => ['🍐', '🍉', '🍓'];
```

Also you can it a expression

```js
const fruits = ['🍎', '🍉', '🍓'];
const newFruitsArray = array(fruits).replace((fruit) => fruit === '🍎', '🍐'); // output => ['🍐', '🍉', '🍓'];
```

array(target).insertAfter(expression, element);

```js
import { array } from 'redux-immutable-helper';

const shoes = ['👡', '👠', '👞'];
const newShoesArray = array(shoes).insertAfter(0, '👢'); // output => ['👡', '👢', '👠', '👞'];
```

Also you can it a expression

```js
const shoes = ['👡', '👠', '👞'];
const newShoesArray = array(shoes).insertAfter((shoe) => shoe === '👡', '👢'); // output => ['👡', '👢', '👠', '👞'];
```

array(target).insertBefore(expression, element);

```js
import { array } from 'redux-immutable-helper';

const balls = ['🏀', '🎾', '⚽️'];
const newBallsArray = array(balls).insertBefore(1, '🎱'); // output => ['🏀', '🎱', '🎾', '⚽'];
```

Also you can it a expression

```js
const balls = ['🏀', '🎾', '⚽️'];
const newBallsArray = array(balls).insertBefore((ball) => ball === '🎾', '🎱'); // output => ['🏀', '🎱', '🎾', '⚽'];
```

array(target).remove(expression);

```js
import { array } from 'redux-immutable-helper';

const cars = ['🚙', '🚗', '🚕'];
const newCartsArray = array(cars).remove(1); // output => ['🚙', '🚕'];
```

Also you can it a expression

```js
const cars = ['🚙', '🚗', '🚕'];
const newCartsArray = array(cars).remove((car) => car === '🚗'); // output => ['🚙', '🚕'];
```
