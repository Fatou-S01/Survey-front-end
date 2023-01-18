var bar = 25;
const prev1 = () =>{
       
  const prev = document.getElementById('prev');
  const progress = document.getElementById("progress-container");
 /* if(bar <= 25){
   prev.disabled = true;
  }*/
  if(bar > 25){
   progress.style.width = (bar - 25) + "%";
   bar = bar - 25;
  }
};

const next1 = () =>{
/*const prev = document.getElementById('prev');*/
const progress = document.getElementById("progress-container");
/*const next = document.getElementById('next');*/
if(bar < 100){
  progress.style.width = (bar + 25) + "%";
  bar = bar + 25;
  /*prev.disabled = false;*/
 /* prev.onclick = prev1;*/
}
if(bar === 100){
   /*next.disabled = true;*/
  /* prev.disabled = false;*/
}

};
export{next1,prev1}