const INVALID_INPUT_MESSAGE = "Invalid Input";

const nString: string | undefined = process.argv[2];

/**
 * Calculates the sum of integers from 1 to N.
 * @param nStr The input number N as a string argument.
 */
function calculateSumToN(nStr: string | undefined): void {
    if (nStr === undefined) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
    }

    const N: number = parseFloat(nStr);

    if (isNaN(N) || N <= 0) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
    }

    if (N !== Math.floor(N)) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
    }

    let totalSum: number = 0;

    for (let i = 1; i <= N; i++) {
        totalSum += i;
    }

    console.log(`Sum: ${totalSum}`);
}

calculateSumToN(nString);