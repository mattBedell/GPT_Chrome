console.log("hellow world");
window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
googletag.cmd.push(function () {
    let slot = googletag.pubads().getSlots()[0];
    let p = {
        path: slot.getAdUnitPath()
    };
    let cEvent = new CustomEvent('custClick', {detail: p.path});
    dispatchEvent(cEvent)
});
