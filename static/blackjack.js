var twoOfDiamonds = {point:  2, suit: 'diamonds'};
var threeOfDiamonds = {point:  3, suit: 'diamonds'};
var fourOfDiamonds = {point:  4, suit: 'diamonds'};
var fiveOfDiamonds = {point:  5, suit: 'diamonds'};
var sixOfDiamonds = {point:  6, suit: 'diamonds'};
var sevenOfDiamonds = {point:  7, suit: 'diamonds'};
var eightOfDiamonds = {point:  8, suit: 'diamonds'};
var nineOfDiamonds = {point:  9, suit: 'diamonds'};
var tenOfDiamonds = {point:  10, suit: 'diamonds'};
var jackOfDiamonds = {point:  10, suit: 'diamonds'};
var queenOfDiamonds = {point:  10, suit: 'diamonds'};
var kingOfDiamonds = {point:  10, suit: 'diamonds'};
var aceOfDiamonds = {point:  11, suit: 'diamonds'};
var twoOfClubs = {point:  2, suit: 'clubs'};
var threeOfClubs = {point:  3, suit: 'clubs'};
var fourOfClubs = {point:  4, suit: 'clubs'};
var fiveOfClubs = {point:  5, suit: 'clubs'};
var sixOfClubs = {point:  6, suit: 'clubs'};
var sevenOfClubs = {point:  7, suit: 'clubs'};
var eightOfClubs = {point:  8, suit: 'clubs'};
var nineOfClubs = {point:  9, suit: 'clubs'};
var tenOfClubs = {point:  10, suit: 'clubs'};
var jackOfClubs = {point:  10, suit: 'clubs'};
var queenOfClubs = {point:  10, suit: 'clubs'};
var kingOfClubs = {point:  10, suit: 'clubs'};
var aceOfClubs = {point:  11, suit: 'clubs'};
var twoOfHearts = {point:  2, suit: 'hearts'};
var threeOfHearts = {point:  3, suit: 'hearts'};
var fourOfHearts = {point:  4, suit: 'hearts'};
var fiveOfHearts = {point:  5, suit: 'hearts'};
var sixOfHearts = {point:  6, suit: 'hearts'};
var sevenOfHearts = {point:  7, suit: 'hearts'};
var eightOfHearts = {point:  8, suit: 'hearts'};
var nineOfHearts = {point:  9, suit: 'hearts'};
var tenOfHearts = {point:  10, suit: 'hearts'};
var jackOfHearts = {point:  10, suit: 'hearts'};
var queenOfHearts = {point:  10, suit: 'hearts'};
var kingOfHearts = {point:  10, suit: 'hearts'};
var aceOfHearts = {point:  11, suit: 'hearts'};
var twoOfSpades = {point:  2, suit: 'spades'};
var threeOfSpades = {point:  3, suit: 'spades'};
var fourOfSpades = {point:  4, suit: 'spades'};
var fiveOfSpades = {point:  5, suit: 'spades'};
var sixOfSpades = {point:  6, suit: 'spades'};
var sevenOfSpades = {point:  7, suit: 'spades'};
var eightOfSpades = {point:  8, suit: 'spades'};
var nineOfSpades = {point:  9, suit: 'spades'};
var tenOfSpades = {point:  10, suit: 'spades'};
var jackOfSpades = {point:  10, suit: 'spades'};
var queenOfSpades = {point:  10, suit: 'spades'};
var kingOfSpades = {point:  10, suit: 'spades'};
var aceOfSpades = {point:  11, suit: 'spades'};

var deck = [
  {point:  2, suit: 'diamonds'},
  {point:  3, suit: 'diamonds'},
  {point:  4, suit: 'diamonds'},
  {point:  5, suit: 'diamonds'},
  {point:  6, suit: 'diamonds'},
  {point:  7, suit: 'diamonds'},
  {point:  8, suit: 'diamonds'},
  {point:  9, suit: 'diamonds'},
  {point:  10, suit: 'diamonds'},
  {point:  10, suit: 'diamonds'},
  {point:  10, suit: 'diamonds'},
  {point:  10, suit: 'diamonds'},
  {point:  11, suit: 'diamonds'},
  {point:  2, suit: 'clubs'},
  {point:  3, suit: 'clubs'},
  {point:  4, suit: 'clubs'},
  {point:  5, suit: 'clubs'},
  {point:  6, suit: 'clubs'},
  {point:  7, suit: 'clubs'},
  {point:  8, suit: 'clubs'},
  {point:  9, suit: 'clubs'},
  {point:  10, suit: 'clubs'},
  {point:  10, suit: 'clubs'},
  {point:  10, suit: 'clubs'},
  {point:  10, suit: 'clubs'},
  {point:  11, suit: 'clubs'},
  {point:  2, suit: 'hearts'},
  {point:  3, suit: 'hearts'},
  {point:  4, suit: 'hearts'},
  {point:  5, suit: 'hearts'},
  {point:  6, suit: 'hearts'},
  {point:  7, suit: 'hearts'},
  {point:  8, suit: 'hearts'},
  {point:  9, suit: 'hearts'},
  {point:  10, suit: 'hearts'},
  {point:  10, suit: 'hearts'},
  {point:  10, suit: 'hearts'},
  {point:  10, suit: 'hearts'},
  {point:  11, suit: 'hearts'},
  {point:  2, suit: 'spades'},
  {point:  3, suit: 'spades'},
  {point:  4, suit: 'spades'},
  {point:  5, suit: 'spades'},
  {point:  6, suit: 'spades'},
  {point:  7, suit: 'spades'},
  {point:  8, suit: 'spades'},
  {point:  9, suit: 'spades'},
  {point:  10, suit: 'spades'},
  {point:  10, suit: 'spades'},
  {point:  10, suit: 'spades'},
  {point:  10, suit: 'spades'},
  {point:  11, suit: 'spades'}
];

function randomNum() {
  var randomIndex = Math.floor((Math.random() * 52) + 1);
  return randomIndex;
};

$(document).ready(function() {
  var randomIndex = randomNum() -1;
  var shuffledCard = deck[randomIndex];
  var alt = deck.point;
  $('#deal-button').click(function () {


    $('#dealer-hand').append('<img src="/static/images/' + '_of_' + '" alt="' + alt + '"/>');
  });
  $('#hit-button').click(function () {
    $('#player-hand').append('<img src="/static/images/' + shuffledCard + '" alt="' + alt + '"/>');
  });
});
