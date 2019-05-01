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
  var len = cardNumber.length;
  var china = parseInt(cardNumber.slice(0,6));

  if ((/^38|^39/).test(cardNumber) && len === 14) { return 'Diner\'s Club'};
  if ((/^34|^37/).test(cardNumber) && len === 15) { return 'American Express' };
  
  if((/^4903|^4905|^4911|^4936|^564182|^633110|^6333|^6759/).test(cardNumber) && (len === 16 || len === 18 || len === 19)) { return 'Switch' }

  if ((/^4/).test(cardNumber) && (len === 13 || len === 16 || len === 19)) { return 'Visa'};
  if ((/^51|^52|^53|^54|^55/).test(cardNumber) && len === 16) { return 'MasterCard'};
  if ((/^6011|^644|^645|^646|^647|^648|^649|^65/).test(cardNumber) && (len === 16 || len === 19)) { return 'Discover' };
  if ((/^5018|^5020|^5038|^6304/).test(cardNumber) && (12 <= len <= 19)) { return 'Maestro'};
  if (((622126 <= china <= 622925) || (/^624|^625|^626|^6282|^6283|^6284|^6285|^6286|^6287|^6288/).test(cardNumber)) && (16<=len<=19)) { return 'China UnionPay' }
};

//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

//Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

//console.log(detectNetwork('4903858585858585858'))