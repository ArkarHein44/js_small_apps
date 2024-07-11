//UI
const getdivarea = document.getElementById('divarea');

getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

const getbtns = document.querySelectorAll('.btn');

getbtns.forEach(function(getbtn){
    // console.log(getbtn);

    getbtn.addEventListener('click',function(){
        //const getcommand = getbtn.getAttribute('data-command');
        //console.log(getcommand);

        const getcommand  = getbtn.dataset['command'];
        //console.log(getcommand);

        if(getcommand === "clearText"){
            getdivarea.innerHTML = '';
        }else if(getcommand === "createLink" || ){
            
        }


        document.execCommand(getcommand,false,null);

    });
});

function upcasefun(){
    getdivarea.style.textTransform = 'uppercase';
}

function lwcasefun(){
    getdivarea.style.textTransform = 'lowercase';
}

function capcasefun(){
    getdivarea.style.textTransform = 'capitalize';
}



