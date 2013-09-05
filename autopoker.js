var pokes = [];

function poke() {
    // @TODO use snapshot type (XPathResult.ORDERED_NODE_SNAPSHOT_TYPE)
    var els = document.evaluate('//li[contains(@id,"poke_")]', document), // select items
        el, button

    try {
        while (el = els.iterateNext()) {
            // select the button inside the poke element
            button = document.evaluate('//a[contains(@ajaxify, "pokeback")]', el)

            if (button) {
                // poke
                button.click()

                // @TODO add a poke to user
                // @TODO notify
            }
        }
    } catch (e) {
        // @TODO handle errors
    }
}
