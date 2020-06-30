//to add in to do list
function AddInput() {
    var link = document.createElement("li");
    var input = document.getElementById("name").value;
    var t = document.createTextNode(input);
    link.appendChild(t);
    if (input === '') {
    alert("you have to do write something to do for this week");
    } else {
      document.getElementById("myList").appendChild(link);
    }
    document.getElementById("name").value = "";

    // Click on a close button to hide the current list item
     var close = document.getElementsByClassName("close");
     var i;
     for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
  }
}

  //to close the to do items which was added
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    link.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
          var div = this.parentElement;
      }
    }
}

// Create a "close" button to cut the lists to do
var mylist = document.getElementsByTagName("Li");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  mylist[i].appendChild(span);
}


//to delete all the selected items
function remove(){
    var list = document.getElementsByTagName("ul");
      list[0].innerHTML = "";
  }

