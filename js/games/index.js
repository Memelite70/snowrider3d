const originalTitle = document.querySelector('title').textContent;
const addition = ' - snow-rider.online';
if (window.location.href === window.location.origin) {
  window.location.href = "https://snow-rider.online";
}
// Check if the addition is already in the title
if (!originalTitle.includes(addition)) {
  let newTitle = originalTitle;

  // Replace specific patterns with the addition
  newTitle = newTitle.replace(/\| 3kh0/, addition);
  newTitle = newTitle.replace(/- ubg235 GameDistribution/, addition);
  newTitle = newTitle.replace(/- ubg235 GC/, addition);
  newTitle = newTitle.replace(/- ubg235 Poki/, addition);
  newTitle = newTitle.replace(/- TBG35/, addition);
newTitle = newTitle.replace(/&middot Geometry Tryhard/, addition);

  // If no replacements were made, add the addition to the end
  if (newTitle === originalTitle) {
    newTitle += addition;
  }

  document.querySelector('title').textContent = newTitle;
gtagLoad();
}
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

var link = document.createElement('link');
link.rel = "stylesheet";
link.href = "/css/game-insert.css";
var body = document.querySelector("head");
body.appendChild(link);
