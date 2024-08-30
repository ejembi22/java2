function getGrade (score){
let grade;
if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 79){
    grade = "B";
} else if (score >= 60 && score <= 69){
    grade ="C";
}else if (score >= 50 && score <= 59){
    grade = "D";
}else if (score >= 0 && score <= 49){
    grade = "F";
}else {
    grade ="Invalid Score"
}

console.log(`The student's grade is : ${grade}`);
}
let score = parseInt (prompt ("Enter the Student's score: "));
getGrade(score);


const ages =[19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort ((a, b) => a-b);

const minAge =ages[0];
const maxAge =ages[ages.length -1];
console.log("sorted Ages:", ages);

const middleIndex =Math.floor(ages.length/2);
let medianAge;
if (ages.length %2 ===0){
    medianAge =(ages[middleIndex - 1] + ages[middleIndex])/2;
}else {
    medianAge =ages[middleIndex];
}
console.log("The Median Age is "  +  medianAge)

const sumAges = ages.reduce((sum, age)=> sum + age, 0);
const averageAge = sumAges / ages.length;

console.log("The Average Age is " + averageAge)

const ageRange = maxAge - minAge;
console.log("The Range of Age is " + ageRange)

const minAverageDifference = Math.abs (minAge - averageAge);
console.log("The Difference in Min Age " +  minAverageDifference )

const maxAverageDifference = Math.abs (maxAge - averageAge);
console.log("The Difference in Max Age " +  maxAverageDifference )


let welcome = alert ('Welcome')


let greet = prompt ('Good day viewers')

let userName = prompt ('please enter your name: ');
console.log('User Name:', userName);

let userAge = prompt ('Enter your age');
console.log('User Age:', userAge)

let existPage = confirm('You want to exit the page');
console.log(existPage)

