/* Roteia os CTAs do app por dispositivo:
   Android  -> Google Play (href original)
   iPhone   -> App Store quando existir; ate la, o app web
   Desktop  -> app web (app.bolgest.com) */
(function(){
  var APP_WEB='https://app.bolgest.com/';
  var APP_STORE=null; /* trocar pela URL da App Store quando o app iOS for publicado */
  document.addEventListener('click',function(e){
    var a=e.target.closest('a'); if(!a) return;
    if(a.href.indexOf('play.google.com/store/apps/details')===-1) return;
    var ua=navigator.userAgent;
    if(/Android/i.test(ua)) return;                 /* Android segue pra Play */
    e.preventDefault();
    var ios=/iPhone|iPad|iPod/i.test(ua);
    window.location.href=(ios&&APP_STORE)?APP_STORE:APP_WEB;
  },true);
})();
