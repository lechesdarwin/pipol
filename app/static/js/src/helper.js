var verbHTTP;
(function (verbHTTP) {
    verbHTTP["GET"] = "GET";
    verbHTTP["POST"] = "POST";
})(verbHTTP || (verbHTTP = {}));
function debounce(func) {
    var wait = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
    var timeout = void 0;
    return function () {
        var _this = this;
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(_this, args);
        }, wait);
    };
}
function get(verb, url, cb, data) {
    var xhttp = new XMLHttpRequest();
    var q;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(this.responseText);
        }
    };
    if (verb === verbHTTP.GET) {
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    else if (verb === verbHTTP.POST) {
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
}
//  const debounced = debounce(sayHi, 500);
