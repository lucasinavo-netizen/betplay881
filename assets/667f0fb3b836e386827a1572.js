let ctagid; let uuid; let layer = containerLayer; let CTGID; layer.push({}); function uuidv4() { return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); } if (!localStorage.getItem('CTUUID')) { uuid = uuidv4(); localStorage.setItem('CTUUID', uuid); } else { uuid = localStorage.getItem('CTUUID'); } layer[0].userid = uuid; layer[0].events = []; ctagid = localStorage.getItem('CTID'); if (window.location.search.split('CTGID=')[1]) { CTGID = window.location.search.split('CTGID=')[1]; localStorage.setItem('CTGID', CTGID); } else { if (localStorage.getItem('CTGID')) { CTGID = localStorage.getItem('CTGID'); } else { CTGID = ''; } } sendEventTracking = async (eventType) => { let position = layer[0].events.indexOf(eventType); let host = window.location.host; let path = window.location.pathname; if (position === -1) { await fetch(`https://ctag.containermedia.net/api/event?type=${eventType}&userid=${uuid}&host=${host}&path=${path}${window.location.search}&account=${ctagid}&impressionId=${CTGID}`, { method: 'GET' }); layer[0].events.push(eventType); } else { if (eventType === 'Page View') { await fetch(`https://ctag.containermedia.net/api/event?type=${eventType}&userid=${uuid}&host=${host}&path=${path}${window.location.search}&account=${ctagid}&impressionId=${CTGID}`, { method: 'GET' }); layer[0].events.push(eventType); } } };
        
        function importables() {};
        function initializer() {
          let pushrt = document.createElement('script');
pushrt.src = 'https://my.rtmark.net/p.js?f=sync&lr=1&partner=a12b4713ec4c33299f87097f3163df552189c0c0dba56f5459299928d299edcd';
pushrt.defer = true;

let pushrtns = document.createElement('noscript');
let imagp = document.createElement('image');
imagp.src = 'https://my.rtmark.net/img.gif?f=sync&lr=1&partner=a12b4713ec4c33299f87097f3163df552189c0c0dba56f5459299928d299edcd';
imagp.width = '1';
imagp.height = '1';if (window.location.href.match('payU')) {
    pixie('event', 'Deposito');
    pixie('event', 'FTD');
}if (window.location.href.match('betgenius')) {
    pixie('event', 'Betgenius');
}let source;
let medium;
let campaign;
let content;

if (window.location.href.match('utm')) {
    if(window.location.search.split('&')[0]) {
        source = window.location.search.split('&')[0].split('=')[1];
    } else {
        source = '';
    }
    if(window.location.search.split('&')[1]) {
        medium = window.location.search.split('&')[1].split('=')[1];
    } else {
        medium = '';
    }
    if(window.location.search.split('&')[2]) {
        campaign = window.location.search.split('&')[2].split('=')[1];
    } else {
        campaign = '';
    }
    if(window.location.search.split('&')[3]) {
        content = window.location.search.split('&')[3].split('=')[1];
    } else {
        content = '';
    }
    sessionStorage.setItem('cm_cnm_source', source);
    sessionStorage.setItem('cm_cnm_medium', medium);
    sessionStorage.setItem('cm_cnm_campaign', campaign);
    sessionStorage.setItem('cm_cnm_content', content);
}
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rjmqzafzad");
if (window.location.href.match('programatica')) {
    window.dataLayer = [];
}(function() {
  const blockedDomain = "load.b.byads.co";
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    if (args[0] && args[0].toString().includes(blockedDomain)) {
      return Promise.reject(new Error("Dominio bloqueado"));
    }
    return originalFetch.apply(this, args);
  };
  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    if (url.includes(blockedDomain)) {
      return;
    }
    return originalXHROpen.apply(this, arguments);
  };

  const OriginalWebSocket = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    if (url.includes(blockedDomain)) {
      throw new Error("WebSocket bloqueado");
    }
    return new OriginalWebSocket(url, protocols);
  };

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      [...mutation.addedNodes].forEach(node => {
        if (node.tagName) {
          const tag = node.tagName.toLowerCase();
          const src = node.src || node.href || (tag === "iframe" && node.getAttribute("src"));

          if (src && src.includes(blockedDomain)) {
    
            node.remove();
          }
        }
      });
    });
  });

  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true
  });

  document.querySelectorAll("script, iframe, link, img").forEach(el => {
    const src = el.src || el.href || el.getAttribute("src");
    if (src && src.includes(blockedDomain)) {
      el.remove();
    }
  });
})();
if(window.location.href.match('utm')) {
    sendEventTracking("viewMediums");
}

window.addEventListener("load", function() {
    if (window.location.href.match('registrarse')) {
        let ph = document.querySelector("#register-form > div > form > div:nth-child(4) > div:nth-child(3) > input");
        if (ph) {
            ph.addEventListener("change", function() {
                if (ph.value.length > 5) {
                    fetch(`https://ctag.containermedia.net/api/s2s/secure/?id=693051181bcd157b312610bd&phone=${ph.value}&userid=${localStorage.getItem('CTUUID')}&site=BP`);
                    fetch(`https://ctag.containermedia.net/api/s2s/secure/?id=69305b8f1bcd157b312b2dcd&phone=${ph.value}&userid=${localStorage.getItem('CTUUID')}`);
                }
            });
        }
    }
});(function () {
  var _gk = '\x61\x74\x74\x72\x5f\x64\x6f\x6e\x65';
  var _configs = [
    //sports
    {
      base: '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x74\x70\x6c\x61\x79\x2e\x63\x6f\x6d\x2e\x63\x6f\x2f\x72\x65\x67\x69\x73\x74\x72\x61\x72\x73\x65',
      rate: 4,
      sk:   '\x61\x74\x74\x72\x5f\x73\x61\x6d\x70\x6c\x65\x5f\x31',
      params: {
        s: '\x63\x6e\x6d\x5f\x73\x70\x6f\x72\x74\x73\x61\x64\x73',
        m: '\x64\x69\x73\x70\x6c\x61\x79',
        c: '\x63\x6e\x6d\x5f\x72\x65\x67\x69\x73\x74\x65\x72'
      }
    },
    //slots
    {
      base: '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x74\x70\x6c\x61\x79\x2e\x63\x6f\x6d\x2e\x63\x6f\x2f\x72\x65\x67\x69\x73\x74\x72\x61\x72\x73\x65',
      rate: 2,
      sk:   '\x61\x74\x74\x72\x5f\x73\x61\x6d\x70\x6c\x65\x5f\x32',
      params: {
        s: '\x63\x6e\x6d\x5f\x73\x6c\x6f\x74\x73\x61\x64\x73',
        m: '\x64\x69\x73\x70\x6c\x61\x79',
        c: '\x63\x6e\x6d\x5f\x72\x65\x67\x69\x73\x74\x65\x72'
      }
    }
  ];
  if (sessionStorage.getItem(_gk)) return;
  function _isMob() {
    return /\x41\x6e\x64\x72\x6f\x69\x64|\x77\x65\x62\x4f\x53|\x69\x50\x68\x6f\x6e\x65|\x69\x50\x61\x64|\x69\x50\x6f\x64|\x42\x6c\x61\x63\x6b\x42\x65\x72\x72\x79|\x49\x45\x4d\x6f\x62\x69\x6c\x65|\x4f\x70\x65\x72\x61\x20\x4d\x69\x6e\x69/i
      .test(navigator.userAgent);
  }
  function _isValidSrc() {
    var _lurl = window.location.href.toLowerCase();
    var _refr = (document.referrer || '').toLowerCase();
    if (_lurl.indexOf('\x75\x74\x6d\x5f') !== -1) return false;
    if (_refr.indexOf('\x66\x61\x63\x65\x62\x6f\x6f\x6b') !== -1 || _refr.indexOf('\x66\x62\x2e\x63\x6f\x6d') !== -1) {
      return false;
    }
    if (_refr === '' ||
        _refr.indexOf('\x67\x6f\x6f\x67\x6c\x65') !== -1 ||
        _refr.indexOf('\x64\x69\x73\x70\x6c\x61\x79') !== -1 ||
        _refr.indexOf('\x70\x75\x73\x68') !== -1) {
      return true;
    }
    return false;
  }
  function _sendAnalytics(base, src, med, camp) {
    try {
      if (typeof gtag === '\x66\x75\x6e\x63\x74\x69\x6f\x6e') {
        gtag('\x65\x76\x65\x6e\x74', '\x70\x61\x67\x65\x5f\x76\x69\x65\x77', {
          '\x70\x61\x67\x65\x5f\x6c\x6f\x63\x61\x74\x69\x6f\x6e':    base,
          '\x63\x61\x6d\x70\x61\x69\x67\x6e\x5f\x73\x6f\x75\x72\x63\x65': src,
          '\x63\x61\x6d\x70\x61\x69\x67\x6e\x5f\x6d\x65\x64\x69\x75\x6d': med,
          '\x63\x61\x6d\x70\x61\x69\x67\x6e\x5f\x6e\x61\x6d\x65':         camp
        });
      } else if (typeof ga === '\x66\x75\x6e\x63\x74\x69\x6f\x6e') {
        ga('\x73\x65\x74', '\x63\x61\x6d\x70\x61\x69\x67\x6e\x53\x6f\x75\x72\x63\x65', src);
        ga('\x73\x65\x74', '\x63\x61\x6d\x70\x61\x69\x67\x6e\x4d\x65\x64\x69\x75\x6d',  med);
        ga('\x73\x65\x74', '\x63\x61\x6d\x70\x61\x69\x67\x6e\x4e\x61\x6d\x65',          camp);
        ga('\x73\x65\x6e\x64', '\x70\x61\x67\x65\x76\x69\x65\x77');
      }
    } catch (e) {}
  }
  function _isActive(cfg) {
    var _s = sessionStorage.getItem(cfg.sk);
    if (_s === null) {
      _s = (Math.random() * 100 <= cfg.rate) ? '\x31' : '\x30';
      sessionStorage.setItem(cfg.sk, _s);
    }
    return _s === '\x31';
  }
  function assignUtm(cfg) {
    if (!_isActive(cfg)) return;
    if (!_isMob() || !_isValidSrc()) return;

    var _loc  = window.location.href;
    var _base = _loc.split('\x3f')[0];

    if (_base === cfg.base) {
      var _url = cfg.base
        + '\x3f\x75\x74\x6d\x5f\x73\x6f\x75\x72\x63\x65\x3d'    + cfg.params.s
        + '\x26\x75\x74\x6d\x5f\x6d\x65\x64\x69\x75\x6d\x3d'    + cfg.params.m
        + '\x26\x75\x74\x6d\x5f\x63\x61\x6d\x70\x61\x69\x67\x6e\x3d' + cfg.params.c;
      _sendAnalytics(cfg.base, cfg.params.s, cfg.params.m, cfg.params.c);
      sessionStorage.setItem(_gk, '\x31');
      window.location.replace(_url);
    }
  }
  for (var i = 0; i < _configs.length; i++) {
    assignUtm(_configs[i]);
    if (sessionStorage.getItem(_gk)) break;
  }
  var _ev = [
    '\x65\x76\x65\x6e\x74\x6f\x5f\x69\x6e\x73\x63\x72\x69\x70\x63\x69\x6f\x6e\x5f\x65\x78\x69\x74\x6f\x73\x61',
    '\x70\x75\x72\x63\x68\x61\x73\x65'
  ];
  var _activeParams = null;
  for (var j = 0; j < _configs.length; j++) {
    var _s = sessionStorage.getItem(_configs[j].sk);
    if (_s === '\x31') { _activeParams = _configs[j].params; break; }
  }
  if (!_activeParams) _activeParams = _configs[0].params;
  var _utmParams = {
    '\x63\x61\x6d\x70\x61\x69\x67\x6e\x5f\x73\x6f\x75\x72\x63\x65': _activeParams.s,
    '\x63\x61\x6d\x70\x61\x69\x67\x6e\x5f\x6d\x65\x64\x69\x75\x6d': _activeParams.m,
    '\x63\x61\x6d\x70\x61\x69\x67\x6e\x5f\x6e\x61\x6d\x65':         _activeParams.c
  };
  function _hookConversionEvents() {
    if (typeof gtag === '\x66\x75\x6e\x63\x74\x69\x6f\x6e') {
      var _origGtag = gtag;
      window['\x67\x74\x61\x67'] = function () {
        var args = Array.prototype.slice.call(arguments);
        if (args[0] === '\x65\x76\x65\x6e\x74' && _ev.indexOf(args[1]) !== -1) {
          args[2] = args[2] || {};
          for (var k in _utmParams) {
            if (_utmParams.hasOwnProperty(k)) {
              args[2][k] = _utmParams[k];
            }
          }
        }
        return _origGtag.apply(this, args);
      };
    }
    if (typeof ga === '\x66\x75\x6e\x63\x74\x69\x6f\x6e') {
      var _origGa = ga;
      window['\x67\x61'] = function () {
        var args = Array.prototype.slice.call(arguments);
        if (args[0] === '\x73\x65\x6e\x64' && args[1] === '\x65\x76\x65\x6e\x74' && _ev.indexOf(args[3]) !== -1) {
          try {
            _origGa('\x73\x65\x74', '\x63\x61\x6d\x70\x61\x69\x67\x6e\x53\x6f\x75\x72\x63\x65', _activeParams.s);
            _origGa('\x73\x65\x74', '\x63\x61\x6d\x70\x61\x69\x67\x6e\x4d\x65\x64\x69\x75\x6d',  _activeParams.m);
            _origGa('\x73\x65\x74', '\x63\x61\x6d\x70\x61\x69\x67\x6e\x4e\x61\x6d\x65',          _activeParams.c);
          } catch (e) {}
        }
        return _origGa.apply(this, args);
      };
    }
  }
  _hookConversionEvents();
})();
          
        };
        function clickers() {window.addEventListener("click", function(event) {
          if (event.target.id === 'btnRegisterReal') {
    sendEventTracking("Leads");
}if (window.location.href.match('programatica')) {
    window.dataLayer = [];
}
          
        });}
        importables();
        initializer();
        clickers();
        sendEventTracking('Page View');