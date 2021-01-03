menu = initMenu();
var userfeedback, eachfeedback;
var storage=window.localStorage;

window.onload = cakemenu;

cake = [];

var total = 0;

function cakemenu() {

for(i=0;i<menu.length;i++) {
	cake[i] = menu[i];
  current_cake = "cake"+[i];
  current_cake_src = "../image/"+cake[i].imagefile;
  document.getElementById("cake"+[i]).src = "../image/"+cake[i].imagefile;
  document.getElementById("cake"+[i]).title = cake[i].description;
  document.getElementById("cake"+[i]).alt = cake[i].description;
  document.write
  loaddata();
  ordertable();
}

}

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
  document.querySelector("#telephone").value = getValue(str, "telephone");
  document.querySelector("#date").value = getValue(str, "date");
  method=document.querySelectorAll("input[type='radio']");
        switch (getValue(str, "method")) {
          case "Delivery": method[0].checked=true; break;
          case "Pick+Up": method[1].checked=true; break;  
        }
  document.write

  } 


  function ordertable() {
    var tel = document.querySelector("#telephone").value;
    document.querySelector("#caption").innerHTML = "Order No." + tel;
    document.write
    img=document.querySelectorAll("img");

    for(j=0;j<img.length;j++) {
    img[j].onclick = alertContent;

  }
  }
  function alertContent() {
   do {
   var quantity = prompt("Quantity for order?");
 } while (isNaN(quantity) || Number(quantity) < 0);
   
    if(quantity != "") {
    // Find a <table> element with id="myTable":
        var table = document.getElementById("ordertable");

        // Create an empty <tr> element and add it to the last 2nd position of the table:
        var row = table.insertRow(1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = this.title;
        cell2.innerHTML = quantity;
        
        
        total = total + Number(cell2.innerHTML);
        document.getElementById("total").innerHTML = total;
        document.write

        eachfeedback="cakename="+cell1.innerHTML+"&";
        quantity=cell2.html;
        userfeedback=userfeedback+eachfeedback;
        storage.removeItem("userFeedback");
        storage.setItem("userFeedback", userfeedback);
  }


  }

  

  function datavalidate() {
    
   order_no = document.getElementById("telephone").value;
   date = document.getElementById("date").value;
    if (isNaN(order_no)) {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Order No. can only contain number!";
      return false;
    }

    if (order_no == "") {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Order No. should not be blank!";
      
      return false;
    }

    if (date == "") {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Date should not be blank!";
      
      return false;
    }

    if (order_no == "" && date == "") {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Order No. and Date should not be blank!";
      
      return false;
    }

    if (order_no.trim().length == 0 && date.trim().length == 0) {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Order No. and Date should not be all spaces!";
      
      return false;
    }

    if (order_no.trim().length == 0) {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Order No. should not be all spaces!";
      
      return false;
    }

    if (date.trim().length == 0) {
      document.querySelector(".alert").style.display = "inline";
      document.querySelector("body").style.opacity = "0.5";
      document.querySelector(".alert").innerHTML = "Date should not be all spaces!";
      
      return false;
    }

    if(document.querySelector(".alert").style.display == "inline") {
     // document.addEventListener("click", errorbox_hidden);
      document.querySelector("body").onclick = errorbox_hidden();
    }

    

    if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    

    
    } else {
    // Sorry! No Web Storage support..
    }

  }


  function errorbox_hidden() {
  document.querySelector(".alert").style.display = "none";
  }

