function poke() {
  var els = $x('//a[contains(@ajaxify, "pokeback")]')
  for (i in els) els[i].click()
}

setInterval(poke, 10000);