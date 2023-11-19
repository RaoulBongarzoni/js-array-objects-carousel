


//array iniziale
const images = [
{
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//

//funzione che mi resetta lo stato al caricamento pagina


const img_position= document.getElementById("lateral_img");
for (let i = 0; i<images.length; i++){

    let elemento = document.createElement("img")
    elemento.src=`${images[i].image}`
    elemento.classList.add("slide")
    if(i==0){
        elemento.classList.add("active")
    }
    img_position.appendChild(elemento);

}

//


const immagini = images;
const immagini_laterali= document.getElementsByClassName("slide");
console.log(immagini);
var actual = 0;

//funzione che al click cambia immagine sopra
document.getElementById("up").addEventListener("click" , function(){
    let direction= "up";
    imageMovement(direction);

});

document.getElementById("down").addEventListener("click" , function(){
    let direction = "down";
    imageMovement(direction);

});



function imageMovement(direction){

    immagini_laterali[actual].classList.remove("active");

    if (direction == "down"){
        if(actual==images.length-1){
        actual=0;
        immagini_laterali[actual].classList.add("active")
        }else{
        actual ++;
        immagini_laterali[actual].classList.add("active")
    }}else{
        if(actual==0){
        actual=images.length-1;
        immagini_laterali[actual].classList.add("active")
        }else{
        actual --;
        immagini_laterali[actual].classList.add("active")
    }}
    
    console.log(actual);
    document.getElementById("img_container").innerHTML = "";
    let screenImg= document.createElement("img");
    screenImg.src=`${images[actual].image}`

    document.getElementById("img_container").appendChild(screenImg);

}

/* document.getElementById("up").addEventListener("click", function(){

    immagini[actual].classList.remove("active");

    if(actual==percorsi.length-1){
        actual=0;
        immagini[actual].classList.add("active")
    }else{

        actual ++;
        immagini[actual].classList.add("active")
    }

}) */








