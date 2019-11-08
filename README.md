# Replace array items [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/replace-array-items/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/replace-array-items)

Replace all items in an array with the same value.

[![NPM Badge](https://nodei.co/npm/replace-array-items.png)](https://npmjs.com/package/replace-array-items)

## Install

```sh
npm install replace-array-items
```

## Usage

```js
const replaceArrayItems = require("replace-array-items");

replaceArrayItems([1, "a", null], "Hello");
//=> ["Hello", "Hello", "Hello"]
```

## API

### replaceArrayItems(array, value)

#### array

Type: `array`

The array to modify.

#### value

Type: `any`

The value to set all the items to.
