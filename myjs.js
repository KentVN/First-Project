
/*var size = document.getElementsByClassName("slider")[0].clientWidth; //Lay kich thuoc be ngang cuar class "slider"
var moveSlide = document.getElementsByClassName("slide-action")[0];		//Tro? vao class Slide-action ! phan thu thu 1
var Img = moveSlide.getElementsByTagName("img");
var max = size * Img.length;
max -= size;
var move = 0;

function Next(){
	
	if(move < max){
		 move += size;
		}
	else{
		move = 0;
	} 
	moveSlide.style.marginLeft = '-' + move + 'px';
}

function Back(){
	if(move == 0){
		move = max;
	}
	else{
		move -= size;
	}
	moveSlide.style.marginLeft = '-' + move + 'px';
}

setInterval(function(){
	Next();
},8000);
*/



let sliderImages = document.querySelectorAll(".slide"),
			arrowLeft = document.querySelector("#arrow-left"),
			arrowRight = document.querySelector("#arrow-right"),
			current = 0;


		//Clear All Images
		function reset(){
			for(let i = 0; i < sliderImages.length; i++){
				sliderImages[i].style.display = "none";

			}
		}
		//Init slider
		function startSlide(){
			reset();
			sliderImages[0].style.display="block";
		}

		//Show prev

		function slideLeft(){
			reset();
			sliderImages[current - 1].style.display="block";
			current--;
		}

		//Show next

		function slideRight(){
			reset();
			sliderImages[current + 1].style.display="block";
			current++;
			if(current === sliderImages.length - 1){
				current = -1;
			}
		}

		// Left Arrow Click
		arrowLeft.addEventListener('click',function(){
			if(current === 0){
				current = sliderImages.length;
			}
			slideLeft();
		})

		// Right Arrow Click
		 arrowRight.addEventListener('click',function(){
			if(current === sliderImages.length-1){
				current = -1;
			}
			slideRight();
		})
	
		startSlide();

		setInterval(function(){
			slideRight();
		},11000);



		//Slick

		$(document).ready(function(){

			$('.photo-fct').slick({
			 	
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 6000,
			  arrows:true, 
			  variblewidth:true,
			});
		})
