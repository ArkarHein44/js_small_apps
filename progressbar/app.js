//UI
const getdownloadbtn = document.querySelector('.download-btn');
const getprogressbar = document.querySelector('.progress-bar');
const seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
    //console.log('hay');

    let setwidth = 0;
    let setinv = setInterval(progressinc,100);

    function progressinc(){

        if(setwidth >= 100){

            clearInterval(setinv);

            //redirect
            window.location.href = seturl;

        }else{

            setwidth ++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
            getdownloadbtn.setAttribute('disabled',true);
        }
        
    }
    
});