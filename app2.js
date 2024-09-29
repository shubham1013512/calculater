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
let erase = document.querySelector("#erase");

let arr = [];
let arr1 = [];
let arr2 = [];
let str ="";
count = 0;
// let numArr = [];


const answ = (arr2,numArr)=>{
    let z = 0;
        for(j=0; j<arr2.length; j++){
            
            if(arr2[j] === divied.innerText){
                // arr[z] = numArr[i]/numArr[i+1];
                console.log(numArr);
                numArr[z+1] = numArr[z]/numArr[z+1];
                console.log(numArr);
                // arr.push(numArr[z]/numArr[z+1]);
                // console.log(arr);
                z++;    
            }else if(arr2[j] === multi.innerText){
                // arr[z] = numArr[i]/numArr[i+1];
                console.log(numArr);
                numArr[z+1] = numArr[z]*numArr[z+1];
                console.log(numArr);
                // arr.push(numArr[z]/numArr[z+1]);
                // console.log(arr);
                z++;    
            }else if(arr2[j] === minus.innerText){
                // arr[z] = numArr[i]/numArr[i+1];
                console.log(numArr);
                numArr[z+1] = numArr[z]-numArr[z+1];
                console.log(numArr);
                // arr.push(numArr[z]/numArr[z+1]);
                // console.log(arr);
                z++;    
            }else if(arr2[j] === plus.innerText){
                // arr[z] = numArr[i]/numArr[i+1];
                console.log(numArr);
                numArr[z+1] = numArr[z]+numArr[z+1];
                console.log(numArr);
                // arr.push(numArr[z]/numArr[z+1]);
                // console.log(arr);
                z++;    
            }
            else{
                
                console.log(numArr[z]);
                
            }
        }
}

inputs.forEach((input)=>{
    input.addEventListener("click",()=>{
        let v = input.innerText;
        if(v==="."||v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"||v==="8"||v==="9"){
            str = str.concat(input.innerText) ;
            console.log(str);
            msg.innerText = msg.innerText + input.innerText;
      }else if(input.innerText === divied.innerText){
              arr1.push(str);
              arr2.push(divied.innerText);
              console.log(arr1);
              console.log(arr2);
              msg.innerText = msg.innerText + input.innerText;
              str = "";
      }else if(input.innerText === multi.innerText){
        arr1.push(str);
        arr2.push(multi.innerText);
        console.log(arr1);
        console.log(arr2);
        msg.innerText = msg.innerText + input.innerText;
        str = "";
      }else if(input.innerText === minus.innerText){
        arr1.push(str);
        arr2.push(minus.innerText);
        console.log(arr1);
        console.log(arr2);
        msg.innerText = msg.innerText + input.innerText;
        str = "";
      }else if(input.innerText === plus.innerText){
        arr1.push(str);
        arr2.push(plus.innerText);
        console.log(arr1);
        console.log(arr2);
        msg.innerText = msg.innerText + input.innerText;
        str = "";
     }else if(input.innerText === equal.innerText){
        arr1.push(str);
        let numArr = arr1.map(Number);
        arr2.push(equal.innerText);
        console.log(arr1);
        console.log(numArr);
        console.log(arr2);
        msg.innerText = msg.innerText + input.innerText;
        
        answ(arr2,numArr);
        msg.innerText = numArr[numArr.length-1];
        arr1 = [];
        str = msg.innerText;
        arr2 = [];


}

    })
})

const reset = () => {
    // window.location.reload();
 arr = [];
 arr1 = [];
 arr2 = [];
 str = "";
count = 0;
numArr = [];
 
msg.innerText = "";

}

clean.addEventListener("click", reset);

// const deleat = () =>{
//     msg.innerText = msg.innerText.slice(0,msg.innerText.length-1);
//     console.log("abs");
    
// }

// erase.addEventListener("click", deleat);