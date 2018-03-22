  var liCounter = 0;

  function saveToDo() {
    var tableRef = document.getElementById('tabelToDo');
    var task = document.getElementById('newTask').value;
    var category = document.getElementById('todoCategory').value;
    var date = document.getElementById('dateChooser').value;
    if (task && category != 0 && date) {

      // Insert a row in the table at the last row
      var newRow   = tableRef.insertRow(tableRef.rows.length);
      // Insert a cell in the row at index 0
      var newCellName  = newRow.insertCell(0);
      var newCellCategory  = newRow.insertCell(1);
      var newCellDate  = newRow.insertCell(2);
      var newCellDelete  = newRow.insertCell(3);

      newCellName.appendChild(document.createTextNode(task));
      newCellCategory.appendChild(document.createTextNode(category));
      newCellDate.appendChild(document.createTextNode(date));
      newCellDelete.appendChild(document.createButton(createCheckButton()));
      var removeButton = createButton();
      document.getElementById("newTask").value = "";
      document.getElementById("todoCategory").value = "";
      document.getElementById("dateChooser").value = "";
    } else {
      alert("Please fill out everything!")
    }
  }

  function createCheckButton() {
    var check = document.createElement('input');
    check.setAttribute("type", "image");
    check.setAttribute("id", "checkImage");
    check.setAttribute("src", "icon_check.png");
    return remove;
  }
