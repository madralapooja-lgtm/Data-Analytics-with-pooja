document.addEventListener("DOMContentLoaded",function(){
  const menu=document.querySelector(".menu-toggle,.nav-toggle,[data-menu-toggle]");
  const nav=document.querySelector("nav,.nav-links,.navigation");
  if(menu&&nav) menu.addEventListener("click",function(){nav.classList.toggle("open");});

  document.querySelectorAll("input[type=search],.search-input,[data-search]").forEach(function(input){
    input.addEventListener("input",function(){
      const q=input.value.toLowerCase().trim();
      (input.closest("main,section,.container")||document)
        .querySelectorAll(".topic-card,.practice-card,.note-card,.project-card,.question-card,[data-search-item]")
        .forEach(function(x){
          x.style.display=!q||x.textContent.toLowerCase().includes(q)?"":"none";
        });
    });
  });

  document.querySelectorAll("[data-show-answer],.show-answer,.show-explanation").forEach(function(btn){
    btn.addEventListener("click",function(){
      const card=btn.closest(".practice-card,.question-card,.quiz-card,.card");
      if(!card)return;
      const answer=card.querySelector(".explanation,.answer,[data-explanation]");
      if(!answer)return;
      const hidden=getComputedStyle(answer).display==="none"||answer.classList.contains("hidden");
      answer.classList.toggle("hidden",!hidden);
      answer.style.display=hidden?"":"none";
      btn.textContent=hidden?"Hide Explanation":"Show Explanation";
    });
  });
});