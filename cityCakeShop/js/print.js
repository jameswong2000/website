
window.onload = loaddata;


var str=location.search.substr(1); //for actual query string testing
  function getValue(s, n) {
    var t=str.split("&");
    for (var i=0; i<t.length; i++) {
      if (t[i].split("=")[0] == n) {
        return t[i].split("=")[1];
      }
    }
    return null;
  }

 // alert(getValue(str, "telephone"));

  function loaddata() {
  document.querySelector("#telephone").innerHTML = "Order(Tel.) No. - " + getValue(str, "telephone");
  document.querySelector("#date").innerHTML = "Pick Up Date - " + getValue(str, "date");
  method=document.querySelectorAll("input[type='radio']");
        switch (getValue(str, "method")) {
          case "Delivery": method[0].checked=true; break;
          case "Pick+Up": method[1].checked=true; break;  
        }
  document.write
  }

 