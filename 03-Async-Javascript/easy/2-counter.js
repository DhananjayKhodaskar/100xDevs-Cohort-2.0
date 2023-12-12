
const timeOut= (i)=>{
    setTimeout(()=>{
        console.log(i)
        timeOut(i+1)
    },1000)
}
timeOut(0);