//UI

const getimageboxes = document.querySelectorAll('.imgbox');

//console.log(getimageboxes);

getimageboxes.forEach(function(getimageboxe,idx){
    //console.log(getimagebox);

    getimageboxe.addEventListener('click',function(){
        // console.log(this);
        // console.log(idx);

        showbox(idx);
    });
});

function showbox(idx){
    console.log("from parameter = ",idx);

    getimageboxes.forEach(function(imagebox,curidx){
        // console.log("current idx = ",curidx);

        if(idx === curidx){
            imagebox.classList.add("show");

            imagebox.addEventListener('click',function(e){
                // console.log(e.target);

                if(e.target.className === 'btn-close'){
                    // console.log("hi");

                    imagebox.classList.remove('show');
                }

                if(e.target.classList.contains('btn')){
                    // console.log('hay');

                    //const getsubbtn = imagebox.querySelector('.btn);

                    const getsubbtn = getimageboxes[idx].querySelector('.btn');
                    getsubbtn.textContent = "Subscribed";
                }
            })

        }else{
            imagebox.classList.remove('show');
        }
    })
}

// 4IB 