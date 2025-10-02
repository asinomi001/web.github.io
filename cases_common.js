
// cases_common.js - shared utilities for cases
function markCaseUnlocked(caseId){
  try{
    let s = localStorage.getItem('unlocked_cases');
    let arr = s ? JSON.parse(s) : [];
    if(!arr.includes(caseId)) arr.push(caseId);
    localStorage.setItem('unlocked_cases', JSON.stringify(arr));
  }catch(e){console.error(e);}
}
function getUnlockedCases(){ try{ return JSON.parse(localStorage.getItem('unlocked_cases')||'[]'); }catch(e){return[]} }
function markVisitedPage(page){ try{ let v = JSON.parse(localStorage.getItem('visited_pages')||'[]'); if(!v.includes(page)) v.push(page); localStorage.setItem('visited_pages', JSON.stringify(v)); }catch(e){} }
function getVisitedPages(){ try{ return JSON.parse(localStorage.getItem('visited_pages')||'[]'); }catch(e){return[]} }
