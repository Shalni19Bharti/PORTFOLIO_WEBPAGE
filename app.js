var typed = new Typed(".text" , {
    strings:["Full Stack Developer at @AITOXR", "Electronics Engineer-2025", "Passionate Innovator"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opnetab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("skill");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("skill");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbxyg_6ttjbY_A2lAS1n6GQPcoVSewWidWGojosGNf4LEYW8J7gApFJZUsqFGwTje3_s/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = " ";
        }, 1000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})