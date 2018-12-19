/*
Response for the excercise of updating an inventory that can be found on:
https://learn.freecodecamp.org/coding-interview-prep/algorithms/inventory-update/ 

updateInventory takes two params
    1. arr1: The current state of the inventory.
        e.g.: [[21, "Bowling Ball"], [2, "Dirty Sock"]];
    2. arr2: Items added to the current inventory.
        e.g.: [[67, "Bowling Ball"], [7, "Toothpaste"]];

Each item is represented by a list containing the number of items in the first
position and the name of the item on the second position.

updateInventory returns a new state of the current inventory with the items
in arr2 added to arr1.
*/

function updateInventory(arr1, arr2) {
    arr2.map((item) => {
        let index = getItemIndex(item, arr1);
        arr1 = setItem(index, item, arr1)
    });
    
    return arr1.sort((a, b) => a[1] > b[1]);
}

function setItem(index, item, array) {
    if (index >= 0) {
        array[index] = update_item(array[index], item)
        return array
    }
    array.push(item)
    return array
}

function getItemIndex(item, array) {
    return array.findIndex((new_item) => {
        return new_item[1] == item[1];
    });
}


function update_item(item1, item2) {
    let stock = item1[0] + item2[0];
    return [stock, item1[1]];
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"],
              [1, "Hair Pin"], [5, "Microphone"]];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
              [67, "Bowling Ball"], [7, "Toothpaste"]];

