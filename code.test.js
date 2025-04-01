const fs = require('fs'); 
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

let graph2 = [
    [0, 6, 0, 0, 0], 
    [0, 0, 5, 0, 0], 
    [0, 0, 0, 1, 0], 
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0]
]; 

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
assert(JSON.stringify(dijkstra(graph2, 2)) == JSON.stringify([11, 5, 0, 1, 4])); 
assert(JSON.stringify(dijkstra(graph3, 3)) == JSON.stringify([1, 3, 6, 0, 5, 10, 10, 4])); 
assert(JSON.stringify(dijkstra(graph4, 0)) == JSON.stringify([0])); 
assert(JSON.stringify(dijkstra(graph5, 1)) == JSON.stringify([5, 0, 7, 8, 6])); 