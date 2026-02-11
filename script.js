
const alternatives = [
    { text: "", image: "img/My Melody Hearts GIF.gif" },
    { text: "bro lo siento te equivocaste es si", image: "img/locuraaaaa.gif" },
    { text: "ommmm creo que deberias darle si", image: "img/truste perro.gif" },
    { text: "que si vergaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", image: "img/monica.gif" },
    { text: "Brother el circo queda alla", image: "img/Chistoso GIF.gif" }
    
];

const success = {
    text: "YUPIIIII 🧡💞💖",
    image: "img/tiro finale.gif"
};


const title = document.querySelector(".title");
const novia = document.querySelector(".novia");
const img = document.querySelector(".img");
const text = document.querySelector(".text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const resetBtn = document.getElementById("resetBtn");

const softMusic = document.getElementById("nana");
const finalMusic = document.getElementById("tututuru");

let count = 0;
let finalStage = false;
let musicStarted = false;


document.body.addEventListener("click", () => {
    if (!musicStarted) {
        softMusic.volume = 0.2;
        softMusic.play().catch(()=>{});
        musicStarted = true;
    }
});



//no petatear 

function updateDisplay(data){
    img.src = data.image;
    text.textContent = data.text;
}

//btn si

yesBtn.addEventListener("click", () => {

    if(finalStage){


        title.textContent = "TUTU TU TURU MAX VERSTAMEN!!! 🗣🗣🗣";

        novia.textContent = "MUERTE A LOS TIFOSI"


        // Detener música de nana
        softMusic.pause();
        softMusic.currentTime = 0;

        // Activar música fuerte tututuru
        finalMusic.volume = 0;
        finalMusic.play().catch(()=>{});

        let vol = 0;
        let subir = setInterval(() => {
            if (vol < 1) {
                vol += 0.05;
                finalMusic.volume = vol;
            } else {
                clearInterval(subir);
            }
        }, 150);

        // redbull
        document.body.style.background = "linear-gradient(45deg, black, red)";
        document.body.style.transition = "1s";

        updateDisplay({
            text: "jaja NO",
            image: "img/max.jpg"
        });

        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        resetBtn.style.display = "none";

        return;
    }

    // vuelve a la normalidad
    updateDisplay(success);

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    resetBtn.style.display = "block";
});


noBtn.addEventListener("click", () => {

    if(count < alternatives.length - 1){

        count++;
        updateDisplay(alternatives[count]);

        // 🎯 PENÚLTIMO CLICK
        if(count === alternatives.length - 1){
            noBtn.textContent = "ok si entiendo";
            noBtn.style.transform = "scale(0.5)";
            

        }

        // Efecto movimiento
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random()*300 - 600 + "px";
        noBtn.style.top  = Math.random()*300 - 350 + "px";

    } else {

        finalStage = true;
        noBtn.style.display = "none";
        resetBtn.style.display = "block";
    }
});


//Reinicio del sistema


resetBtn.addEventListener("click", () => {

    title.textContent = "¿Te gustaría ser mi San Valentín Hormiguita?";

    count = 0;
    finalStage = false;

    updateDisplay(alternatives[0]);

    yesBtn.style.display="inline-block";
    noBtn.style.display="inline-block";
    resetBtn.style.display="none";

    noBtn.style.left="0";
    noBtn.style.top="0";

    noBtn.style.transform = "scale(1)";
    noBtn.textContent = "NO lol";


    // Restaurar fondo
    document.body.style.background = "";
    
    // Detener música fuerte y volver a suave
    finalMusic.pause();
    finalMusic.currentTime = 0;

    if(musicStarted){
        softMusic.volume = 0.2;
        softMusic.play().catch(()=>{});
    }
});
