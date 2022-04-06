// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
console.log(fromEuroToDollar(3.5));

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar/1.2;
    let valueInYen = valueInEuro * 127.9
    return valueInYen;
}
console.log(fromDollarToYen(1));

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen/127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
}
console.log(fromYenToPound(100));

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };