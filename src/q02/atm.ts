const INVALID_INPUT_MESSAGE = "Invalid Input";

const balanceString: string | undefined = process.argv[2];
const withdrawalString: string | undefined = process.argv[3];


@param balStr
@param wthdrwStr
@returns

function processWithdrawal(balStr: string | undefined, wthdrwStr: string | undefined): string {
    if (balStr === undefined || wthdrwStr === undefined) {
        return INVALID_INPUT_MESSAGE;
    }

    const balance: number = parseFloat(balStr);
    const withdrawalAmount: number = parseFloat(wthdrwStr);

    if (isNaN(balance) || isNaN(withdrawalAmount)) {
        return INVALID_INPUT_MESSAGE;
    }
    if (withdrawalAmount > balance) {
        return "Insufficient balance";
    }

    if (withdrawalAmount > PER_WITHDRAWAL_LIMIT) {
        return "Exceeds per-withdrawal limit";
    }

    return "Withdrawal approved";
}
const result: string = processWithdrawal(balanceString, withdrawalString);
console.log(result);