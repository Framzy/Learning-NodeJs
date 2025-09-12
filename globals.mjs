setTimeout(()=>{
    console.info("Global without import");
},6000)

function hitungMundur(sec) {
  let idTimer = setInterval(function() {
    console.log(sec);
    sec--;
    if (sec < 1) {
      clearInterval(idTimer); 
      console.log("End!");
    }
  }, 1000);
}

hitungMundur(5); 