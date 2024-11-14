//reduce
// let numb=[10,20,30,40,50]
// let num=numb.reduce((acc,curr,index)=>{
//     console.log(index,accumulator,currentvalue);
    
// // },0) her 0 is inital value
 

let num=[1,2,3,4,5,6]
let res=num.reduce((prval,currval,idx)=>{
    console.log(idx,prval,currval);
    
},0)