  var liCounter = 0;
  localStorage.task =

    function saveToDo() {
      var tableBodyRef = document.getElementById('tableBody');
      var task = document.getElementById('newTask').value;
      var category = document.getElementById('todoCategory').value;
      var date = document.getElementById('dateChooser').value;
      if (task && category != 0) {

        // Insert a row in the table at the last row
        var newRow = tableBodyRef.insertRow(0);

        // Insert a cell in the row at index 0
        var newCellName = newRow.insertCell(0);
        var newCellCategory = newRow.insertCell(1);
        var newCellDate = newRow.insertCell(2);
        var newCellDelete = newRow.insertCell(3);

        //Insert the Fiels Values into the Table Cells
        newCellName.appendChild(document.createTextNode(task));
        newCellCategory.appendChild(document.createTextNode(category));
        newCellDate.appendChild(document.createTextNode(date));
        newCellDelete.appendChild(createCheckButton());

        //Clear all the Input Fields
        document.getElementById("newTask").value = "";
        document.getElementById("todoCategory").value = "";
        document.getElementById("dateChooser").value = "";
      } else {
        alert("Please fill out everything!")
      }
    }

  function checkItem() {
    var tRow = this.parentNode.parentNode;
    var parent = tRow.parentNode;

    console.log("checked");
  }

  function createCheckButton() {
    var btn = document.createElement('input');
    btn.type = "image";
    btn.className = "btn";
    btn.src = "CheckIcon.png";
    btn.onclick = checkItem();

    return btn;
  }