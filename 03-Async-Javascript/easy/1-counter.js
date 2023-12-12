const counter1 = () => {
    let i = 0;
  setInterval(()=>{
    console.log(i);
    i+=1;
  },1000);
};
counter1()