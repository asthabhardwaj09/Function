// // saymyname == function reference 
// // () == this is called function execution

// function saymyname(){
//     console.log('A');
//     console.log('s');
//     console.log('t');
//     console.log('h');
//     console.log('a');
    
// }

// saymyname()
// saymyname // this not provide error but it will also not give the output

// //_____________________________________

// //Adding two number

// function adding_two_number(num1,num2){   //parameter
//     console.log(num1+num2);
    
// }

// adding_two_number(2,3) // argument
// adding_two_number('a',3)
// adding_two_number(2,"3")
// adding_two_number("hello"," world!!")
// adding_two_number(2,null)
// adding_two_number(2,undefined)
// let rest=adding_two_number(2,3)
// console.log(rest)  //undfined because function does not return anything

// //-------------------------
// function addtwonumber(num1,num2){
//     return num1+num2
//     // let result=num1+num2
//     // console.log(result);
    
//     return result
//     console.log("abc"); // whatever we write after return it will not excute by default 
    
// }

// let result =addtwonumber(2,7)
// console.log("result: ",result);

//------------------------------------------------------------

function loginusermessage(username='astha'){ // we have written astha to avoid if any value is not passed as a argument
    if(username===undefined){
        console.log("Please enter the username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginusermessage('mukul'));
console.log(loginusermessage());



