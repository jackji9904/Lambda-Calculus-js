// Core logic
const true_ = t => f => t;          // True
const flase_ = t => f => f;         // False
const not = b => b(flase_)(true_);  // Not
const and = x => y => x(y)(flase_); // And
const or = x => y => x(true_)(y);   // Or

// Church Numerals
const zero  = f => x=> x;
const one   = f => x=> f(x);
const two   = f => x=> f(f(x));
const three = f => x=> f(f(f(x)));
const four  = f => x=> f(f(f(f(x))));
const five  = f => x=> f(f(f(f(f(x)))));

const succ = n => f => x => f(n(f)(x));
const pred = n => fst(n(phi)(pair(zero)(zero)));

const add = m => n => m(succ)(n);
const sub = m => n => n(pred)(m);
const mul = m => n => m(add(n))(zero);
const exp = m => n => n(mul(m))(one);

// Helper function for implementing predecessor.
const pair = x => y => f => f(x)(y);
const fst  = p => p(true_);
const snd  = p => p(flase_);
const phi  = p => pair(snd(p))(succ(snd(p)));


// Function Composition
const compose = f => g => x => f(g(x));

// Is Zero
const iszero = n => n(x => flase_)(true_);

// Omega combinator
const omega = x => x(x);

// Y combinator
const Y = f => (x => x(x))(x => f(y => x(x)(y)));

// Factorial
const facgen = f => n => iszero(n)(() => one)(() => mul(n)(f(pred(n))))();
const factorial = Y(facgen);


// Helper function for division
const lessThan = m => n => not(iszero(sub(n)(m)));
const divGen = f => m => n =>
    iszero(n)(() => zero)(() =>
        lessThan(m)(n)(() => zero)(() =>
            succ(f(sub(m)(n))(n))
        )()
    )();

const div = Y(divGen);

function main(){
    // Core logic
    console.log(true_);
    console.log(flase_);
    console.log(not(true_));
    console.log(not(flase_));
    console.log(and(true_)(true_));
    console.log(and(true_)(flase_));
    console.log(and(flase_)(flase_));
    
    // Church Numerals
    console.log(succ(three));
}

main();


