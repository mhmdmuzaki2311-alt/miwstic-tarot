/* =====================================
   MYSTIC TAROT
   script.js
====================================== */

const tarotCards = [

{
name:"The Fool",
meaning:"A new beginning is waiting for you."
},

{
name:"The Magician",
meaning:"You already have everything you need."
},

{
name:"The High Priestess",
meaning:"Trust your intuition."
},

{
name:"The Empress",
meaning:"Growth, abundance, and creativity."
},

{
name:"The Emperor",
meaning:"Take control and stay disciplined."
},

{
name:"The Hierophant",
meaning:"Wisdom comes from learning."
},

{
name:"The Lovers",
meaning:"Love and meaningful choices."
},

{
name:"The Chariot",
meaning:"Move forward with confidence."
},

{
name:"Strength",
meaning:"Inner courage will overcome fear."
},

{
name:"The Hermit",
meaning:"Take time to reflect."
},

{
name:"Wheel of Fortune",
meaning:"Big changes are coming."
},

{
name:"Justice",
meaning:"Balance and honesty matter."
},

{
name:"The Hanged Man",
meaning:"Look at things differently."
},

{
name:"Death",
meaning:"Transformation and a fresh chapter."
},

{
name:"Temperance",
meaning:"Patience creates harmony."
},

{
name:"The Devil",
meaning:"Release what is holding you back."
},

{
name:"The Tower",
meaning:"Unexpected change brings growth."
},

{
name:"The Star",
meaning:"Hope and healing are on your side."
},

{
name:"The Moon",
meaning:"Not everything is as it seems."
},

{
name:"The Sun",
meaning:"Success, happiness, and positive energy."
},

{
name:"Judgement",
meaning:"It's time to answer your calling."
},

{
name:"The World",
meaning:"Completion and new opportunities."
}

];

const drawButton = document.getElementById("drawCard");
const result = document.getElementById("result");

drawButton.addEventListener("click",()=>{

result.innerHTML="🔮 Shuffling Cards...";

drawButton.disabled=true;

setTimeout(()=>{

const random=Math.floor(Math.random()*tarotCards.length);

result.innerHTML=`
<h2>${tarotCards[random].name}</h2>
<p>${tarotCards[random].meaning}</p>
`;

drawButton.disabled=false;

},1800);

});


/* ===========================
   PARALLAX CARD
=========================== */

const card=document.querySelector(".tarot-card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/35;
const y=(window.innerHeight/2-e.pageY)/35;

card.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});


/* ===========================
   NAVBAR BLUR
=========================== */

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(8,8,20,.75)";
nav.style.backdropFilter="blur(25px)";

}else{

nav.style.background="rgba(255,255,255,.08)";
nav.style.backdropFilter="blur(18px)";

}

});


/* ===========================
   SCROLL REVEAL
=========================== */

const sections=document.querySelectorAll(
".about,.services,.cards,.daily,.contact"
);

const reveal=()=>{

const trigger=window.innerHeight*0.82;

sections.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<trigger){

sec.style.opacity="1";
sec.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);
reveal();


/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll("button,a").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const size=Math.max(btn.clientWidth,btn.clientHeight);

circle.style.width=size+"px";
circle.style.height=size+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.4)";
circle.style.left=e.offsetX-size/2+"px";
circle.style.top=e.offsetY-size/2+"px";
circle.style.pointerEvents="none";
circle.style.transform="scale(0)";
circle.style.transition=".6s";

btn.appendChild(circle);

setTimeout(()=>{

circle.style.transform="scale(4)";
circle.style.opacity="0";

},10);

setTimeout(()=>{

circle.remove();

},650);

});

});


/* ===========================
   HERO TEXT EFFECT
=========================== */

const hero=document.querySelector(".hero h1");

setInterval(()=>{

hero.style.textShadow="0 0 30px #FFD166";

setTimeout(()=>{

hero.style.textShadow="0 0 10px rgba(255,209,102,.3)";

},700);

},2500);