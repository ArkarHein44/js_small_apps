//UI
const getform = document.getElementById('form');
const gettextbox = document.getElementById('textbox');
const getul = document.querySelector('.list-group');

getform.addEventListener('submit',(e)=>{

    //console.log('hay');

    addnew();

    e.preventDefault();
});

const getlocaldbs = JSON.parse(localStorage.getItem('todos'));
//console.log(getlocaldbs);

if(getlocaldbs){
    getlocaldbs.forEach(getlocaldb=>addnew(getlocaldb));
}

function addnew(todo){
    let todotext = gettextbox.value;
    // console.log(todotext);    

        if(todo){
            todotext = todo.text;

        }

        if(todotext){
            const newli = document.createElement('li');

            if(todo && todo.done){
                newli.classList.add('completed');
            }

            newli.appendChild(document.createTextNode(todotext));
            // console.log(newli);

            getul.appendChild(newli);
            gettextbox.value = ``;
            gettextbox.focus();
            updatelocalstorage()

            newli.addEventListener('click',function(){
                
                newli.classList.toggle('completed');
                updatelocalstorage();
            })

            newli.addEventListener('contextmenu',function(e){
                // console.log('hello');

                newli.remove();
                updatelocalstorage();

                e.preventDefault();
            })
        }

}

function updatelocalstorage(){
    let getalllis = document.querySelectorAll('li');

    const todos = [];

    getalllis.forEach(getallli=>{
        todos.push({
            text:getallli.textContent,
            done:getallli.classList.contains('completed') //false
        });
    });

    //console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
}

// 13TD 