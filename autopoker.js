function poke() {
  el = document.getElementsByClassName('uiIconText');
  for (i in el) {
    if (el[i].getAttribute('ajaxify').match(/pokeback/)) {
      el[i].click();
      console.log('poked!');
    }
  }
}

setInterval(poke, 10000);