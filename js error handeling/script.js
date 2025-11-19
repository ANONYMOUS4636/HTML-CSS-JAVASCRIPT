try{
    hey
}
catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    
}









let a=prompt("enter a number")
let b=prompt("enter a number")
let sum=parseInt(a)+parseInt(b)
        //string->nan

        if(isNaN(a) || isNaN(b)){
            throw SyntaxError("error hai bhai")
        }

        // try{
        //     console.log(sum*x);

        // }

        // catch{
        //     console.log("error hai bhai 2")
        // }

        // try catch is a synchronous so any asynchronous like setTimeout() will die in the back and catch will not able to peform properly



        function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()


//finally is mainly used when in a function after return nothing further runs but ehrn we use finally after return the statement inside runs