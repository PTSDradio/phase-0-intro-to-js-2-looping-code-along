
function writeCards(names, event) {
    const array=[]
    for (let i=0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countDown(i){
    let count= i;
    while (count>=0) {console.log(count--)}
    
}