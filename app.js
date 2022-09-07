// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// this is my function that sums two numbers
const fromDollarToYen = (ValueInDollar) => {
    var YenToEuro = 127.9 * 1;
    var DollarToYen = YenToEuro / 1.2;
    return DollarToYen * dollar;
}


const fromEuroToDollar = (ValueInEuro) => {
    var ValueInDollar = ValueInEuro * 1.2;
    return ValueInDollar;
}

const fromYenToPound = (ValueInYen) => {
    var ValueInEuro = ValueInYen * 0.0066;
    return ValueInEuro;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInYen = valueInDollar * dollarToYen;
    //return the yen value
    return valueInYen;
}




// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }; 

