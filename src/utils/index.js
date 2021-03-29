export const findObjectByNameInArray = (list, name) => list.find((object) => object.name === name);

export const correctFloatingPoint = (number) => Math.round(number * 1000) / 1000;
