const obj = { length: 10 };
console.log("length" in obj);
console.log([] instanceof Array);


// bigint operator
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);