///Certificates section


//Movement

const certificateDiv =document.getElementById("certificateDiv");

const leftArrow=document.getElementById("leftArrow");
const rightArrow=document.getElementById("rightArrow");
let scrollValue=true;

let certificatesInterval;
const setIntervalFunction=()=>{
  certificatesInterval=window.setInterval(()=>{
    scrollValue=false;
    certificateDiv.scrollBy({left:371,behavior:'smooth'});
    checkEdges();
    setTimeout(()=>{scrollValue=true;}, 500);
  },5000)
}
setIntervalFunction();

const leftArrowClick=(direction)=>{
    if(scrollValue===true){
        certificateDiv.scrollBy({left:direction*371,behavior:'smooth'});
        checkEdges();
        setTimeout(()=>{scrollValue=true;}, 500);
        scrollValue=false;
    }
}

const checkEdges = () => {
  const maxScrollLeft = certificateDiv.scrollWidth - certificateDiv.clientWidth;

  if (certificateDiv.scrollLeft >= maxScrollLeft - 5) {
    certificateDiv.scrollTo({ left: 0, behavior: 'smooth' });
  }
}


//Focus

let focusValue=false;

const focuss=(input)=>{
  const c=document.getElementById(input);
  if(focusValue===false){
    setTimeout(()=>{c.requestFullscreen();},80);
    clearInterval(certificatesInterval);
  }
  else{
    if (document.fullscreenElement) {
      setTimeout(()=>{document.exitFullscreen();},80);
      setIntervalFunction();
    }
  }
  focusValue=!focusValue;
}


///Constacts section

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/xqalobyn", {
    method: "POST",
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ An error occurred. Please try again.";
  }
  window.setTimeout(() => {
    status.innerHTML = "";
  }, 3000);
});