(function(){
var s=document.createElement('div');s.style.cssText='position:absolute;width:0;height:0;overflow:hidden';
s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+'<symbol id="wl" viewBox="25 -850 2818 875"><g fill="currentColor"><path transform="translate(0.0 0.0) scale(1 -1)" d="M815 0Q823 131 823 271Q823 316 800.5 341.5Q778 367 741 367Q707 367 682.5 337.0Q658 307 658 250V251Q658 74 663 0H438Q444 147 444 271Q444 315 422.5 341.0Q401 367 368 367Q333 367 309.5 337.5Q286 308 282 257Q280 181 280 149Q280 81 284 0H45Q53 144 53 272Q53 400 45 546Q111 543 146 543Q183 543 247 546L277 398Q300 479 350.0 517.5Q400 556 465 556Q543 556 592.5 513.0Q642 470 654 401Q677 472 731.0 514.0Q785 556 854 556Q944 556 995.0 495.5Q1046 435 1046 330V164Q1046 51 1048 0Z"/><path transform="translate(1068.0 0.0) scale(1 -1)" d="M50 717Q50 766 80.5 798.0Q111 830 174 830Q234 830 266.0 797.5Q298 765 298 717Q298 667 267.0 636.0Q236 605 174 605Q111 605 80.5 636.0Q50 667 50 717ZM58 0Q65 161 65 266Q65 391 57 546H297Q289 397 289 266Q289 156 296 0Z"/><path transform="translate(1386.0 0.0) scale(1 -1)" d="M746 547 498 321Q625 141 735 0H470L419 82Q369 165 353 190L270 114V0H40Q48 190 48 385Q48 581 40 778H270V354Q367 453 453 547Z"/><path transform="translate(2102.0 0.0) scale(1 -1)" d="M681 166Q681 132 689.0 118.0Q697 104 721 98L717 4Q685 -1 661.5 -3.0Q638 -5 599 -5Q513 -5 485.0 33.5Q457 72 457 132V157Q428 75 372.5 35.0Q317 -5 231 -5Q131 -5 80.5 35.0Q30 75 30 154Q30 219 73.0 256.0Q116 293 206 307Q130 361 54 401Q114 477 191.0 516.5Q268 556 378 556Q532 556 606.5 489.5Q681 423 681 285ZM239 312Q299 319 389 319Q426 319 441.0 328.0Q456 337 456 351Q456 363 441.0 371.5Q426 380 399 380Q348 380 309.0 363.0Q270 346 239 312ZM457 236V262Q433 250 404.0 243.5Q375 237 334 231L298 225Q242 214 242 187Q242 158 294 158Q350 158 395.0 179.5Q440 201 457 236Z"/></g></symbol>'+'</svg>';
document.body.prepend(s);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
document.querySelectorAll('[data-tabs]').forEach(function(g){
  var tabs=g.querySelectorAll('[data-tab]'),panes=g.querySelectorAll('[data-pane]');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){x.classList.toggle('on',x===t)});
    panes.forEach(function(p){p.hidden=p.dataset.pane!==t.dataset.tab});
  })});
});
document.querySelectorAll('[data-scroll]').forEach(function(b){b.addEventListener('click',function(){
  var r=document.querySelector(b.dataset.scroll);r.scrollBy({left:(b.dataset.dir==='l'?-1:1)*r.clientWidth*.8,behavior:'smooth'});
})});
})();