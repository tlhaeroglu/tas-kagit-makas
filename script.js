const sttc = 'img/';

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');

c1.addEventListener('click', function(e){
    img1.setAttribute('src', e.target.getAttribute('src'));
    specify(control());
})

c2.addEventListener('click', function(e){
    img2.setAttribute('src', e.target.getAttribute('src'));
    specify(control());
})

function specify(c){
    if(c === ''){
        return;
    }
    if(c === "1"){
        alert("Oyuncu 1 kazandı");
        //prepare();
    } else if(c === "2"){
        alert("Oyuncu 2 kazandı");
        //prepare();
    } if(c === "0"){
        alert("Berabere");
        //prepare();
    } 
    prepare();
}

function prepare(){
    setTimeout( newGame, 1000);
}


function control(){
    const images = [sttc+'tas.png', sttc+'kagit.png', sttc+'makas.png'];
    var p1 = getAtr(img1);
    var p2 = getAtr(img2);

    var _p1 = [(getAtr(img1) === images[0] 
    && getAtr(img2) === images[2]), 
    
    (getAtr(img1) === images[1] 
    && getAtr(img2) === images[0]), 
    
    (getAtr(img1) === images[2] 
    && getAtr(img2) === images[1])];

    console.log(_p1);

    var _p2 = [(getAtr(img2) === images[0] 
    && getAtr(img1) === images[2]), 
    
    (getAtr(img2) === images[1] 
    && getAtr(img1) === images[0]), 
    
    (getAtr(img2) === images[2] 
    && getAtr(img1) === images[1])];

    var _tie = [(getAtr(img2) === images[0] 
    && getAtr(img1) === images[0]), 
    
    (getAtr(img2) === images[1] 
    && getAtr(img1) === images[1]), 
    
    (getAtr(img2) === images[2] 
    && getAtr(img1) === images[2])];

    let elm ='';

    _p1.forEach(element => {
        if(element){
            elm = "1";
        }
    });

    _p2.forEach(element => {
        if(element){
            elm =  "2";
        }
    });

    _tie.forEach(element => {
        if(element){
            elm =  "0";
        }
    });

    return elm;
    
}

function getAtr(img){
    return img.getAttribute('src');
}

function newGame(){
    img1.setAttribute("src", sttc+"wait.png");
    img2.setAttribute("src", sttc+"wait.png");
}