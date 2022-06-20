// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, birthday){
    let newArray = [];
    for(let counter = 0; counter < names.length; counter++){
        newArray.push(`Thank you, ${names[counter]}, for the wonderful ${birthday} gift!`)
    }
    return newArray;

}
writeCards(names, "surprise");




function countDown(number){
    let i = -1;
    while(number > i){
        console.log(number)
        number--;
    }
}
countDown(10)