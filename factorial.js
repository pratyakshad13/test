export function f1(){
    const num=5;
    if(num<0){
        console.log("Error: The factorial is not defined");
    }
    else if(num==0){
        console.log("the factorial of",num,"is 1");
    }
    else{
        let fact=1;
        for (let index = num; index >0; index--) {
            fact*=index;
            
        }
        console.log(fact);
    }


    
}