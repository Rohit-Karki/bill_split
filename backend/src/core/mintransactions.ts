import {Transaction} from '../model/Transaction.js'

type BalanceMap = { [key: string]: number}

let printBill: string[] = [];

function minTransactions(transactions: Array<Transaction>): void {
    let parm: BalanceMap = {};

    transactions.map((transaction) => {
        const { from, to, amount } = transaction;

        // Update `from` balance
        parm[from] = (parm[from] || 0) - amount;

        // Update `to` balance
        parm[to] = (parm[to] || 0) + amount;
    });

    console.log(parm);

    // Passing values to findPath Method
    findPath(parm);

    // Uncomment to see all printed bills as an array
    console.log(printBill);
}

function findPath(details: BalanceMap): void {
    printBill = [];
    const values = Object.values(details);
    const maxVal = Math.max(...values);
    const minVal = Math.min(...values);

    if (maxVal !== minVal) {
        const maxKey = getKeyFromValue(details, maxVal)!;
        const minKey = getKeyFromValue(details, minVal)!;

        let result = round(maxVal + minVal, 1);

        if (result >= 0.0) {
            console.log(`${minKey} needs to pay ${maxKey}: ${round(Math.abs(minVal), 2)}`);
            details[maxKey] = result;
            details[minKey] = 0.0;
        } else {
            console.log(`${minKey} needs to pay ${maxKey}: ${round(Math.abs(maxVal), 2)}`);
            details[maxKey] = 0.0;
            details[minKey] = result;
        }

        findPath(details); // Recursively call until balances are settled
    }
}

function getKeyFromValue(map: BalanceMap, value: number): string | undefined {
    return Object.keys(map).find((key) => map[key] === value);
}

function round(value: number, places: number): number {
    if (places < 0) throw new Error("Places cannot be negative");
    return parseFloat(value.toFixed(places));
}

// const arr: Array<Transaction> = [
//     { from: "A", to: "B", amount: 5 },  // A owes B
//     { from: "C", to: "D", amount: 20 }, // C owes D
//     { from: "E", to: "D", amount: 5 },  // E owes D
//     { from: "E", to: "B", amount: 15 }, // E owes B
//     { from: "F", to: "B", amount: 5 },  // F owes B
// ]

// const ar = [
//     {from : "Bob", to: "Alice", amount: 10},
//     {from : "Carol", to: "Alice", amount: 10},
//     {from: "Alice", to: "Bob", amount:20},
//     {from: "Carol", to: "Bob", amount:20},
//     {from : "Alice", to: "Carol", amount: 30},
//     {from : "Bob", to: "Carol", amount: 30},
// ]
// minTransactions(ar)