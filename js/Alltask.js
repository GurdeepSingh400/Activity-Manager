

let studentArray = [];
let i;
function init(){
    document.getElementById("tablerows").innerHTML = "";
    if(localStorage.record){
        studentArray = JSON.parse(localStorage.record);
        // console.log("dfhgshf",studentArray)
        for( let i = 0; i < studentArray.length; i++){
            let task = studentArray[i].Task;
            let status = studentArray[i].Status;
            let priority = studentArray[i].Priority;
            let date = studentArray[i].Date;

             prepareTableCell(i, task, status,priority,date);

        }
    }
   

}


function registered(){
    let task = document.getElementById("taskinput").value;
    console.log(task);
    let status = document.getElementById("selectstatus").value;
    console.log(status)
    let priority = document.getElementById("selectpriority").value;
    console.log(priority)
    let date = document.getElementById("date").value;
    console.log(date)

    let addingelement = {Task : task, Status : status, Priority : priority, Date : date};
    if(selectedindex === -1){
    studentArray.push(addingelement);
    console.log("Array",studentArray)
    }
    else{
        studentArray.splice(selectedindex , 1, addingelement);

    }
    localStorage.record = JSON.stringify(studentArray);
   
    init();
    resetbtn();

}

function prepareTableCell(index, task, status, priority, date){
    let table = document.getElementById("tablerows");
    let Newrow = table.insertRow();
    let taskcell = Newrow.insertCell(0);
    let statuscell = Newrow.insertCell(1);
    let prioritycell = Newrow.insertCell(2);
    let datecell = Newrow.insertCell(3);
    // let actionCell = Newrow.insertCell(4);



    taskcell.innerHTML = task;
    statuscell.innerHTML = status;
    prioritycell.innerHTML = priority;
    datecell.innerHTML = date;
    // actionCell.innerHTML = '<button onclick = "deletebtn(' + index + ')" > Delete </button>';



}


function deletebtn(index){
    studentArray.splice(index, 1);
    localStorage.record = JSON.stringify(studentArray);
    init();

}

function resetbtn(){
    selectedindex = -1;

    document.getElementById("taskinput").value = "";
    
    document.getElementById("selectstatus").value = "";
    
    document.getElementById("selectpriority").value = "";

    document.getElementById("date").value = "";

    document.getElementById("submit").innerHTML = "Register";


}


let selectedindex = -1;
 function EditBtn(index){
     selectedindex = index;
     let addingelement = studentArray[index];
     
     document.getElementById("taskinput").value = addingelement.Task;
    
    document.getElementById("selectstatus").value = addingelement.Status;
    
    document.getElementById("selectpriority").value = addingelement.Priority;

    document.getElementById("date").value = addingelement.Date;
    
    document.getElementById("submit").innerHTML = "Update";
 }






function nnn(){
    document.getElementById("allt").style.visibility = "hidden";
   
    }
   nnn();



    function sorttable(n) {

        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("tables");
        switching = true;
        dir = "asc";
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
    
            }
            else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

    

    function serach() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tables");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }