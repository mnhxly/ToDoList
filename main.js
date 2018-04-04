  var liCounter = 0;

  function saveToDo() {
    var tableBodyRef = document.getElementById('tableBody');
    var taskInput = document.getElementById('newTask').value;
    var categoryInput = document.getElementById('todoCategory').value;
    var dateInput = document.getElementById('dateChooser').value;
    if (taskInput && categoryInput != 0) {

      //Save Input to localStorage
      var Inputs = [{
        task: taskInput,
        date: dateInput,
        category: categoryInput
      }, ];
      localStorage.setItem("TableData", JSON.stringify(Inputs));

      loadStorageToTable();

      //Clear all the Input Fields
      document.getElementById("newTask").value = "";
      document.getElementById("todoCategory").value = "";
      document.getElementById("dateChooser").value = "";
    } else {
      alert("Please fill out everything!")
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
      btn.src = "Icons/CheckIcon.png";
      //btn.onclick = checkItem();

      return btn;
    }

    function loadStorageToTable() {
      var hst = document.getElementById("tabelToDo");

      var retrievedScores = JSON.parse(localStorage.getItem("TableData"));

      for (var i = 0; i < retrievedScores.length; i++) {
        hst.innerHTML += "<tr><td>" +
          retrievedScores[i].task + "</td><td>" +
          retrievedScores[i].category + "</td><td>" +
          retrievedScores[i].date + "</td><td>" +
          createCheckButton() + "</td></tr>";
      }
    }
