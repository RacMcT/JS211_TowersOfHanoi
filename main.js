//HOW DO YOU WIN?
//The goal of the game is to move all of the disks from the left rod to the far right rod
//End has same pyramid order on the far right as started on the left

// Rules:
// Can only move a disk that is at the top of the pile
// Can only move a disk onto an empty rod or a larger disk
// Can only move one disk at a time
// Is allowed to move disk back and forth between rods
// Can take as many turns as needed to solve the puzzle

//Logical Progression of the game:
// Start with disk 1 on post A
// Move 1 from post A to post C
// so this means we move from it's starting point to where we want it to end on for this round

//Pseudo Code:
// if (disk ===1){ //"disk 1 is the disk number, 1 is smallest disk
// document.write("Move disk " + disk + " from post " + start + " to post " + 
//       destination + ".<br/>";
//"start" represents starting post, which changes depending on which disk you are moving
// "destination" represents the destination post, which also changes depending on which disk you are moving 
//   }

//n-1 disks





//UNIT TESTS:
// Only stacks onto empty rod or larger disk
// Only moves disk at top of pile
// User can move disks between rods
// Keeps track of movements it takes user to solve problem
// Calls winner of the game


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
// This function is updating where the discs are located and putting it into the console each time
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = () => {
  // const moveDisc(n, start, destination){
//   let mover = start.pop();
//   destination.push(mover);
// }

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = () => {
  // Your code here

}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
