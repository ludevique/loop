//let store our numbr in a variable.
let num = 0;
while(num <= 100){
    console.log(num)
    if(num % 3 == 0){
        console.log(`${num} is Fizz`);
    }else if(num % 5== 0){
        console.log(`${num} is Buzz`);
    }else if(num % 3 == 0 && num % 5 == 0){
        console.log(`${num} and ${num} forms a Fizz Buzz`);
    }else{
        console.log(num);
    }
}