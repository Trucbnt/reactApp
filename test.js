const myArr = [1 , 2 , 3 ,4 ,5 ];

const newArr =  myArr.map((item , index)=>{
    console.log(index);
    return item *2 ;
})
console.log(newArr);