let container=document.querySelector(".container")

let arr=["Initializing Hacking","Reading your Files","Password files Detected","Sending all passwords and personal files to server","Cleaning up"]




// function delay(text){
//     let timer=1+6*Math.random()
//     console.log(timer);
    
//     return new promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('inside');
            
//             let ele=document.createElement("p")
//             ele.innerHTML=text
//             container.append(ele)
//             resolve()
//         },timer*1000)
//     })
// }

function delay() {
  let timer = 2 + 5 * Math.random();
  console.log(timer);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('inside');
      
      resolve(); // 
    }, timer * 1000);
  });
}

async function main(text){
    for(let i=0;i<5;i++){
    let text=arr[i]
    
    let ele = document.createElement("p");
      ele.innerHTML =">>> "+text;
      container.append(ele);

     let t= setInterval(()=>{

          if(ele.innerHTML.endsWith("...")){
            // ele.innerHTML=ele.innerHTML.slice(0,ele.length-3)
            ele.innerHTML = ele.innerHTML.slice(0, ele.innerHTML.length - 3);
          }
          else{
            ele.innerHTML=ele.innerHTML+"."
          }
        }
      ,400)
      await delay()
      clearInterval(t)
      if(ele.innerHTML.endsWith("...")){
            // ele.innerHTML=ele.innerHTML.slice(0,ele.length-3)
            ele.innerHTML = ele.innerHTML.slice(0, ele.innerHTML.length - 3);
        }
        else if(ele.innerHTML.endsWith("..")){ ele.innerHTML = ele.innerHTML.slice(0, ele.innerHTML.length - 2);}
        else if(ele.innerHTML.endsWith(".")){ ele.innerHTML = ele.innerHTML.slice(0, ele.innerHTML.length - 1);}

    ele.innerHTML=ele.innerHTML+" (DONE)"
    }
}

main()