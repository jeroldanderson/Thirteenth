const mainGif=document.getElementById("main-gif");
const yesBtn=document.getElementById("yes");
const noBtn=document.getElementById("no");

let gifLock=false;

//when hovering yes
yesBtn.addEventListener("mouseover",()=>{
    if(gifLock==false)
        {
            mainGif.src="qoobee-hover-yes.gif";
        }
});
yesBtn.addEventListener("mouseout",()=>{
    if(gifLock==false)
        mainGif.src="loop.gif";
});
//hovering no
noBtn.addEventListener("mouseover",()=>{
    if(gifLock==false)
        {
            mainGif.src="qoobee-hover-no.gif";
        }
});
noBtn.addEventListener("mouseout",()=>{
    if(gifLock==false)
        mainGif.src="loop.gif";
});

yesBtn.onclick=()=>{
    mainGif.src="yes-onclick.gif";
    gifLock=true;    
};
noBtn.onclick=()=>{
    mainGif.src="no-onclick.gif";
    gifLock=true;
};