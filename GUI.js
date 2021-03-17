// GUI Attempt for JS:

 const disc, bar, dragdone;

function towersOfHanoi(){
  disc = document.getElementsByClassName("disc");
  bar = document.getElementsByClassName("bar");
  for (i = 0;i<disc.length;i++){
    disc[i].draggable = i==0;
    disc[i].addEventListener("dragstart",dragstart);
  }
  for (var i = 0;i<bars.length;i++){
    bar[i].addEventListener("dragover", dragover);
    bar[i].addEventListener("drop", drop);
    bar[i].addEventListener("dragenter", dragenter);
  }
}

function dragstart(ev) {
  // write Diks-ID into dataTransfer Object
  ev.dataTransfer.setData('text', ev.target.id);
  // since dataTransfer is protected in dragEnter need to have a variable-- "ev like event"
  dragDone = ev.target.id;
}

function dragenter (ev) {
  // get bar/tower that has been entered by drag and get disk-ID
  let bar = ev.currentTarget; 
  let disc = dragdone;
  // get disks that are already on tower
  let discOnBar = bar.getElementsByClassName("disc"); 
  if (discOnBar.length==0 || discOnBar[0].id>disc){
    // here if no discs yet on bar/tower or the top disc is bigger than the dragged disc 
    tower.discCanBeDroppedHere = true; // need to remember for dragOver?
    ev.preventDefault(); // yes please!
    return;
  }
  bar.discCanBeDroppedHere = false; // sorry no drop allowed here
}

function dragover(ev){
  if (ev.currentTarget.discCanBeDroppedHere)
      ev.preventDefault();// if we may drop here ...
}
  
function drop(ev) {
  // find disc and bar involved
  let bar = ev.currentTarget;
  let disc = document.getElementById(ev.dataTransfer.getData('text'));
  ev.dataTransfer.dropEffect = 'move';
  // put disc on top of bar
  bar.insertBefore(disc,bar.firstChild);
  // re-adjust draggability
  for (i=0; i<bar.length;i++){ // for all towers
    e = bar[i].getElementsByClassName("disc"); // get discs
    if (e.length) e[0].draggable = true; // top disk is draggable
    for (j=1;j<e.length;j++){
      e[j].draggable = false; // all others are not
    }
  }
  ev.preventDefault(); // ... whatever the default is?!?!?!
}
towersOfHanoi();











// // 'use strict';

// // const assert = require('assert');
// // const readline = require('readline');
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // An object that represents the three stacks of Towers of Hanoi; 
//   // * each key is an array of Numbers: 
//     // * A is the far-left, 
//     // * B is the middle, 
//     // * C is the far-right stack
//       // * Each number represents the largest to smallest tokens: 
//         // * 4 is the largest, 
//         // * 1 is the smallest

// let stacks = {
//   a: [4, 3, 2, 1],
//   b: [],
//   c: []
// };

// //count moves user makes
// let moveCounter = 0;

// //prints string and counter update in console?-- don't forget to add to getPrompt function!!!!

// const printCounter = () =>{
//   console.log("Number of moves: " + moveCounter++);
// }

// // Start here. What is this function doing?
// // This function is updating where the discs are located and putting it into the console each time
// const printStacks = () => {
//   console.log("a: " + stacks.a);
//   console.log("b: " + stacks.b);
//   console.log("c: " + stacks.c);
// }

// // Next, what do you think this function should do?
// // This function should move discs from one stack to another stack -- onclick or drag for GUI?
//   const movePiece = (start, destination) => {
//   return stacks[destination].push(stacks[start].pop())
// }

// // Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
// const isLegal = (start, destination) => {
//   if([stacks[start].length-1] > 0 &&  [stacks[destination].length] == 0) {
//     return true;
//   }
//   else if ([stacks[start]] < [stacks[destination]]){
//     return true;
//   } 
//   else {return false}
// }

// // What is a win in Towers of Hanoi? When should this function run? It should run at the end of each turn?
// const checkForWin = () => {
//   if(stacks["b"].length == 4 || stacks["c"].length == 4){
//     return true
//   }
//   else{
//     return false
//   }
// }

// // When is this function called? What should it do with its argument?

// //Takes in user input and then runs other functions in order. 
// //If move is legal, then it will move the piece. Once it is moved it will check for a win. 
// //If the move is not legal it will tell you the move is invalid
// //Added trim() and toLowerCase() to help with user input errors 

// const towersOfHanoi = (start, destination) => {
//   start= start.trim().toLowerCase();
//   destination = destination.trim().toLowerCase();
//   if(isLegal(start, destination)) {
//     movePiece(start, destination);
//     if(checkForWin()==true) {
//       console.log("Congratulations, you won!");
//     }
//   } else console.log("Illegal move, please try again");
// }

// // const getPrompt = () => {
// //   printStacks();
// //   printCounter();
// //   rl.question('start stack: ', (start) => {
// //     rl.question('destination stack: ', (destination) => {
// //       towersOfHanoi(start, destination);
// //       getPrompt();
// //     });
// //   });
// // }

//  //Test

// if (typeof describe === 'function') {

//   describe('#towersOfHanoi()', () => {
//     it('should be able to move a block', () => {
//       towersOfHanoi('a', 'b');
//       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//     });
//   });

//   describe('#isLegal()', () => {
//     it('should not allow an illegal move', () => {
//       stacks = {
//         a: [4, 3, 2],
//         b: [1],
//         c: []
//       };
//       assert.equal(isLegal('a', 'b'), false);
//     });
//     it('should allow a legal move', () => {
//       stacks = {
//         a: [4, 3, 2, 1],
//         b: [],
//         c: []
//       };
//       assert.equal(isLegal('a', 'c'), true);
//     });
//   });
//   describe('#checkForWin()', () => {
//     it('should detect a win', () => {
//       stacks = { a: [], b: [4, 3, 2, 1], c: [] };
//       assert.equal(checkForWin(), true);
//       stacks = { a: [1], b: [4, 3, 2], c: [] };
//       assert.equal(checkForWin(), false);
//     });
//   });

// } else {

//   getPrompt();
// }

// //ORIGINAL CODE ATTEMPTS:

// // // This code I wrote for playing the game in the console... 
// // moveTower = (n, start, destination) => {
// //   const temp;
// //   if(start === a && destination === b || start === b && destination === a){
// //     temp = c;
// //     console.log('moving' + n + ' from a to b')

// //   } else if (start === b && destination === c || start === c && destination === b){
// //     temp = a;
// //     console.log('moving ' + n + ' from b to c')

// //   } else if (start === a && destination === c || start === c && destination === a){
// //     temp = b;
// //     console.log('moving ' + n + ' from a to c')
// //   }
// // }

// // This function I wrote to make the peices move and to call the movepeice function above
// // if (n === 1){
// //   movePiece(1, start, destination);
// //   return;
// // }

// //This code I wrote to pass through the infor for the rules in if/else statements above- should work together?

// // moveTower(n-1, start, temp);
// // movePiece(n, start, destination);
// // moveTower(n-1, temp, destination);

// // console.log('start:', a, b, c);
// // moveTower(5, a, c);
// // console.log('end:', a,b,c);

// //HOW DO YOU WIN?
// //The goal of the game is to move all of the disks from the left rod to the far right rod
// //End has same pyramid order on the far right as started on the left

// // Rules:
// // Can only move a disk that is at the top of the pile
// // Can only move a disk onto an empty rod or a larger disk
// // Can only move one disk at a time
// // Is allowed to move disk back and forth between rods
// // Can take as many turns as needed to solve the puzzle

// //Logical Progression of the game:
// // Start with disk 1 on post A
// // Move 1 from post A to post C
// // so this means we move from it's starting point to where we want it to end on for this round

// //Pseudo Code:
// // if (disk ===1){ //"disk 1 is the disk number, 1 is smallest disk
// // document.write("Move disk " + disk + " from post " + start + " to post " + 
// //       destination + ".<br/>";
// //"start" represents starting post, which changes depending on which disk you are moving
// // "destination" represents the destination post, which also changes depending on which disk you are moving 
// //   }

// //n-1 disks


// //UNIT TESTS:
// // Only stacks onto empty rod or larger disk
// // Only moves disk at top of pile
// // User can move disks between rods
// // Keeps track of movements it takes user to solve problem
// // Calls winner of the game