React Text Overflow Component and Hook
=========================

## [See it in action](https://loktar00.github.io/react-text-overflow/)

React Text Overflow is a React component that targets the ability to overflow a single line of text (with ellipses) from the left, or the center, or from an offset. Hoping one day this is entireably possible with CSS but we're not quite there yet.


[![npm downloads](https://img.shields.io/npm/dm/react-text-overflow.svg?style=flat-square)](https://www.npmjs.com/package/react-text-overflow)


## Installation
React Text Overflow requires **React 17 or later.**

```
npm i -S react-text-overflow
```

## Examples
* [Live Examples](https://loktar00.github.io/react-text-overflow/)
* [In Repo](https://github.com/loktar00/react-text-overflow/blob/master/examples/src/App.tsx)

## Examples

### Basic Usage

This is the most basic usecase, which honestly you should just use vanilla CSS for this piece. It will overflow text from the end.

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

### Overflowing from the start

This causes the text to overflow from the left of the element.

```jsx
const MyComponent = () => (
 <TextOverflow truncatePosition="start" text="this is some text that we want to truncate."  />
)
```

## Props

#### truncatePosition
Type: `start | middle | end` Default: `end`

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
