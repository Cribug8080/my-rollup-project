let acorn = require('acorn');

const ast = acorn.parse('1 + 1', {ecmaVersion: 2020});

console.log(ast)

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}