# ALGO-RITHMS CHALLENGE // Mind the gap!

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `github.com/varnebla/mind-the-gap`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/your-github-name/your-repository`.

## 2. Challenge

#### Background
If you visit London🇬🇧 and travel on the Tube🚇, you might hear the announcer say, "Mind the gap!"⚠️

Usually this is to do with the gap between the train and the platform. Recently, another type of gap has started to appear on the overground trains. Train thieves🏴‍☠️ have been stealing entire carriages from trains, leaving a gap in the sequence of carriage numbers. You have been asked to write software to detect the problem.👩🏽‍💻👨🏻‍💻

#### Task
You must implement a function that receives the sequence of carriages as a string of carriage letters and returns the number of missing carriages. The train carriages are initially lettered from 'A' onwards with no gaps. Several carriages may be missing, but the remaining carriages are in their original sequence order. The highest-lettered carriage can never be missing (because that is where the engine is ⚙️). The number of carriages in a train can vary from 1 to 26 (i.e. 'A' to 'Z').

### 2.1. Examples

```js
countMissingCarriages("ABC") //should return 0 because all carriages are present.
countMissingCarriages("ABD") //should return 1 because carriage C is missing.
countMissingCarriages("BCF") //should return 3 because carriages A, D, and E are missing.
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.

🤘🎉
