# React Native AsyncStorage Deprecation

This repository demonstrates a common issue in React Native applications: the use of the deprecated `AsyncStorage` library.  The `bug.js` file showcases code using `AsyncStorage`, which can lead to unpredictable behavior and data loss, particularly on newer Android versions. The solution is provided in `bugSolution.js`.

## Problem

`AsyncStorage` is deprecated and no longer recommended for new projects.  It has limitations in terms of data persistence and performance, making it unsuitable for reliable data storage in modern React Native apps.

## Solution

The recommended approach is to migrate to a more robust data storage solution.  The `bugSolution.js` file provides an example using `MMKVStorage`, a high-performance key-value storage library.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app on your emulator or device.