function poke() {
  var els = $x('//a[contains(@ajaxify, "pokeback")]');
  for (i in els) {
    var el = els[i]; el.click();
  }
}

setInterval(poke, 10000);