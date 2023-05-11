function slider(){
	let offset = 0; 
	const sliderLine = document.querySelector('.slider_line');
	const sliderContainerWidth = document.querySelector('.slider').offsetWidth;

const maxWidth = sliderContainerWidth * 2;

document.querySelector('.next').addEventListener('click', function(){ 
 offset = offset + sliderContainerWidth;

 if (offset > maxWidth) {
   offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
})

document.querySelector('.prev').addEventListener('click', function(){

 offset = offset - sliderContainerWidth;

 if (offset < 0) {
     offset = maxWidth;
  }
  sliderLine.style.left = -offset + 'px';
})
}
slider();