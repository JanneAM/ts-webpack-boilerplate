"use strict";
exports.__esModule = true;
var RealPlayer_1 = require("./classes/RealPlayer");
var BotPlayer_1 = require("./classes/BotPlayer");
var players = [
    new BotPlayer_1.BotPlayer(5),
    new BotPlayer_1.BotPlayer(5),
    new RealPlayer_1.RealPlayer(5)
];
var dealer = new CardDealer(52);
players.forEach(function (player) {
    var counter = 3;
    while (Boolean(counter--)) {
        dealer.dealTo(player);
    }
});
players.forEach(function (player) {
    while (player.requestCard()) {
        dealer.dealTo(player);
    }
});
players.forEach(function (player) {
    console.log(player.reviewCards());
});
