//UI

const database = [
    {
        question:"Choose Traffice Light ?",
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer:"a"
    },
    {
        question:"Choose Mountain ?",
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer:"b"
    },
    {
        question:"Choose Ambulance Truck ?",
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer:"c"
    },
    {
        question:"Choose Airport ?",
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer:"d"
    }
];

// console.log(database);
// console.log(database[0].b);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getinputs = document.querySelectorAll('.answer'); // NodeList

// console.log(getinputs);

const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');


const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;

function startquestion (){

    removeselected();

    const currentqes = database[currentidx];

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;
}

startquestion();

function getsingleinput(){
    let answer;

    getinputs.forEach(function(getinput){
        // console.log(getinput);

        if(getinput.checked){
            // console.log(getinput.id);
            answer = getinput.id;
        }
    });
    
    return answer;
}

getbtn.addEventListener('click',function(){
    // console.log("i am working");

    const getanswer = getsingleinput();
    // console.log(getanswer);

    if(getanswer){
        // question 0
        // answer 0

        if(getanswer === database[currentidx].correctanswer){
            score ++;
        }

        currentidx++;

        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);

            getcontainer.innerHTML = `
                <h3>Total Score : ${score*25}</h3>
                <h4>You answered correctly at ${score}/${database.length} questions.</h4>

                <!--<button type="button" class="btn" ondblclick="window.location.reload();">Double Click to Reload</button>-->

                <button type"button" class="btn" onclick="doubleclick()">Double Click To Reload</button>
            `;


        }

    }else{
        window.alert('Choose One Answer');
    }   

});


function removeselected(){
    getinputs.forEach(function(getinput){
        return getinput.checked = false;
    });
}

let clicktimes = 0;

function doubleclick(){

    // console.log(clicktimes);

    if(clicktimes === 0){
        clicktimes = Date.now();
        // console.log(clicktimes);


    }else{

        if((Date.now() - clicktimes) < 1000){
            window.location.reload();
            clicktimes = 0;
        }else{
            clicktimes = Date.now();
        }
    }
}

// 25FN