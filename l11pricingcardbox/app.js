//UI
const   getcheckbox = document.getElementById('togglecheckbox');
const   getchecklabel = document.getElementById('togglelabel');
const   getbasic = document.getElementById('basic'),
        getpro = document.getElementById('pro'),
        getmst = document.getElementById('mst');


        // getcheckbox.addEventListener('click',()=>{
        //     if(getcheckbox.checked){
        //         //console.log('yes');

        //         getbasic.textContent = 120;
        //         getpro.textContent = 240;
        //         getmst.textContent = 360;
        //     }else{
        //         //console.log('no');

        //         [getbasic.textContent,getpro.textContent,getmst.textContent] = [10,20,30];
        //     }
        // });

        getchecklabel.addEventListener('click',function (){
            if(getcheckbox.checked){
                //console.log('yes');

                [getbasic.textContent,getpro.textContent,getmst.textContent] = [10,20,30];
            }else{
                //console.log('no');

                getbasic.textContent = 120;
                getpro.textContent = 240;
                getmst.textContent = 360;

            }
        });


        // 20PT 