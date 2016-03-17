(function (root) {

  root.document.addEventListener("DOMContentLoaded", function (event) {
    root.funcArray.forEach(function (func) {
      func();
    });
  });

  root.$l = function (arg) {

    if (typeof arg === "function") {
      if (root.document.readyState === "complete") {
        arg();
        return;
      }
      root.funcArray = root.funcArray || [];
      root.funcArray.push(arg);
      return;
    }

    if (arg instanceof HTMLElement) {
      return new DOMNodeCollection([arg]);
    }
    var selected = this.document.querySelectorAll(arg);
    selected = [].slice.apply(selected);
    return new DOMNodeCollection(selected);
  };

  root.$l.extend = function () {
    var args = [].slice.call(arguments);
    var retObj = args[0];
    for (var i = 1; i < args.length; i++) {
      var keys = Object.keys(args[i]);
      for (var k = 0; k < keys.length; k++) {
        retObj[keys[k]] = args[i][keys[k]];
      }
    }

    return retObj;
  };

  root.$l.ajax = function (options) {
    var defaultt = {
      url: "www.google.com",
      success: function (str) {
        console.log(str);
      },
      error: function () {
        console.log("It didn't work :(");
      },
      method: "get",
      data: "",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    var request = root.$l.extend(defaultt, options);
    root.$l.loadXMLDoc(request);
  };

  root.$l.loadXMLDoc = function (options) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if(xmlhttp.status == 200){
            options.success(xmlhttp.responseText);
        }
        else if(xmlhttp.status == 400) {
          options.error();
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };


    xmlhttp.open(options.method, options.url, true);
    xmlhttp.send();
  };

  var DOMNodeCollection = function (HTMLElements) {
    this.HTMLElements = HTMLElements;
  };

  DOMNodeCollection.prototype.html = function (string) {
    if (string === undefined) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach(function (el) {
        el.innerHTML = string;
      });
    }
  };

  DOMNodeCollection.prototype.empty = function () {
    this.html("");
  };

  DOMNodeCollection.prototype.append = function(child) {

    if (child instanceof HTMLElement) {
      child = [child];
    }

    if (typeof child === "string") {
      this.HTMLElements.forEach ( function (parent) {
        parent.innerHTML += child;
      });
      return;
    }

    if (child instanceof DOMNodeCollection) {
      child = child.HTMLElements;
    }

    this.HTMLElements.forEach( function (parent) {
      child.forEach(function (eachChild) {
        parent.appendChild(eachChild);
      });
    });

  };

  DOMNodeCollection.prototype.attr = function (name, value) {
    if (value === undefined) {
      return this.HTMLElements[0].getAttribute(name);
    } else {
      this.HTMLElements.forEach( function (el) {
        el.setAttribute(name, value);
      });
      return this.HTMLElements;
    }
  };

  DOMNodeCollection.prototype.addClass = function (value) {
    this.HTMLElements.forEach( function (el) {
      var old = el.className;
      if (old) {
        if (!_stringIncludes(old, value)) {
          var newValue = old + " " + value;
          el.className = newValue;
        }
      } else {
        el.className = value;
      }
    });

    return this.HTMLElements;
  };

  DOMNodeCollection.prototype.removeClass = function (value) {
    this.HTMLElements.forEach( function (el) {
      var old = el.className;
      if (old) {
        var arrOld = old.split(' ');
        var arrNew = arrOld.map( function (el) {
          if (el === value) {
            return "";
          } else {
            return el;
          }
        });
        var newValue = arrNew.join(' ');
        el.className = newValue;
      }

    });
    return this.HTMLElements;
  };

  DOMNodeCollection.prototype.children = function () {
    var childDoms = new DOMNodeCollection([]);

    for (var i = 0; i < this.HTMLElements.length; i++) {
      var returnObject = this.HTMLElements[i].children;

      returnObject = [].slice.call(returnObject);
      childDoms.HTMLElements = childDoms.HTMLElements.concat(returnObject);
    }

    return childDoms;
  };

  DOMNodeCollection.prototype.parent = function () {
    var parentDoms = new DOMNodeCollection([]);

    for (var i = 0; i < this.HTMLElements.length; i++) {
      var returnObject = this.HTMLElements[i].parentNode;
      if(!parentDoms.HTMLElements.includes(returnObject)){
        parentDoms.HTMLElements.push(returnObject);
      }
    }

    return parentDoms;
  };

  DOMNodeCollection.prototype.find = function (value) {
    var retDoms = new DOMNodeCollection([]);

    for (var i = 0; i < this.HTMLElements.length; i++) {
      var retObj = this.HTMLElements[i].querySelectorAll(value);
      retObj = [].slice.call(retObj);
      retDoms.HTMLElements = retDoms.HTMLElements.concat(retObj);
    }

    return retDoms;
  };

  DOMNodeCollection.prototype.remove = function () {
    this.HTMLElements.forEach(function (el) {
      el.remove();
    });
    this.HTMLElements = [];
  };

  DOMNodeCollection.prototype.on = function (type, callback) {
    this.HTMLElements.forEach(function (el) {
      el.addEventListener(type, callback);
    });
  };

  DOMNodeCollection.prototype.off = function (type, callback) {
    this.HTMLElements.forEach(function (el) {
      el.removeEventListener(type, callback);
    });
  };

  var _stringIncludes = function (string1, string2) {
    var arr = string1.split(' ');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === string2) {
        return true;
      }
    }

    return false;
  };





})(this);


$l( function() {
  $lis = $l('li');
  $lis.html("it worked!!??!");
});

$l( function() {
  $li = $l('li');
  $li.append("it worked again");
});
