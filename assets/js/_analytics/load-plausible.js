function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {       
          return c.substring(name.length, c.length);
        }
    }
    return "";
  }

if (getCookie('exclude_plausible') != 'true') {
  document.write('<script defer data-domain="chasseurimmobilieravignon.com" src="https://plausible.io/js/script.outbound-links.js"></script>');
  }