React Text Overflow Component and Hook
=========================


[![npm downloads](https://img.shields.io/npm/dm/react-text-overflow.svg?style=flat-square)](https://www.npmjs.com/package/react-text-overflow)


## Installation
React Text Overflow requires **React 17 or later.**

```
npm i -S react-text-overflow
```

## Examples
* [In Repo](https://github.com/loktar00/react-text-overflow/blob/master/examples/src/App.tsx)

## Examples

### Basic Usage

This is the most basic usecase, which honestly you should just use vanilla CSS for this piece.

```jsx
import React from 'react';
import TextOverflow from 'react-text-overflow';

const MyComponent = () => (
    <TextOverflow text="this is some text that we want to truncate." />
)
```

### Overflow in the center

This will break the text in the center allowing the beginning and end to show.

```jsx
const MyComponent = () => (
 <TextOverflow truncatePosition="middle" text="this is some text that we want to truncate."  />
)
```

### Offsetting the overflow

This will break after the first 10 characters.

```jsx
const MyComponent = () => (
 <TextOverflow startPos={10} truncatePosition="middle" text="this is some text that we want to truncate."  />
)
```

### Overflowing from the left

This causes the text to overflow from the left of the element.

```jsx
const MyComponent = () => (
 <TextOverflow truncatePosition="left" text="this is some text that we want to truncate."  />
)
```

## Props

#### truncatePosition
Type: `left | middle | right` Default: `right`

This is what determines where the text will overflow.

#### startPos
Type: `Number` Default: `0`

This is to be used in combination with `truncatePosition` `center`, this will break the text in that location.

## Building TextOverflow

```
npm run build
```

## Running examples

```
cd examples
npm run dev
```



