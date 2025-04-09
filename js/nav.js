    document.addEventListener('DOMContentLoaded', function() {
gtagLoad();
    fetch('/js/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('topnav').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    if(window.location.pathname.includes("gameframe.html")){
        loadFrameGamesPage();
    }
});
function gtagLoad(){
var script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9XL9TXRPN2'; 
        script.async = true;

         document.head.appendChild(script);

      
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

  
        gtag('config', 'G-9XL9TXRPN2');
        console.log('Google Analytics Loaded');}