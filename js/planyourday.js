let studentArray = [];
let i;

function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.record) {
        studentArray = JSON.parse(localStorage.record);
        // console.log("dfhgshf",studentArray)
        for (let i = 0; i < studentArray.length; i++) {
            let task = studentArray[i].Task;
            let status = studentArray[i].Status;
            let priority = studentArray[i].Priority;
            let date = studentArray[i].Date;

            prepareTableCell(i, task, status, priority, date);

        }
    }


}


function registered() {
    let task = document.getElementById("taskinput").value;
    console.log(task);
    let status = document.getElementById("selectstatus").value;
    console.log(status);
    let priority = document.getElementById("selectpriority").value;
    console.log(priority);
    let date = document.getElementById("date").value;
    console.log(date);

    let addingelement = { Task: task, Status: status, Priority: priority, Date: date };


    console.log("dsfdsf", date);

    if (selectedindex === -1) {
        studentArray.push(addingelement);
        console.log("Array", studentArray)
    }
    else {
        studentArray.splice(selectedindex, 1, addingelement);

    }
    localStorage.record = JSON.stringify(studentArray);

 

    // document.getElementById("low").style.backgroundColor = "yellow";
    // document.getElementById("medium").style.backgroundColor = "green";
    // document.getElementById("high").style.backgroundColor = "red";

     document.getElementById("rows").style.backgroundColor = "Yellow";


    init();
    resetbtn();


}




function cur(){


   
    // currentdate = "2021-02-02"
     var currentdate = new Date().toISOString().split("T")[0];
     console.log(currentdate);
  
    for (let i = 0; i < studentArray.length; i++) {



        console.log(studentArray[i].Date)


        if (studentArray[i].Date === currentdate) {
            console.log("Result")

            let newtable = document.getElementById("rows");
            // let newtable = document.getElementById("rows").rows.length;
            // console.log(newtable)
            let newrow = newtable.insertRow();
            let tcell = newrow.insertCell(0);
            let scell = newrow.insertCell(1);
            let pcell = newrow.insertCell(2);
            let dcell = newrow.insertCell(3);



            tcell.innerHTML = studentArray[i].Task;
            scell.innerHTML = studentArray[i].Status;
            pcell.innerHTML = studentArray[i].Priority;
            dcell.innerHTML = studentArray[i].Date;
        }
        else {
            console.log("error")
        }
    }
}


function prepareTableCell(index, task, status, priority, date) {
    let table = document.getElementById("tablerows");
    let Newrow = table.insertRow();
    let taskcell = Newrow.insertCell(0);
    let statuscell = Newrow.insertCell(1);
    let prioritycell = Newrow.insertCell(2);
    let datecell = Newrow.insertCell(3);
    let actionCell = Newrow.insertCell(4);



    taskcell.innerHTML = task;
    statuscell.innerHTML = status;
    prioritycell.innerHTML = priority;
    datecell.innerHTML = date;
    actionCell.innerHTML = '<button onclick = "EditBtn(' + index + ')" > Edit</button> <br/> <button onclick = "deletebtn(' + index + ')" > Delete </button>';



}

function deletebtn(index) {
    studentArray.splice(index, 1);
    localStorage.record = JSON.stringify(studentArray);
    init();

}

function resetbtn() {
    selectedindex = -1;

    document.getElementById("taskinput").value = "";

    document.getElementById("selectstatus").value = "";

    document.getElementById("selectpriority").value = "";

    document.getElementById("date").value = "";

    document.getElementById("submit").innerHTML = "Register";


}


let selectedindex = -1;
function EditBtn(index) {
    selectedindex = index;
    let addingelement = studentArray[index];

    document.getElementById("taskinput").value = addingelement.Task;

    document.getElementById("selectstatus").value = addingelement.Status;

    document.getElementById("selectpriority").value = addingelement.Priority;

    document.getElementById("date").value = addingelement.Date;

    document.getElementById("submit").innerHTML = "Update";
}







