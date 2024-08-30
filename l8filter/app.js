//UI
const getinput = document.getElementById('search');

let getsortazm1btn = document.getElementById('sortazm1'),
    getsortzam1btn = document.getElementById('sortzam1'),
    getsortazm2btn = document.getElementById('sortazm2'),
    getsortzam2btn = document.getElementById('sortzam2');

const getul = document.getElementById('members');
const getlis = getul.getElementsByTagName('li');

// console.log(getlis);
// console.log(getlis[0]);

getinput.addEventListener('keyup',filter);

getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);
getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);


function filter(){
    const filter = this.value.toLowerCase();
    // console.log(filter);

    for(let x = 0; x < getlis.length; x++){
        // console.log(x);

        // getlink = getlis[x].getElementsByTagName('a');
        // getlink = getlis[x].getElementsByTagName('a')[0];
        getlink = getlis[x].querySelector('a');
        //console.log(getlink);

        const getatext = getlink.textContent || getlink.innerText;
        // console.log(getatext);
        // console.log(getatext.toLowerCase());

        if(getatext.toLowerCase().indexOf(filter) > -1){
            getlis[x].style.display = "";
        }else{
            getlis[x].style.display = "none";
        }

    }
}

// Method 1
function sortingazm1(){
    console.log('method 1 AZ');

    let lis = [];

    for(let i=0; i < getlis.length; i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);

        lis.push(getlis[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    const azresults = lis.sort();
    //console.log(azresults);

    getul.innerHTML = "";

    azresults.forEach(function(azresults){
        // console.log(azresult);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0)";

        newlink.appendChild(document.createTextNode(azresults));

        newli.appendChild(newlink);
        //console.log(newli);

        getul.appendChild(newli);
    })
}



function sortingzam1(){
    console.log('method 1 ZA');

    let lis = [];

    for(let i=0; i < getlis.length; i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);

        lis.push(getlis[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    const azresults = lis.sort().reverse();
    //console.log(azresults);

    getul.innerHTML = "";

    azresults.forEach(function(azresults){
        // console.log(azresult);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0)";

        newlink.appendChild(document.createTextNode(azresults));

        newli.appendChild(newlink);
        //console.log(newli);

        getul.appendChild(newli);
    })
}



// console.log(getlis[0].textContent.toLocalLowerCase()); // ag ag
// console.log(getlis[1].textContent.toLocalLowerCase()); // mg mg

// if(getlis[0].textContent.toLocalLowerCase() > getlis[1].textContent.toLocaleLowerCase()){
//     console.log(true);
// }else if(getlis[0].textContent.toLocaleLowerCase() === getlis[1].textContent.toLocaleLowerCase()){
//     console.log("equal");
// }else{
//     console.log(false);
// }

// a < z

function sortingazm2(){
    console.log('method 2 AZ');

    let shouldswitch = true;
    let switching = true;

    //console.log(getlis.length);

    while(switching){
        switching = false;
        let i;

        for(i = 0;i < getlis.length - 1; i++){
            // console.log(i) // 0- 34 //after -1 = 0 to 33

            shouldswitch = false;

            if(getlis[i].textContent.toLocaleLowerCase() > getlis[i+1].textContent.toLocaleLowerCase()){
                shouldswitch = true;
                break;
            }


        }

        // console.log(i); // 34

        if(shouldswitch){
            // parent.insertBefore(new,existing)
            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
            switching = true;
        }
    }
}

function sortingzam2(){
    console.log('method 2 ZA');

    let shouldswitch = true;
    let switching = true;

    //console.log(getlis.length);

    while(switching){
        switching = false;
        let i;

        for(i = 0;i < getlis.length - 1; i++){
            // console.log(i) // 0- 34 //after -1 = 0 to 33

            shouldswitch = false;

                // 0 
            if(getlis[i].textContent.toLocaleLowerCase() < getlis[i+1].textContent.toLocaleLowerCase()){
                shouldswitch = true;
                break;
            }


        }

        // console.log(i); // 34

        if(shouldswitch){
            // parent.insertBefore(new,existing)
            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
            switching = true;
        }
    }
}