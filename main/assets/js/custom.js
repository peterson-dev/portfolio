/* 
  menu link selector, home page, highlight class 
*/
function navHighlight(elem, home, active) {
    var url = location.href.split('/'),
        loc = url[url.length -1],
        link = document.querySelectorAll(elem);
    for (var i = 0; i < link.length; i++) {
        var path = link[i].href.split('/'),
            page = path[path.length -1];
        if (page == loc || page == home && loc == '') {
            link[i].parentNode.className += ' ' + active;
            document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));
            }
        }
    }
navHighlight('.js-nav-hilight a', 'index.html', 'current'); 