// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if ((cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') && cardNumber.length === 14) return "Diner's Club";

  if ((cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') && cardNumber.length === 15) return "American Express";

  var switch4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switch6 = ['564182', '633110'];

  if (switch4.includes(cardNumber.slice(0,4)) || switch6.includes(cardNumber.slice(0,6)) &&
   (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) return "Switch";
  	
  if ( cardNumber.slice(0, 1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) return "Visa"; 
  
  if ((cardNumber.slice(0, 2) === '51' || cardNumber.slice(0, 2) === '52'|| cardNumber.slice(0, 2) === '53' || 
  	   cardNumber.slice(0, 2) === '54' || cardNumber.slice(0, 2) === '55') && cardNumber.length === 16) return "MasterCard";
  
  let disArr = ['6011', '65', '644', '645', '646', '647', '648', '649'];
  if ((cardNumber.slice(0, 4) === disArr[0] || cardNumber.slice(0, 2) === disArr[1] || cardNumber.slice(0, 3) === disArr[2] || cardNumber.slice(0,3) === disArr[3] || 
  cardNumber.slice(0, 3) === disArr[4] || cardNumber.slice(0,3) === disArr[5] || cardNumber.slice(0,3) === disArr[6] || 
  cardNumber.slice(0,3) === disArr[7]) && (cardNumber.length === 16 || cardNumber.length === 19)) return "Discover";
  
  if ((cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || 
  	   cardNumber.slice(0, 4) === '6304') && (cardNumber.length > 11 && cardNumber.length < 20)) return "Maestro";

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  
  var union6 = [];
  var union3 = [];
  var union4 = [];

  for (var i = 622126; i <= 622925; i++) {
  	union6.push(i);
  }

  union3.push(624, 625, 626)

  for (var i = 6282; i <= 6288; i++) {
  	union4.push(i)
  }

  if ((union6.includes(Number(cardNumber.slice(0,6))) || union4.includes(Number(cardNumber.slice(0,4))) || 
  	union3.includes(Number(cardNumber.slice(0,3)))) && (cardNumber.length > 15 && cardNumber.length < 20)) return "China UnionPay";
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

};


