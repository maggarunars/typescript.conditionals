
//first I created an object with five properties

type Person = {      
    name: string,
    yearOfBirth: number,
    numberOfChildren: number,
    country: string,
    knowsHowToProgram: boolean,
}

//then I created an array of these objects 

const people: Person[] = [   
{ 
    name: "Carolus Allanby",
    yearOfBirth: 1996,
    numberOfChildren: 0,
    country: "Vietnam",
    knowsHowToProgram: false,
},
{   name: "Mohammed Fields",
    yearOfBirth: 1976,
    numberOfChildren: 3,
    country: "France",
    knowsHowToProgram: true,
},
{   name: "Quintus Lumby",
    yearOfBirth: 1972,
    numberOfChildren: 4,
    country: "China",
    knowsHowToProgram: false,
},
{   name: "Corbett Talbot",
    yearOfBirth: 1974,
    numberOfChildren: 3,
    country: "Indonesia",
    knowsHowToProgram: false,
},  
{   name: "Carlota Meany",
    yearOfBirth: 1978,
    numberOfChildren: 5,
    country: "Indonesia",
    knowsHowToProgram: false,
    }

];

//here I asked the question "Is the first person older than the last person?" 
//I used "0" for the first person and "people.length-1" for the fourth person so the code automatically determines the index of the last person in the people array, regardless of how many people are in the array. So if I wanted to add more people I could. If I were to use people[4], my code would only work when there are exactly five people in the array.
//the console shows: Carlota Meany is younger than Carolus Allanby
if (people[0].yearOfBirth < people[people.length-1].yearOfBirth) {
    console.log(people[people.length-1].name+" is older than "+people[0].name )
} else {
    console.log(people[people.length-1].name+" is younger than "+people[0].name)
} 

//here I asked "Does the 2nd person have the same amount of kids as the 3rd?"
//the console shows: Mohammed Fields does not have the same amount of kids as Quintus Lumby

if (people[1].numberOfChildren == people[2].numberOfChildren) {
    console.log(people[1].name+" has the same amount of kids as "+people[2].name)
} else {
    console.log(people[1].name+" does not have the same amount of kids as "+people[2].name)
}
//Here I created checked if the 1st person and the 4th person both know how to program, using the same methods as above. If yes, the output is “Yay!”, if no, the output is “LMGTFY”.
//Neither of them knows how to program (and should definitely attend Vefskólinn) so the console shows "LMGFTY"

if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {
    console.log("Yay!")
} else {
    console.log("LMGFTY")
}
//Here I decided to try to use a switch statement to check the 2nd person's nationality.
//I used the "default" in case the nationality I was asking about wouldn't appear.
//The console logs "Hello" since they are not from Spain, Iceland or Korea. 

const personIndex = "1";

switch (people[personIndex].country) {
  case "Spain":
    console.log("Hola!");
    break;
  case "Korea":
    console.log("여보세요");
    break;
  case "Iceland":
    console.log("Hæ.");
    break;
  default:
    console.log("Hello.");
    break;
}
//Here I used a ternary operator to output if the 2nd person’s name is longer than 5 characters.
//I defined a new variable "result", and used the PersonIndex again, since I had already defined that in the previous example.
//The console shows that the name is longer than 5 characters.

const result = 
people[personIndex].name.length > 5
    ? "The name is longer than 5 characters."
    : "The name is not longer than 5 characters."

console.log(result);