  var liCounter = 0;

  window.onload = function() {
    loadList();
  }

  function saveToDo() {

    var tableBodyRef = document.getElementById('tableBody');
    var taskInput = document.getElementById('newTask').value;
    var categoryInput = document.getElementById('todoCategory').value;
    var dateInput = document.getElementById('dateChooser').value;
    if (taskInput && categoryInput != 0) {

      // Insert a row in the table at the last row
      var newRow = tableBodyRef.insertRow(0);

      // Insert a cell in the row at index 0
      var newCellName = newRow.insertCell(0);
      var newCellCategory = newRow.insertCell(1);
      var newCellDate = newRow.insertCell(2);
      var newCellDelete = newRow.insertCell(3);

      //Insert the Fiels Values into the Table Cells
      newCellName.appendChild(document.createTextNode(taskInput));
      newCellCategory.appendChild(document.createTextNode(categoryInput));
      newCellDate.appendChild(document.createTextNode(dateInput));
      newCellDelete.appendChild(createCheckButton());

      //Clear all the Input Fields
      document.getElementById("newTask").value = "";
      document.getElementById("todoCategory").value = "";
      document.getElementById("dateChooser").value = "";

      saveList();
    } else {
      alert("Please fill out everything!")
    }
  }

  function checkItem() {
    var div = this.parentElement;
    div.style.display = "none";
    //var tRow = this.parentNode.parentNode;
    //var parent = tRow.parentNode;

    console.log("checked");
  }

  function createCheckButton() {
    var btn = document.createElement('input');
    btn.type = "image";
    btn.className = "btn";
    btn.src = "Icons/CheckIcon.png";
    //btn.onclick = checkItem();

    return btn;
  }

  function saveList() {
    // Get the HTML contents of the list...
    var html = tabelToDo.innerHTML;

    // Write the HTML to local storage...
    localStorage.setItem("tableHTML", html);
  }

  function loadList() {
    // Read the saved HTML from local storage...
    var html = localStorage.getItem("tableHTML");
    if (html)
      tabelToDo.innerHTML = html;
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("btn");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }