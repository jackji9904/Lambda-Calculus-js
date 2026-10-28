const true_ = t => f => t;          // True
const flase_ = t => f => f;         // False
const not = b => b(flase_)(true_);  // Not
const and = x => y => x(y)(flase_); // And
const or = x => y => x(true_)(y);   // Or

function main(){
    console.log(true_);
    console.log(flase_);
    console.log(not(true_));
    console.log(not(flase_));
}

main();


