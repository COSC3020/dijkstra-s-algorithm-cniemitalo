/*const fs = require('fs'); 
const assert = require('assert'); 

eval(fs.readFileSync('code.js') + ''); 

let graph1 = [
    [0, 4, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 3],
    [0, 0, 0, 7, 0, 0],
    [0, 0, 0, 0, 3, 2],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 0]
];

/*
let graph2 = [
    [0, 6, 0, 0, 0], 
    [0, 0, 5, 0, 0], 
    [0, 0, 0, 1, 0], 
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0]
]; 
*/
/*
let graph3 = [
    [0, 2, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0],
    [1, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 0, 0, 7],
    [3, 0, 0, 0, 0, 0, 0]
];

let graph4 = [
    [0]
];

let graph5 = [
    [0, 5, 0, 0, 0],
    [0, 0, 7, 0, 0],
    [0, 0, 0, 3, 0],
    [0, 0, 0, 0, 2],
    [1, 0, 0, 0, 0]
];

assert(JSON.stringify(dijkstra(graph1, 0)) == JSON.stringify([0, 4, 1, 8, 11, 7])); 
//assert(JSON.stringify(dijkstra(graph2, 2)) == JSON.stringify([11, 5, 0, 1, 4])); 
assert(JSON.stringify(dijkstra(graph3, 3)) == JSON.stringify([1, 3, 6, 0, 5, 10, 10, 4])); 
assert(JSON.stringify(dijkstra(graph4, 0)) == JSON.stringify([0])); 
assert(JSON.stringify(dijkstra(graph5, 1)) == JSON.stringify([5, 0, 7, 8, 6])); 
*/
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let classGraph = [
  [0, 2, 1, 4, 0, 0, 0, 0],
  [0, 0, 1, 0, 10, 2, 0, 0],
  [9, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0]
];

let ferrisWheel = [
  [0, 3, 4, 6, 9, 1, 1],
  [0, 0, 10, 0, 0, 0, 0],
  [8, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 7.0],
  [8, 0, 0, 0, 0, 0, 1],
  [0, 3, 0, 0, 0, 0, 0]
];

let house = [
  [0, 1, 0, 4, 0, 0, 0],
  [0, 0, 15, 3, 0, 0, 1],
  [2, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 4],
  [0, 20, 9, 0, 0, 3, 0],
  [0, 0, 4, 0, 4, 0, 0],
  [0, 0, 0, 0, 2, 0, 0],
];

let houseExtra = [
  [0, 1, 0, 4, 0, 0, 0, 0],
  [0, 0, 15, 3, 0, 0, 1, 0],
  [2, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0],
  [0, 20, 9, 0, 0, 3, 0, 0],
  [0, 0, 4, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

assert(JSON.stringify(dijkstra(classGraph, 2)) == JSON.stringify([9,11,0,13,8,11,9,14]));
assert(JSON.stringify(dijkstra(classGraph, 4)) == JSON.stringify([18,20,9,7,0,3,1,6]));
assert(JSON.stringify(dijkstra(ferrisWheel, 0)) == JSON.stringify([0,3,4,5,7,1,1]));
assert(JSON.stringify(dijkstra(ferrisWheel, 5)) == JSON.stringify([8,4,12,13,15,0,1]));
assert(JSON.stringify(dijkstra(house, 1)) == JSON.stringify([12,0,10,3,3,6,1]));
assert(JSON.stringify(dijkstra(house, 5)) == JSON.stringify([6,7,4,10,4,0,8]));
assert(JSON.stringify(dijkstra(houseExtra, 1)) == JSON.stringify([12,0,10,3,3,6,1,Infinity]));
