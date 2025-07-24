let time=document.getElementById("current");
setInterval(()=>{
let d= new Data();
time.innerHTML=d.tolocaleTimeString();
},1000)
