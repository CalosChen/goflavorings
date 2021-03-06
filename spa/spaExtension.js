(function (o) {

    console.log('elroot', o)
    const root = o.rootel
    o.templateStore = {}
    const templateStore = o.templateStore
    o.router = o.router || { '/routea': 'templatea.html' }
    const router = o.router
    for (const key in router) {
        var proms = []
        if (Object.hasOwnProperty.call(router, key)) {
            var p = new Promise(resolve => {
                const htmlName = router[key];
                getHtmlOrJson('./templates/' + htmlName, function (text) {
                    templateStore[key] = encodeURI(text);
                    resolve()
                })

            })
            proms.push(p)
        }
    }

    var stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };
    o.navigate = function (route) {
        window.history.pushState(null, null, route)
        if (root) {
            root.innerHTML = ''
            var hm = stringToHTML(decodeURI(templateStore[route]))
            var script = hm.getElementsByTagName('script')[0].text;
            root.appendChild(hm)
            eval(script)
            o.run.apply(o)
        }
    }
    window.calo = o || {
        model: {}
    }

})(window.calo)