//Get Slider Items
var sliderImages = Array.from (document.querySelectorAll('.slide-container img'));

//Get Slider Numbers
var slidesCount = sliderImages.length;

//set current slide
var currentSlide = 1;

//slide number elemet
var slideNumberElement = document.getElementById ('slide-number');

//previous & next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


//handle click on next and previous buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create the main paginatin element ul
var paginationElement = document.createElement ('ul');

//set Id to paginatin element ul
paginationElement.setAttribute('id','pagination-ul');

//create list items
for (var i = 1 ; i<=slidesCount ; i++){

    var paginationItems = document.createElement ('li'); //create li

    paginationItems.setAttribute('data-index','i');   //set custom attribute

    paginationItems.appendChild(document.createTextNode(i));  //li content

    //append li to the main ul 
    paginationElement.appendChild(paginationItems);
}

//add ul to the page
document.getElementById('indicators').appendChild(paginationElement);


//Get the new ul
var paginationCreatedUl = document.getElementById ('pagination-ul');

var paginationBullets = Array.from (document.querySelectorAll('#pagination-ul li'));


//trigger the checker function 

theChecker();

//next button  function
function nextSlide(){

  if(nextButton.classList.contains('disabled')){
      return false;  //do nothing

  }else{
    currentSlide++;
    theChecker();
  }
}

//previus button function
function prevSlide(){
    
    if(prevButton.classList.contains('disabled')){
        return false;  //do nothing
  
    }else{
      currentSlide--;
      theChecker();
    }
 }
//autoplay  slider  function 

setInterval(function autoPlay() {
    if (nextButton.classList.contains('disabled')) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker();
    }
}, 3000);



 //Create the checker function 
 function theChecker(){

    //set the slide number
     slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount);

     removeAllActive();

     //set active class on current slide
     sliderImages[currentSlide-1].classList.add('active');

     //set active class on pagination items
     paginationCreatedUl.children[currentSlide-1].classList.add('active');

     

     //check if current slide is the first
     if(currentSlide == 1){

         prevButton.classList.add('disabled');

     }else{
         prevButton.classList.remove('disabled');
     }

      //check if current slide is the last
      if(currentSlide == slidesCount){

        nextButton.classList.add('disabled');

    }else{
        nextButton.classList.remove('disabled');
    }
 }

 //remove all active classes 
 function removeAllActive(){

    //loop through images
     sliderImages.forEach(function (img){
         img.classList.remove('active');
     });

     //loop through bullets
     paginationBullets.forEach(function(bullet){
         bullet.classList.remove('active');
     });
 }