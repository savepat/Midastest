function getHandScore(hand: string): number {
    if (!hand || typeof hand !== "string") {
        throw new Error("Error");
    }
 
    const cards: string[] = hand.split(" ");
 
    let SpadesScore: number = 0;       // set type = 0 
    let ClubsScore: number = 0;
    let HeartsScore: number = 0;
    let DiamondsScore: number = 0;
 
    for (const card of cards) {
        const suit: string = card.charAt(0);
        const rank: string = card.slice(1);
 
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
 
function getCardScore(rank: string): number {
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
 
const hand: string = "S8 S10 CA";  
const score: number = getHandScore(hand);
 
console.log(`The score of the hand "${hand}" is: ${score}`); // result
 
