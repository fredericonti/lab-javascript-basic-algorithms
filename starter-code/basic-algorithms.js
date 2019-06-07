/* eslint-disable prefer-const */
// Names and Input
let hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Peter';
console.log(`The Navigator's name is ${hacker2}`);

// Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters. `)
} else if (hacker1.length < hacker2.length) {
  console.log(`The Navigator has the longest name, it has ${hacker2.length} characters. `)
} else if (hacker1.length === hacker2.length) {
  console.log(`wow, you both got equally long names, ${hacker2.length} characters!! `)
}

// Loops
const hackerMod = hacker1.toUpperCase().split('').join(' ');
console.log(hackerMod);

const hackerMod2 = hacker2.split('');
hackerMod2.reverse();
console.log(hackerMod2.join(''));

// Loops - Compare
const compare = () => {
  let comparator = hacker1.localeCompare(hacker2);

  if (comparator === - 1) {
    console.log('Yo, the navigator goes first definitely');
  } else if (comparator === + 1) {
    console.log('The driver\'s name goes first');
  } else {
    console.log('What?! You both got the same name?');
  }
};
compare();

// Bonus time - Palindrome
let palindrome = 'Amor, Roma';

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

palindromeCompare = (palindrome) => {
  let palindromeArray = [...palindrome.toUpperCase()].filter(element => element.charCodeAt() >= 65 && element.charCodeAt() <= 90)
  let palidromereversed = [...palindromeArray].reverse();
  if (palindromeArray.join('') === palidromereversed.join('')) {
    console.log("Yes, it's a palindrome");
  } else {
    console.log('No, its not a palindrome dude');
  }
};

palindromeCompare(palindrome);

// Go to lorem ipsum generator and:

let pieceOfText1 = 'Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Nulla et facilisis sapien. Ut at elit dolor. Quisque nisl metus, volutpat ut tellus a, scelerisque ornare leo. Nam mattis rhoncus auctor. Fusce sed porta diam, ut consectetur sapien. Mauris vulputate vestibulum venenatis. Ut imperdiet tempus dolor, in ullamcorper massa porttitor in. Duis quis sem vitae nibh pulvinar venenatis ac ut massa. Quisque et ullamcorper mauris, vitae bibendum tortor. Curabitur ultricies justo at metus suscipit vestibulum.';

let pieceOfText2 = 'Vivamus interdum laoreet tellus vitae faucibus. Aliquam erat velit, porta elementum ligula ac, sagittis mattis risus. Cras suscipit, turpis ac cursus pulvinar, tortor eros iaculis risus, vel semper felis est et ligula. Vestibulum at turpis massa. Donec cursus nisi sit amet lectus porta efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam orci dolor, ultricies eget hendrerit vitae, malesuada hendrerit neque. In vehicula ullamcorper venenatis. Fusce dapibus tortor ac arcu maximus sollicitudin. Suspendisse potenti.';

let pieceOfText3 = 'Pellentesque tristique eros sed mauris ullamcorper consectetur id sit amet tellus. Ut et molestie turpis. Nam eu erat efficitur, hendrerit nibh vitae, mollis massa. Duis tincidunt ultricies leo. Phasellus pellentesque odio nec ex dictum congue. Vivamus porta quis eros vulputate fermentum. Praesent pulvinar tellus at elit venenatis, in dignissim magna aliquet. Integer lacinia, lacus in pulvinar ultricies, enim turpis condimentum lacus, at placerat augue neque vitae orci. Aliquam et pulvinar mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis odio in augue sodales ullamcorper. Pellentesque et turpis non magna gravida lobortis eu non sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In efficitur risus quis ligula dignissim finibus.';

const wordsCounter = (words) => {
  let counter = words.split(' ');
  return counter.length;
};

const wordCountEt = (text) => {
  let counter = text.split(' ');
  let arrayOfEts = [];
  for (let i = 0; i < counter.length; i += 1) {
    if (counter[i] === 'et' || counter[i] === 'Et') {
      arrayOfEts.push(counter[i]);
    }
  }
  return `We have ${arrayOfEts.length} ets on this piece of text!;`;
};

console.log(wordCountEt(pieceOfText1));
