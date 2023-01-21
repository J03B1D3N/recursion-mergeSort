//febonacci sequence without recursion

function fibs(n) {
    let fib = [0, 1, 1]
    if(n <= 0) return 'enter a valid number fam'
    if(n == 0) return 0
    if(n == 1) return [0, 1]
    if(n == 2) return fib
    if(n > 3) {
        for(let i = 3; i < n; i++){
            const lastTwo = fib.slice(-2)
            
            const lastTwoSum = lastTwo[0] + lastTwo[1]
            fib.push(lastTwoSum)
        }
    } return fib
}


//febonacci sequence with recursion
function fibsRec(n){

let fib = [0, 1, 1]

if(n <= 0) return 'enter a valid number fam'
if(n == 0) return 0
if(n == 1) return [0, 1]
else {
    function recursion(n) {
        if(n == 3) return fib
        fib.push(fib.slice(-2).reduce((partialsum, a) => partialsum + a, 0))
        recursion(n-1)
    }
    recursion(n)
}  
return fib
}


