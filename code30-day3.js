// Day 3: Intro to Conditional Statements

function main() {
    const N = parseInt(readLine().trim(), 10);
    if ((N % 2 !== 0) || (N >= 6 && N <= 20)) {
        console.log('Weird');
    } else {
        console.log('Not Weird')
    }
}