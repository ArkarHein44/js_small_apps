//UI
const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();


getemail.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    // console.log(this.value);

    createemaillist(this.value);
})


function createemaillist(inputtext){
    // console.log(inputtext);

    // split by comma (',')
    // const eitems = inputtext.split(',');
    // console.log(eitems);

    // remove empty,space 
    // const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitems);

    // remove empty,space and space text 
    const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitems);

    getemcontainer.innerHTML="";

    eitems.forEach(function(eitem){
        //console.log(eitem);

        const newspan = document.createElement('span');
        newspan.textContent = eitem;
        newspan.classList.add('email');
        //console.log(newspan);
        getemcontainer.appendChild(newspan);
    });




}


getbtn.addEventListener('click',function(e){
    e.preventDefault();
    sendemail();
});

function sendemail(){
    const getallemails = document.querySelector('.email');
    const gettextvalue = gettextarea.value;

    console.log(getallemails);
    console.log(gettextvalue);

    var persons = [];

    if(getallemails.length > 0 && gettextvalue){
        getallemails.forEach(function(getallemail){
            persons.push({
                email:getallemail.textContent,
                message:gettextvalue
            })
        });

        console.log(persons);
    }else{
        window.alert("Enter Message");
        gettextarea.focus();
    }
}