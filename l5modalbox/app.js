//UI
let getsignupbtn = document.getElementById('signup-btn'),
    getfullscreenbtn = document.getElementById('fullscreen-btn'),
    getclfullscreenbtn = document.getElementById('closefullscreen-btn');

let getmodal = document.querySelector('.modal'),
    getbtnclose = document.querySelector('.btn-close');

    getsignupbtn.addEventListener('click',function(){
        getmodal.style.display = "block";

    });

    getbtnclose.addEventListener('click',function(){
        getmodal.style.display = "none";
    
    });

    window.onclick = function(e){
        //console.log(e.target)

        if(e.target === getmodal){
            getmodal.style.display = "none";
        }
    }

    // console.log(document);
    // console.log(document.documentElement);

    const getdoele = document.documentElement;

    getfullscreenbtn.addEventListener('click',function(){
        if(getdoele.requestFullscreen){
            getdoele.requestFullscreen();
        }else if(getdoele.webkitRequestFullscreen){
            getdoele.requestFullscreen();
        }else if(getdoele.msRequestFullscreen){
            getdoele.msRequestFullscreen();
        }       

        getclfullscreenbtn.style.display = "inline-block";
    });

    getclfullscreenbtn.addEventListener('click',function(){
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }       

        getclfullscreenbtn.style.display = "none";
    });

// 2EX 