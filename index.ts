let variablesName: string; 
let variableName: string = "Jhon"; 
const constantName: string = "Jhon";

let counter: number; 
counter = 1;
console.log(counter)

const button: HTMLElement | null = document.getElementById("button"); 
button?.addEventListener('click', () => {
    console.log(counter)
})

let counter2: number = 10; 

// Primitive types annotation 
let userName: string = "Jhonny"; 
let userAge: number = 20; 
let userHasJob: boolean = true; 

let arrayNames: string[]; 
let arrayAges: number[]; 

let arficanNames: string[] = ["Mamadou", "Jesuela", "Bonheur", "Bienfait"]; 
let elderAges: number[] = [70,89,75,68,90]; 

let person: {
    name: string, 
    age: number
}; 

person = {
    name: "Elodie", 
    age: 29
}; 

let greeting: (name:string) => string; 

greeting = (name:string) => {
    return `Hi ${name}`
}