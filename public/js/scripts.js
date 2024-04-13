var StarRating=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}var s={classNames:{active:"gl-active",base:"gl-star-rating",selected:"gl-selected"},clearable:!0,maxStars:10,prebuilt:!1,stars:null,tooltip:"Select a Rating"},n=function(e,t,i){e.classList[t?"add":"remove"](i)},a=function(e){var t=document.createElement("span");for(var i in e=e||{})t.setAttribute(i,e[i]);return t},l=function(e,t,i){var s=a(i);return e.parentNode.insertBefore(s,t?e.nextSibling:e),s},r=function e(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];var n={};return i.forEach((function(t){Object.keys(t||{}).forEach((function(s){if(void 0!==i[0][s]){var a=t[s];"Object"!==o(a)||"Object"!==o(n[s])?n[s]=a:n[s]=e(n[s],a)}}))})),n},o=function(e){return{}.toString.call(e).slice(8,-1)},u=function(){function t(i,s){var n,a,l;e(this,t),this.direction=window.getComputedStyle(i,null).getPropertyValue("direction"),this.el=i,this.events={change:this.onChange.bind(this),keydown:this.onKeyDown.bind(this),mousedown:this.onPointerDown.bind(this),mouseleave:this.onPointerLeave.bind(this),mousemove:this.onPointerMove.bind(this),reset:this.onReset.bind(this),touchend:this.onPointerDown.bind(this),touchmove:this.onPointerMove.bind(this)},this.indexActive=null,this.indexSelected=null,this.props=s,this.tick=null,this.ticking=!1,this.values=function(e){var t=[];return[].forEach.call(e.options,(function(e){var i=parseInt(e.value,10)||0;i>0&&t.push({index:e.index,text:e.text,value:i})})),t.sort((function(e,t){return e.value-t.value}))}(i),this.widgetEl=null,this.el.widget&&this.el.widget.destroy(),n=this.values.length,a=1,l=this.props.maxStars,/^\d+$/.test(n)&&a<=n&&n<=l?this.build():this.destroy()}return i(t,[{key:"build",value:function(){this.destroy(),this.buildWidget(),this.selectValue(this.indexSelected=this.selected(),!1),this.handleEvents("add"),this.el.widget=this}},{key:"buildWidget",value:function(){var e,t,i=this;this.props.prebuilt?(e=this.el.parentNode,t=e.querySelector("."+this.props.classNames.base+"--stars")):((e=l(this.el,!1,{class:this.props.classNames.base})).appendChild(this.el),t=l(this.el,!0,{class:this.props.classNames.base+"--stars"}),this.values.forEach((function(e,s){var n=a({"data-index":s,"data-value":e.value});"function"==typeof i.props.stars&&i.props.stars.call(i,n,e,s),[].forEach.call(n.children,(function(e){return e.style.pointerEvents="none"})),t.innerHTML+=n.outerHTML}))),e.dataset.starRating="",e.classList.add(this.props.classNames.base+"--"+this.direction),this.props.tooltip&&t.setAttribute("role","tooltip"),this.widgetEl=t}},{key:"changeIndexTo",value:function(e,t){var i=this;if(this.indexActive!==e||t){if([].forEach.call(this.widgetEl.children,(function(t,s){n(t,s<=e,i.props.classNames.active),n(t,s===i.indexSelected,i.props.classNames.selected)})),this.widgetEl.setAttribute("data-rating",e+1),"function"==typeof this.props.stars||this.props.prebuilt||(this.widgetEl.classList.remove("s"+10*(this.indexActive+1)),this.widgetEl.classList.add("s"+10*(e+1))),this.props.tooltip){var s,a=e<0?this.props.tooltip:null===(s=this.values[e])||void 0===s?void 0:s.text;this.widgetEl.setAttribute("aria-label",a)}this.indexActive=e}this.ticking=!1}},{key:"destroy",value:function(){this.indexActive=null,this.indexSelected=this.selected();var e=this.el.parentNode;e.classList.contains(this.props.classNames.base)&&(this.props.prebuilt?(this.widgetEl=e.querySelector("."+this.props.classNames.base+"--stars"),e.classList.remove(this.props.classNames.base+"--"+this.direction),delete e.dataset.starRating):e.parentNode.replaceChild(this.el,e),this.handleEvents("remove")),delete this.el.widget}},{key:"eventListener",value:function(e,t,i,s){var n=this;i.forEach((function(i){return e[t+"EventListener"](i,n.events[i],s||!1)}))}},{key:"handleEvents",value:function(e){var t=this.el.closest("form");t&&"FORM"===t.tagName&&this.eventListener(t,e,["reset"]),this.eventListener(this.el,e,["change"]),"add"===e&&this.el.disabled||(this.eventListener(this.el,e,["keydown"]),this.eventListener(this.widgetEl,e,["mousedown","mouseleave","mousemove","touchend","touchmove"],!1))}},{key:"indexFromEvent",value:function(e){var t,i,s=(null===(t=e.touches)||void 0===t?void 0:t[0])||(null===(i=e.changedTouches)||void 0===i?void 0:i[0])||e,n=document.elementFromPoint(s.clientX,s.clientY);return n.parentNode===this.widgetEl?[].slice.call(n.parentNode.children).indexOf(n):this.indexActive}},{key:"onChange",value:function(){this.changeIndexTo(this.selected(),!0)}},{key:"onKeyDown",value:function(e){var t=e.key.slice(5);if(~["Left","Right"].indexOf(t)){e.preventDefault();var i="Left"===t?-1:1;"rtl"===this.direction&&(i*=-1);var s=this.values.length-1,n=Math.min(Math.max(this.selected()+i,-1),s);this.selectValue(n,!0)}}},{key:"onPointerDown",value:function(e){e.preventDefault();var t=this.indexFromEvent(e);this.props.clearable&&t===this.indexSelected&&(t=-1),this.selectValue(t,!0)}},{key:"onPointerLeave",value:function(e){var t=this;e.preventDefault(),cancelAnimationFrame(this.tick),requestAnimationFrame((function(){return t.changeIndexTo(t.indexSelected)}))}},{key:"onPointerMove",value:function(e){var t=this;e.preventDefault(),this.ticking||(this.tick=requestAnimationFrame((function(){return t.changeIndexTo(t.indexFromEvent(e))})),this.ticking=!0)}},{key:"onReset",value:function(){var e,t=this.valueIndex(null===(e=this.el.querySelector("[selected]"))||void 0===e?void 0:e.value);this.selectValue(t||-1,!1)}},{key:"selected",value:function(){return this.valueIndex(this.el.value)}},{key:"selectValue",value:function(e,t){var i;this.el.value=(null===(i=this.values[e])||void 0===i?void 0:i.value)||"",this.indexSelected=this.selected(),!1===t?this.changeIndexTo(this.selected(),!0):this.el.dispatchEvent(new Event("change"))}},{key:"valueIndex",value:function(e){return this.values.findIndex((function(t){return t.value===+e}))}}]),t}();return function(){function t(i,s){e(this,t),this.destroy=this.destroy.bind(this),this.props=s,this.rebuild=this.rebuild.bind(this),this.selector=i,this.widgets=[],this.build()}return i(t,[{key:"build",value:function(){var e=this;this.queryElements(this.selector).forEach((function(t){var i=r(s,e.props,JSON.parse(t.getAttribute("data-options")));"SELECT"!==t.tagName||t.widget||(!i.prebuilt&&t.parentNode.classList.contains(i.classNames.base)&&e.unwrap(t),e.widgets.push(new u(t,i)))}))}},{key:"destroy",value:function(){this.widgets.forEach((function(e){return e.destroy()})),this.widgets=[]}},{key:"queryElements",value:function(e){return"HTMLSelectElement"===o(e)?[e]:"NodeList"===o(e)?[].slice.call(e):"String"===o(e)?[].slice.call(document.querySelectorAll(e)):[]}},{key:"rebuild",value:function(){this.destroy(),this.build()}},{key:"unwrap",value:function(e){var t=e.parentNode,i=t.parentNode;i.insertBefore(e,t),i.removeChild(t)}}]),t}()}();

if(!document.getElementById('styles_scripts')) {
  var link = document.createElement('link');
  link.id = 'styles_scripts';
  link.rel = 'stylesheet';
  link.href = 'https://otclick.io/css/style.css?ver01';
  document.head.appendChild(link);
}

fetch("https://otclick.io/api/v1/checkWidget").then(response => response.json()).then(data => {console.log(data)})

var button = document.createElement('button');
button.classList.add('like-btn');
button.innerHTML = '<img src="https://otclick.io/images/like.svg" alt="">';
document.body.appendChild(button);

var block = document.createElement('div');
block.classList.add('like');
block.innerHTML = `<div class="like-box" id="like3">
  <div class="like-top">
      <button class="like-close like-exit" id="like-exit">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 9.414L13.657 15.071C13.8456 15.2532 14.0982 15.3539 14.3604 15.3517C14.6226 15.3494 14.8734 15.2442 15.0588 15.0588C15.2442 14.8734 15.3494 14.6226 15.3517 14.3604C15.354 14.0982 15.2532 13.8456 15.071 13.657L9.41401 8L15.071 2.343C15.2532 2.15439 15.354 1.90179 15.3517 1.6396C15.3494 1.3774 15.2442 1.12659 15.0588 0.941178C14.8734 0.75577 14.6226 0.650601 14.3604 0.648323C14.0982 0.646044 13.8456 0.746839 13.657 0.928997L8.00001 6.586L2.34301 0.928997C2.15356 0.751342 1.90242 0.654362 1.64274 0.658579C1.38305 0.662796 1.1352 0.767878 0.951616 0.951591C0.768033 1.1353 0.663126 1.38323 0.659093 1.64292C0.65506 1.9026 0.752217 2.15367 0.930006 2.343L6.58601 8L0.929006 13.657C0.833496 13.7492 0.757314 13.8596 0.704905 13.9816C0.652496 14.1036 0.62491 14.2348 0.623756 14.3676C0.622602 14.5004 0.647904 14.6321 0.698185 14.755C0.748465 14.8778 0.822719 14.9895 0.916611 15.0834C1.0105 15.1773 1.12216 15.2515 1.24505 15.3018C1.36795 15.3521 1.49963 15.3774 1.63241 15.3762C1.76519 15.3751 1.89641 15.3475 2.01841 15.2951C2.14041 15.2427 2.25076 15.1665 2.34301 15.071L8.00001 9.414Z" fill="#152E4D"/>
        </svg>
      </button>
      <h4 class="like-title">Оцените эту страницу</h4>
      <p class="like-des">Насколько легко вам было найти нужную информацию? Оцените по 5-балльной шкале.</p>
      <div class="like-rating">
          <select class="star-rating">
              <option value="">Оцените</option>
              <option value="5">отлично</option>
              <option value="4">хорошо</option>
              <option value="3">нормально</option>
              <option value="2">плохо</option>
              <option value="1">очень плохо</option>
          </select>
      </div>
  </div>
  <div class="like-bottom" id="like2">
      <h5 class="like-subtitle">Что мы можем улучшить?</h5>
      <textarea placeholder="Мы бы хотели узнать, что вам особенно понравилось на этой странице" class="like-textarea" id="like-textarea"></textarea>
      <div class="like-button">
          <button id="like-send">Отправить</button>
      </div>
  </div>
  </div>
  <div class="like-success" id="like4">
  <div class="like-success-img">
      <img src="https://otclick.io/images/success.webp" alt="">
  </div>
  <h5 class="like-success-title">Спасибо за вашу оценку!</h5>
  <div class="like-success-des">Мы учтем ваше мнение и улучшим работу сайта</div>
  <button class="like-success-btn like-exit" id="like-close">Закрыть</button>
</div>`;
document.body.appendChild(block);

button.onclick = function() {
  this.hidden = true;
  block.hidden = false;
  block.classList.add('active');
}

var starrating = new StarRating('.star-rating', {
  tooltip: false
});

var stars = document.querySelector(".star-rating");
function onChange() {
  var value = stars.value;
  if(value == 1 || value == 2){
    document.getElementById("like-textarea").placeholder = 'Расскажите, что вам не понравилось на странице';
  }
  if(value == 3){
    document.getElementById("like-textarea").placeholder = 'Поделитесь своим мнением о странице, это для нас важно';
  }
  if(value == 4){
    document.getElementById("like-textarea").placeholder = 'Расскажите, что вам понравилось на странице';
  }
  if(value == 5){
    document.getElementById("like-textarea").placeholder = 'Расскажите, что вам особенно понравилось на странице';
  }
  if(value){
    let likeBottom = document.getElementById('like2');
    likeBottom.hidden = false;
    likeBottom.classList.add('active');
    document.getElementById("like-textarea").focus();
  }
}
stars.onchange = onChange;

var sendButton = document.getElementById('like-send');
sendButton.onclick = function () {
  let rate = document.querySelector(".star-rating");
  let textarea = document.getElementById("like-textarea");
  var data = {
    "rate": Number(rate.value),
    "text": textarea.value
  };
  fetch("https://otclick.io/api/v1/review", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(data)
  }).then(res => {
    document.getElementById("like3").hidden = true;
    let likeSuccess = document.getElementById('like4');
    likeSuccess.hidden = false;
    likeSuccess.classList.add('active');
  });
}

var likeExit = document.getElementById('like-exit');
likeExit.onclick = function() {
  block.hidden = true;
  block.classList.remove('active');
  button.hidden = false;
}

var likeClose = document.getElementById('like-close');
likeClose.onclick = function() {
  block.hidden = true;
  block.classList.remove('active');
  button.hidden = false;
}

setTimeout(() => {
  button.hidden = true;
  block.hidden = false;
  block.classList.add('active');
}, 10000);