// src/main.js

import { version } from "../package.json";
import { codeSplitting } from "./codeSplitting/index";
import { DeadCodeFn } from "./deadCode/index";
import * as Utils from "./utils/index";

export default function () {
  console.log('version', version);
}

console.log('getPerformanceDate', Utils.getPerformanceDate());
console.log('getItem', Utils.getItem('u'));
console.log('DeadCodeFn', DeadCodeFn());
console.log('codeSplitting', codeSplitting());