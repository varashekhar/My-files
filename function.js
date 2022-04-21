 //arrow   
sum= (a,b) =>(a+b);
console.log(sum (1,2)); 
//fun
function outer (){
    i = 111; 
    function inner (){
        console.log(i)
    }
    inner()
}
outer();
