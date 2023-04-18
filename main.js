let fa = function() {
    return `hola soy la funcion A`
}

let fb =  callback=>{
    console.log(`Hola soy la funcion B`);
    return callback();
};

console.log(fb(fa));

//un ejemplo re epico de callback

let p1 = (e)=>{
    console.log(e.target);
}

addEventListener("click", p1);

//exercise

let validarZero = (p1)=>{
    return (isNaN(p1)) ? 0  : Number(p1);
}



let validateNumber = (p1)=>{
    return (p1) ? p1 : 0;
}
let division = (num1, num2)=>{
    return validateNumber(num1) / validarZero(validateNumber(num2));
}

console.log(division(prompt("numero 1"), prompt("numero 2")));