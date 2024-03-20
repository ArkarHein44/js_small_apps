//Get UI
const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ["red",'skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');

//console.log(languages);
//console.log(languages[0]);

//console.log(loangaues.indexOf('Reactjs'));//give value take index 1
//console.log(loangaues.indexOf('laravel'));//give value take index -1
//console.log(loangaues.indexOf('Laravel'));//give value take index 3

//console.log(colors[languages.indexOf('Reactjs')]); //skyblue
//console.log(colors[languages.indexOf('Vuejs')]); //violet

function* generatorfun(){
    var idx = 0;

    while(true){
        yield idx++;

        if(idx >3){
            idx = 0;
        }
    }
}

const genfun = generatorfun();

// console.log(genfun.next()); //{value:0,done:false}

// console.log(genfun.next().value); // 0        0
//console.log(genfun.next().value); // 1        1
//console.log(genfun.next().value); // 2        2
//console.log(genfun.next().value); // 3        3
//console.log(genfun.next().value); // 4        0
//console.log(genfun.next().value); // 5        1

// console.log(languages[genfun.next().value]);    //Nodejs
// console.log(languages[genfun.next().value]);    //Reactjs
// console.log(languages[genfun.next().value]);    //Vuejs
// console.log(languages[genfun.next().value]);    //Laravel
// console.log(languages[genfun.next().value]);    //Nodejs

function showwords(word){
    //console.log(word); //Node js
    //console.log(word[0]); //N

    let x = 0;
    gettxtani.innerHTML = "";
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    //gettxtani.innerHTML = word;
    //gettxtani.innerHTML = word; //N
    //gettxtani.innerHTML = word; //No
    //gettxtani.innerHTML = word; //Nod

    let showinterval = setInterval(function(){
        if(x >= word.length){
            clearInterval(showinterval);
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
    },500)
}

showwords(languages[genfun.next().value]); //showwords('Nodejs);


// 15WD