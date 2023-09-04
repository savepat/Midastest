"use strict";
function getHandScore(hand) {
    if (!hand || typeof hand !== "string") {
        throw new Error("Error");
    }
    const cards = hand.split(" ");
    let SpadesScore = 0; // set type = 0 
    let ClubsScore = 0;
    let HeartsScore = 0;
    let DiamondsScore = 0;
    for (const card of cards) {
        const suit = card.charAt(0);
        const rank = card.slice(1);
        switch (suit) {
            case "S":
                SpadesScore += getCardScore(rank);
                break;
            case "C":
                ClubsScore += getCardScore(rank);
                break;
            case "H":
                HeartsScore += getCardScore(rank);
                break;
            case "D":
                DiamondsScore += getCardScore(rank);
                break;
            default:
                throw new Error(`Invalid input. Unknown suit: ${suit}`);
        }
    }
    return Math.max(SpadesScore, ClubsScore, HeartsScore, DiamondsScore);
}
function getCardScore(rank) {
    switch (rank) {
        case "A":
            return 11;
        case "K":
        case "Q":
        case "J":
            return 10;
        default:
            return parseInt(rank);
    }
}
const hand = "S8 S10 CA";
const score = getHandScore(hand);
console.log(`The score of the hand "${hand}" is: ${score}`); // result
//# sourceMappingURL=test1.js.map