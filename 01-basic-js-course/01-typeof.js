// DataTypes

// Number

((start) => {
  if (!start) return;
  let myType = 17;

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// String

((start) => {
  if (!start) return;
  let myType = "Hello";

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// Boolean

((start) => {
  if (!start) return;
  let myType = true;

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// Object

((start) => {
  if (!start) return;
  let myType = null;

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// Undefined

((start) => {
  if (!start) return;
  let myType = undefined;

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// Array => Object

((start) => {
  if (!start) return;
  let myType = [];

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// Object

((start) => {
  if (!start) return;
  let myType = {};

  console.log({
    value: myType,
    typeOf: typeof myType,
  });
})(true);

// Function

((start) => {
  if (!start) return;
  let myType = console.log;

  myType({
    value: myType,
    typeOf: typeof myType,
  });
})(true);
