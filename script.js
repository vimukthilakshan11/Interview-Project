const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


		$(document).ready(function(){
			$('.mobnav h4').click(function(){
				$('.mobnav ul').slideToggle();
			});
		});


        let upto = 0;

        function updated() {
          let count = document.getElementById("count-projects");
          count.innerHTML = ++upto;
          
          if (upto < 400) {
            setTimeout(updated, 10); 
          }
        }
        
        
        updated(); 

        let upto2 = 0;
        function countYears(){

            let count2 = document.getElementById("year-count1");
          count2.innerHTML = ++upto2;
          
          if (upto2 < 400) {
            setTimeout(updated, 10); 
          }
        }