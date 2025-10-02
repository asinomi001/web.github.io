
// final_helper.js - check visited pages and unlocked cases for final reveal
(function(){
  try{
    var visited = JSON.parse(localStorage.getItem('visited_pages')||'[]');
    var unlocked = JSON.parse(localStorage.getItem('unlocked_cases')||'[]');
    var requiredPages = ['home','cases','archive','gallery','messages','admin','final'];
    var pagesVisited = requiredPages.filter(function(p){ return visited.indexOf(p)!==-1 }).length;
    var blackroomUnlocked = unlocked.some(function(id){ return id.toLowerCase().indexOf('case022')!==-1 || id.toLowerCase().indexOf('c22')!==-1; }); // approximate
    // If enough pages visited and some unlock present, show a banner
    if(pagesVisited >= requiredPages.length && unlocked.length>0){
      var b = document.createElement('div');
      b.style.background='#072016'; b.style.color='#ffd7a8'; b.style.padding='12px'; b.style.borderRadius='6px'; b.style.margin='12px 0';
      var a = document.createElement('a'); a.href='/final_reveal.txt'; a.textContent='Download final_reveal.txt'; a.style.color='#ffd7a8';
      b.textContent = 'Conditions met — final reveal available: '; b.appendChild(a);
      document.body.insertBefore(b, document.body.firstChild);
    }
  }catch(e){console.error(e)}
})();
