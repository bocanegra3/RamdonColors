function changeBackground(){
         const   symbols="0123456789ABCDEF";
         let color="#";

         for(let n=1;n<=6;n++){
            color= color+symbols[Math.floor(Math.random()*16)];
         }
        document.body.style.background= color;
        document.querySelector("span").innerHTML=color;
}