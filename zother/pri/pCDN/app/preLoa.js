document.body.style.cursor = 'wait';

if ('__proto__' in {}) {
    //jq or z
    document.write('<script src="http://scdn.primus.netdna-cdn.com/latest/zepto.min.js"><\/script>');
    console.log('z');
} else {
    document.write('<script src="http://scdn.primus.netdna-cdn.com/latest/more/jquery-2.0.3.min.js"><\/script>');
    console.log('jq');
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DL');
    setTimeout(function () {
        head.js('http://scdn.primus.netdna-cdn.com/latest/TweenLite.min.js', 'http://scdn.primus.netdna-cdn.com/latest/signals.min.js', 'http://scdn.primus.netdna-cdn.com/latest/fastclick.js', 'http://scdn.primus.netdna-cdn.com/latest/blueGrass.js', 'http://scdn.primus.netdna-cdn.com/latest/CSSPlugin.min.js', 'http://primusAPI.com/pCDN/app/Pre.js', 'http://primusAPI.com/pCDN/app/App.js');
    }, 10);
});
//# sourceMappingURL=preLoa.js.map
