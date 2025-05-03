quiz=[
    {
        pitanje:"Koji je ovo logo",
        slika: "images/gugl.jpeg",
        a:"Roblox",
        b:"Twitter",
        c:"Google",
        d:"Chrome",
        tacniOdgovor:"c"
    },
    {
        pitanje:"Koji je ovo logo",
        slika: "images/tviter.png",
        a:"Tik tok",
        b:"Twitter",
        c:"Minecraft",
        d:"Facebook",
        tacniOdgovor:"b"
    },
    {
        pitanje:"Koji je ovo logo",
        slika: "images/instagram.jpeg",
        a:"Instagram",
        b:"Youtube",
        c:"Google",
        d:"Microsoft",
        tacniOdgovor:"a"
    }
]
let quizContainer=document.getElementsByClassName("quiz-container")[0];
let question=document.getElementById("question");
let sviOdgovor=document.querySelectorAll("input");
let a_text=document.getElementById("a_text");
let b_text=document.getElementById("b_text");
let c_text=document.getElementById("c_text");
let d_text=document.getElementById("d_text");
let dugme=document.getElementById("submit");
let slika=document.getElementById("slika");
let score=0;
let pitanje=0;
let photo=1;

function ucitaj() {
    let trenutniObjekat = quiz[pitanje];
    question.innerText = trenutniObjekat.pitanje;
    slika.src = trenutniObjekat.slika;
    a_text.innerText = trenutniObjekat.a;
    b_text.innerText = trenutniObjekat.b;
    c_text.innerText = trenutniObjekat.c;
    d_text.innerText = trenutniObjekat.d;
    slika.src = `img/logo-${photo}.jpeg`;
    odcekiraj();
}
ucitaj()
function odcekiraj(){
    sviOdgovor.forEach(odgovor=>odgovor.checked=false);
}
dugme.addEventListener("click",() => {
    let odgovor=undefined;
    sviOdgovor.forEach(elem=>{
        if(elem.checked==true){
            odgovor=elem.id
        }
    })
    if(odgovor!=undefined){
        if(odgovor==quiz[pitanje].tacniOdgovor){
            score++;
        }
        pitanje++;
        photo++;
        if(pitanje<quiz.length){
            ucitaj()
        }
        else{
            quizContainer.innerHTML=
            `
            <h2>Rezultat ${score}/${quiz.length}</h2>
            <button id="submit" onclick="location.reload()">Ponovo</button>

            `
        }

    }
    else{
        alert('Niste odgovorili')
    }
})