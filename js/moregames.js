
async function FetchHtml() {
     var p = "/moregames.html";
    let response = await fetch('/embed/moregames.html');
    return await response.text(); 
}

async function Do() {
    let html = await FetchHtml();
    console.log(html);
    localStorage.setItem('moregames', html);
    const DivToHaveGamesInserted = document.getElementById("moregames_left");
    DivToHaveGamesInserted.innerHTML = localStorage.getItem('moregames');
}

Do();
document.addEventListener('DOMContentLoaded', function () {
Do();
});