function* gen() {
    yield 1;
    yield 2;           
    yield 3;
}

const g = gen();
console.log(g.next().value);

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}
const it = iterate(['Oscar', 'David', 'Ana']);

function consol(){
    let done = it.next()
    if( done.done == false){
        console.log(done.value); // 'David'
        consol()
    }
}

consol()

