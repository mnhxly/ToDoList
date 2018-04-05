  var liCounter = 0;

  window.onload = function() {
    loadList();
  }


  function saveList() {
    // Get the HTML contents of the list...
    var html = toDoList.innerHTML;

    // Write the HTML to local storage...
    localStorage.setItem("tableHTML", html);
  }

  function loadList() {
    // Read the saved HTML from local storage...
    var html = localStorage.getItem("tableHTML");
    if (html)
      toDoList.innerHTML = html;
  }

  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");

    var taskSpan = document.createElement("SPAN");
    var categorySpan = document.createElement("SPAN");
    var dateSpan = document.createElement("SPAN");

    var taskInput = document.getElementById('newTask').value;
    var categoryInput = document.getElementById('todoCategory').value;
    var dateInput = document.getElementById('dateChooser').value;

    var taskTextNode = document.createTextNode(taskInput);
    var categoryTextNode = document.createTextNode(categoryInput);
    var dateTextNode = document.createTextNode(dateInput);


    taskSpan.appendChild(taskTextNode);
    categorySpan.appendChild(categoryTextNode);
    dateSpan.appendChild(dateTextNode);

    li.appendChild(taskSpan);
    li.appendChild(categorySpan);
    li.appendChild(dateSpan);

    if (taskInput && categoryInput != 0) {

      document.getElementById("toDoList").appendChild(li);

      var checkSpan = document.createElement("SPAN");
      var check = document.createTextNode("\u2713");
      checkSpan.className = "close";
      checkSpan.appendChild(check);
      li.appendChild(checkSpan);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

      saveList();

      //Clear all the Input Fields
      document.getElementById("newTask").value = "";
      document.getElementById("todoCategory").value = "0";
      document.getElementById("dateChooser").value = "";
    } else {
      alert("Please fill out everything!")

    }
  }



  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }




  //