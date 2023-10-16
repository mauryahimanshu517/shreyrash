var arr=[
    
        
        {dp:"nav/1.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/2.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/8.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/4.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/5.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/6.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/10.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/3.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/9.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/7.JPG" ,images:"nav/2.JPG"}, 
        {dp:"nav/8.JPG" ,images:"nav/2.JPG"}, 
        
        

]

var clutter="";
arr.forEach(function(elem,index){
    clutter+=`<div class="story">
    <div id="0" class="overlay"></div>
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
})

document.querySelector("#stories").innerHTML=clutter;

var grow=0;
document.querySelector("#stories").addEventListener("click",function(dets){
    document.querySelector("#fullpreview").style.display="initial";
    document.querySelector("#fullpreview").style.backgroundImage=`url(${arr[dets.target.id].dp})`;
    setTimeout(function(){
        document.querySelector("#fullpreview").style.display="none";
    },2000)
    if(grow<=100){
        setInterval(function(){
            document.querySelector("#growth").style.width=`${grow++}%`;
        },20)
    }
    else{
        grow=0
    }
   
})



const videos = document.querySelectorAll(".video-container video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
        video.classList.add("playing");
    });

    video.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0;
        video.classList.remove("playing");
    });
});


let button =document.querySelector(".speak");
let text =document.querySelector(".text_s")
const textPortion = text.textContent.trim();
let pause=document.querySelector(".pause")

button.addEventListener("click",()=>{
    let utterance=new
    SpeechSynthesisUtterance(textPortion)
    speechSynthesis.speak(utterance);
    
pause.addEventListener("click", () => {
    if (utterance) {
        speechSynthesis.cancel();
    }
});
})

var lamp=document.querySelector(".ri-sun-fill")
var body=document.querySelector("body")
var main=document.querySelector("#main")
var lamp2=document.querySelector("#lamp2")
var heading=document.querySelector(".head")
var headings=document.querySelector(".get")
var reason=document.querySelector(".reason")
var city=document.querySelector(".city")
var bhopal=document.querySelector(".bhopal")
var indore=document.querySelector(".indore")
var jbl=document.querySelector(".jbl")
var shre=document.querySelector(".shrey")
var vedio=document.querySelector(".vedio")
var fellings=document.querySelector(".fellings")
var mode=document.querySelector("#dark-mode-text")

lamp.addEventListener("click",()=>{
    body.style.backgroundColor="#181818";
    main.style.backgroundColor="#181818"
    lamp2.style.display="initial"
    heading.style.color="white"
    headings.style.color="white"
    reason.style.color="white"
    city.style.color="white"
    bhopal.style.color="white"
    indore.style.color="white"
    jbl.style.color="white"
    shre.style.color="white"
    vedio.style.color="white"
    fellings.style.color="white"
    mode.style.color="white"
    if (mode.textContent === "Dark Mode") {
        mode.textContent = "Light Mode";
      } 
    
    

    
})
lamp2.addEventListener("click",()=>{
    body.style.backgroundColor="white";
    main.style.backgroundColor="white"
    lamp2.style.display="none"
    heading.style.color="black"
    headings.style.color="black"
    reason.style.color="black"
    city.style.color="black"
    bhopal.style.color="black"
    indore.style.color="black"
    jbl.style.color="black"
    shre.style.color="black"
    vedio.style.color="black"
    fellings.style.color="black"
    mode.style.color="black"
    if(mode.textContent === "Light Mode") {
        mode.textContent = "Dark Mode";
      } 
   
})



