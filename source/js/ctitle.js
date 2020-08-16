var x = document.title;

function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}

window.onblur = function() {
    document.title = "震惊！yz-hs竟...";
};

window.onfocus = function() {
    document.title = "哈哈你回来了";
    sleep(250);
	document.title = x;
};