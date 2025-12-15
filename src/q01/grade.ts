const scoreString: string | undefined = process.argv[2];
function calculateGrade(input: string | undefined): void {
    const INVALID_INPUT_MESSAGE = "Invalid Input";
    if (input === undefined) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
        
    }
    const score: number = parseFloat(input);
    if (isNaN(score)) {
        console.log(INVALID_INPUT_MESSAGE);
        return;

    }
    if (score < 0 || score > 100) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
    }
    let grade: string;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else { // score < 50
        grade = "F";
    }

    console.log(`Grade is ${grade}`);
}

calculateGrade(scoreString);