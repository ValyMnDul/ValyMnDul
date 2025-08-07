const certificateDiv =document.getElementById("certificateDiv");

const leftArrow=document.getElementById("leftArrow");
const rightArrow=document.getElementById("rightArrow");
let scrollValue=true;

window.setInterval(()=>{
    scrollValue=false;
    certificateDiv.scrollBy({left:371,behavior:'smooth'});
    checkEdges();
    setTimeout(()=>{scrollValue=true;}, 500);
},5000)

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