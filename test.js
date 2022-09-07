// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One dollar should be 106.6 yens", function(){
    // const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(3)
    const expected = 3 * 106.6; 
    expect(yens).toBe(expected);
})

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    //const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(dollars).toBe(expected);
})

test("One yen should be 0.00625 british pound", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(160)
    const expected = 0.00625 * 160; 
    expect(pound).toBe(expected);
})
