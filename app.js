let nums = document.querySelectorAll(".num");
// let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal");
let divied = document.querySelector("#divied");
let multi = document.querySelector("#multi");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let ops = document.querySelectorAll(".op");
let inputs = document.querySelectorAll(".input");
let msg = document.querySelector(".msg");
let answer = document.querySelector(".ans");
let clean = document.querySelector(".clean");

let str1 = "";
let str2 = "";



// nums.forEach((num,)=>{
//     num.addEventListener("click",()=>{
//         // console.log(num.innerHTML);
        
//         str1 = str1.concat(num.innerHTML);

        
        
        
// //     })
// // })
// let count = 0;
// inputs.forEach((input)=>{
//     input.addEventListener("click", ()=>{
//         for(let num of nums){
//             if (input.innerHTML === num.innerHTML){
//                 str1 = str1.concat(input.innerHTML);   
//             }
//             else if(input.innerHTML === "/"){
//                 num1 = str1*1;
//                 let i = 0;
//                 input.addEventListener("click",()=>{
//                     for(let num of nums){
//                         if (input.innerHTML === num.innerHTML){
//                             str2 = str2.concat(input.innerHTML); 
//                             console.log(str2);  
//                         }
//                     }
//                     i++;
//                 })

//             }
//         }
//         count++;
//     })
    
// })
// let ans =0;
// let count = 0;
// inputs.forEach((input)=>{
//     input.addEventListener("click", ()=>{
//         let v = input.innerText;
//             if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
//                 str1 = str1.concat(v);  
//                 console.log(str1); 
//             }
//             else if(v === "/"||v === "*"||v === "-"||v === "+"){
//                 return;
               
//             }
        
//             count++;
//     })
    
// })

// let i = 0;
// inputs.forEach((input)=>{
//     input.addEventListener("click",()=>{
//         let v = input.innerText;
//         if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
//             str2 = str2.concat(v); 
//             console.log(str2);  
//         }else if(v==="="){
//             num1 = str1*1;
//             num2 = str2*1;
//             let ans = console.log(num1/num2);
//         }
    
//         i++;
// })
// })
const reset = () => {
    // removeEventListener("click",reset);
    // count = 0;
    // i=0;
    // str1 = "";
    // str2 = "";
    // msg.innerText = null;
    // answer.innerText = null;
    window.location.reload();

}

clean.addEventListener("click", reset);


    let count = 0;
inputs.forEach((input)=>{
    input.addEventListener("click", ()=>{
        let v = input.innerText;
            if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
                str1 = str1.concat(v);  
                count++;
                msg.innerText = `${str1}`;
            }else if(v === "/"){
                msg.innerText = `${str1} /`;
                        let i = 0;
                 inputs.forEach((input)=>{
                        input.addEventListener("click",()=>{
                        let v = input.innerText;
                         if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
                             str2 = str2.concat(v); 
                             str1 = str1.slice(0,count-1);
                             count--;
                             i++;
                             msg.innerText = `${str1} / ${str2}`;
                           }else if(v==="="){
                                num1 = str1*1;
                                num2 = str2*1;
                                let ans = num1/num2;
                                // str1 = ans.toString();
                                // msg.innerText = `${str1}`;
                                answer.innerText = `${ans}`;
                                
                                
                                  }//input.removeEventListener("click",reset);
                            })
                        })
             }else if(v === "*"){
                msg.innerText = `${str1} *`;
                        let i = 0;
                 inputs.forEach((input)=>{
                        input.addEventListener("click",()=>{
                        let v = input.innerText;
                         if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
                             str2 = str2.concat(v); 
                            str1 = str1.slice(0,count-1);
                            count--;
                             i++;
                             msg.innerText = `${str1} * ${str2}`;
                           }else if(v==="="){
                                num1 = str1*1;
                                num2 = str2*1;
                                let ans = num1*num2;
                                answer.innerText = `${ans}`;
                                  }
                            })
                        })
             }else if(v === "-"){
                msg.innerText = `${str1} -`;
                        let i = 0;
                 inputs.forEach((input)=>{
                        input.addEventListener("click",()=>{
                        let v = input.innerText;
                         if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
                             str2 = str2.concat(v); 
                            str1 = str1.slice(0,count-1);
                            count--;
                             i++;
                             msg.innerText = `${str1} - ${str2}`;
                           }else if(v==="="){
                                num1 = str1*1;
                                num2 = str2*1;
                                let ans = num1-num2;
                                answer.innerText = `${ans}`;
                                  }
                            })
                        })
             }else if(v === "+"){
                msg.innerText = `${str1} +`;
                        let i = 0;
                 inputs.forEach((input)=>{
                        input.addEventListener("click",()=>{
                        let v = input.innerText;
                         if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
                             str2 = str2.concat(v); 
                            str1 = str1.slice(0,count-1);
                            count--;
                             i++;
                             msg.innerText = `${str1} + ${str2}`;
                           }else if(v==="="){
                                num1 = str1*1;
                                num2 = str2*1;
                                let ans = num1+num2;
                                answer.innerText = `${ans}`;
                                  }
                            })
                        })
             }
             
        
            })
    
      })




    
//         let i = 0;
// inputs.forEach((input)=>{
//     input.addEventListener("click",()=>{
//         let v = input.innerText;
//         if (v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
//             str2 = str2.concat(v); 
//             console.log(str2);  
//         }else if(v==="="){
//             num1 = str1*1;
//             num2 = str2*1;
//             let ans = console.log(num1/num2);
//         }
    
//         i++;
// })
// })

