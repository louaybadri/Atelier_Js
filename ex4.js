lists=document.querySelectorAll('.list');
lists.forEach(x => {
    x.addEventListener("click",(e)=>{
        colors=[0,0,0,0]
        do{
            colors[0]=Math.random()*100;
            colors[1]=Math.random()*100;
            colors[2]=Math.random()*100;
            colors[3]=Math.random()*100;

        }while ((colors[2] > 255) || (colors[0] > 255) | (colors[1] > 255))
        e.target.style.backgroundColor=`rgba(${colors[0]},${colors[1]},${colors[2]},${colors[3]})`;
    })

})