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

    document.getElementById("card").style.display = "none";

    const message=document.getElementById("message")
    message.style.display = "block";
    message.classList.add("fade-slide");

    const messageForMe=document.getElementById("message-for-me")
    messageForMe.style.display = "block";
    messageForMe.classList.add("fade-slide");
};

noBtn.onclick=()=>{
    mainGif.src="no-onclick.gif";
    gifLock=true;
};

document.querySelector(".my-form").addEventListener("submit", sendMail);

function sendMail(event) {
    event.preventDefault();

    let parms = {
        message: document.getElementById("your-message").value
    };

    emailjs.send("service_qoad8la", "template_qdfk3vr", parms)
    .then(() => {
        alert("Email sent!!");
    })
    .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send email. Check console for more info.");
    });
}
