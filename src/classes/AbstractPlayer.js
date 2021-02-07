"use strict";
exports.__esModule = true;
exports.AbstractPlayer = void 0;
var AbstractPlayer = /** @class */ (function () {
    function AbstractPlayer(max) {
        this.holdings = [];
        this.max = max;
    }
    AbstractPlayer.prototype.receiveCard = function (card) {
        if (this.holdings.length < this.max && card !== undefined) {
            this.holdings.push(card);
        }
    };
    AbstractPlayer.prototype.reviewCards = function () {
        return this.holdings;
    };
    return AbstractPlayer;
}());
exports.AbstractPlayer = AbstractPlayer;
