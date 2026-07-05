// Переключатель RU/EN, общий для всех страниц. По умолчанию — язык браузера.
(function(){
  var buttons = document.querySelectorAll('.lang button');
  function set(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-content]').forEach(function(el){
      el.hidden = (el.getAttribute('data-content') !== lang);
    });
    buttons.forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-lang')===lang); });
    try{ localStorage.setItem('spy.lang', lang); }catch(e){}
  }
  buttons.forEach(function(b){ b.addEventListener('click', function(){ set(b.getAttribute('data-lang')); }); });
  var saved; try{ saved = localStorage.getItem('spy.lang'); }catch(e){}
  var initial = saved || ((navigator.language||'en').toLowerCase().indexOf('ru')===0 ? 'ru' : 'en');
  set(initial);
})();
