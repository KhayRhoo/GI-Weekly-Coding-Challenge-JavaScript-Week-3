
//EASY
function exercise(activity) {
    return () => `Today's exercise is : ${activity}`;
}

var run = exercise('Running');
console.log(run());
var swim = exercise('Swimming');
console.log(swim());

//MEDIUM

function cutPizzaSlices(slices) {
    return (numberOfPeople) => {
        const slicesPerPeople = (slices / numberOfPeople);
        const slicesPerPeopleFixed = slicesPerPeople.toFixed(2);
        return `Each person gets ${slicesPerPeopleFixed} slices of pizza`;
    };
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));

//HARD
function safe(){
    function security(){
        const pii = { //Object: Personally Identifiable Information
            name : 'Khayla', //Property 1: Accessible
            ssn : 123456789, //Property 2: Not Accessible
            getName(){
                return this.name;
            }
        };
        return pii.getName();
    }
    return security();
}

console.log(safe());

//VERY HARD

const person = function(name2, job, age){
    this.name2 = name2;
    this.job = job;
    this.age = age;
}
const khayla = new person('Khayla', 'Web Developer', 21);
console.log(khayla);

person.exercise = function() {
    console.log('Running is fun! - said no one ever');
}
person.exercise();

person.fetchJob = function(){
    console.log(`${khayla.name2} is a ${khayla.job}`);
}
person.fetchJob();




const programmer = function(name2, job, age, [languages]){
    this.name2 = name2;
    this.job = job;
    this.age = age;
    this.languages = [languages];
    this.busy = true;
}
const khayla1 = new programmer('Khayla', 'Web Developer', 21, ["English"]);
console.log(khayla1);

programmer.completeTask = function(){
    console.log(khayla1.busy = false);
}
programmer.completeTask();

programmer.acceptNewTask = function(){
    console.log(khayla1.busy = true);
}
programmer.acceptNewTask();

programmer.offerNewTask = function(){
    if(khayla1.busy = true){
        console.log(`${khayla1.name2} can't accept any new tasks right now.` );
    }else{
        console.log(`${khayla1.name2} would love to take on a new responsibility.`);
    }
}
programmer.offerNewTask();

programmer.learnLanguage = function(){
    let learn = khayla1.languages;
    learn.push("Spanish");
}
programmer.learnLanguage();

programmer.listLanguages = function(){
    console.log(khayla1.languages);
}
programmer.listLanguages();

