(function (window, document, undefined) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://www.stackmapintegration.com/maynooth-summon/StackMap.min.js';
  document.body.appendChild(script);
  var smlink1 = document.createElement('link');
  smlink1.rel = 'stylesheet';
  smlink1.href = 'https://www.stackmapintegration.com/maynooth-summon/StackMap.min.css';
  document.body.appendChild(smlink1);
  var smlink2 = document.createElement('link');
  smlink2.rel = 'stylesheet';
  smlink2.type = 'text/css';
  smlink2.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
  document.body.appendChild(smlink2);
  // GA inject
  var GAScript = document.createElement('script');
  GAScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-OWC8CMN1X9';
  document.head.appendChild(GAScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-OWC8CMN1X9');
  window.StackMapPopupCallback = function () {
       gtag('event', 'stackmap_clicks'); }
})
