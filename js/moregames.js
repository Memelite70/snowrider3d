
async function FetchHtml() {
     var p = window.location.pathname;
    let response = await fetch('/embed' + p);
    return await response.text(); 
}

async function Do() {
    let html = await FetchHtml();
    console.log(html);
    localStorage.setItem('moregames', html);
    const DivToHaveGamesInserted = document.getElementById("games");
    DivToHaveGamesInserted.innerHTML = localStorage.getItem('moregames');
}

Do();
document.addEventListener('DOMContentLoaded', function () {
Do();
});