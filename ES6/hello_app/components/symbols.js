export function symbols()
{
    let prev = Symbol();
    let curr = Symbol();
    
    class fib
    {
        constructor()
        {
            prev = 0;
            curr = 1;
        }

        [Symbol.iterator]()
        {
            return{
            
                next(){
                  [curr,prev]=[curr+prev,curr];
                  return{done:false,value:curr};
                }
            }
        }
    }

    let obj = new fib();
    let fib_itr = obj[Symbol.iterator]();
    console.log(fib_itr.next());
    console.log(fib_itr.next());
    console.log(fib_itr.next());
    console.log(fib_itr.next());
    console.log(fib_itr.next());

}