function async1(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('data 1');
        resolve("success")
      },3000
      )
    }
    )
}

//The issue is that your resolve("success") is happening immediately, not waiting for the setTimeout to complete. Here's the fixed version:


function async2(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('data 2');
        resolve("success")
      },3000
      )
    }
)
}


console.log('fetching data 1 ...');
async1().then((res) => {
    console.log('fetching data 2...');
//   console.log(res);
  async2().then((res) => {
    // console.log(res);
    
  }
  )
}
)