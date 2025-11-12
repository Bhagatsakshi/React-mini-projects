import { useState } from "react";
// we use all in one compo, which is not best practice ..another code files created (check)

export default function LotteryGame() {
    const [randomTicket, setRandomTicket] = useState(
        Math.floor(Math.random() * 1000)
    );

    // if ticket number digit sum=15, then won
    function winOrNot(randomTicket) {
        let sum = 0;
        let n = randomTicket;
        while (n > 0) {
            let r = n % 10;
            sum += r;
            n = Math.floor(n / 10);
        }
        return sum == 15;
    }

    function newTicket() {
        const newNumber = Math.floor(Math.random() * 1000);
        setRandomTicket(newNumber);
    }

    return (
        <div>
            <h1>Lottery Game</h1>

            <p>Lottery Ticket = {randomTicket.toString().padStart(3, "0")}</p>

            {winOrNot(randomTicket) ? (
                <p style={{ color: "green" }}>🎉 Congratulations, you won!</p>
            ) : (
                <p style={{ color: "red" }}>Try again!</p>
            )}
            <button onClick={newTicket}>Get New Ticket</button>

            <p style={{ color: "gray", fontStyle: "italic" }}>
                (If the sum of digits is 15, you win!)
            </p>

        </div>
    );
}
