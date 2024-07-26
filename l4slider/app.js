//UI
const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
//console.log(slides);
//console.log(dots);

let currslide = 1;

document.getElementById('prev').addEventListener('click',function(){
    // console.log('i am prev');

    // console.log(currslide -= 1);
    // console.log(currslide--);

    carousel(currslide -= 1)

})

document.getElementById('next').addEventListener('click',function(){
    // console.log('i am next');

    // console.log(currslide += 1);
    // console.log(currslide++);

    carousel(currslide += 1)


});

carousel(currslide);

function  carousel(slidenum){

   let x,y;

    // hide all slides
    for(x=0; x < slides.length; x++){
        slides[x].style.display = "none"
    }

    // hide all dots
    for(y=0; y < slides.length; y++){
        // dots[y].className = "dot"

        // replace("old","new")
        // dots[y].className = dots[y].className.replace("active","")

        dots[y].classList.remove("active");
    }

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    // curslide 1 2 3 or 3 2 1
    // console.log(currslide);

    slides[currslide - 1].style.display = "block";

    //dots[currslide - 1].className = "dot active";
    //dots[currslide - 1].className += active";

    dots[currslide -1].classList.add('active');
}


for(let q = 0; q < dots.length; q++){
    dots[q].addEventListener('click',function(){

        currslide = this.getAttribute('data-bs-slide-top');
        console.log(currslide);

        carousel(currslide);
    });
}

// attcode: email