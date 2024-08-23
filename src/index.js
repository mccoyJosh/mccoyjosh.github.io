
function loadScript(url)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

var link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);



loadScript('components/footer.js')
loadScript('components/header.js')