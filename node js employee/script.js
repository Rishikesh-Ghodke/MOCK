async function fetchemployees(){
    try{
        let response = await fetch("http://localhost:3000/api/employees");
        let employees = await response.json();

        const employeeList = document.getElementById('employeeList');
        employeeList.innerHTML="";

        employees.forEach(employee=>{
            const col= document.createElement('div');
            col.className="col-md-3";

            col.innerHTML=`
            <div class="card mb-5 ">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" class="card-img-top small-img"  style="height:150px ">
            <div class="card-body">
            <h2 class="card-title">Name-${employee.name}</h2>
            <p class="card-text">Designation-${employee.designation}</p>
            <p class="card-text">$Department-${employee.department}</p>
            <p class="card-text">Salary-${employee.salary}</p>
            </div>
            </div>`

            employeeList.appendChild(col);
        })
    }
    catch{
        console.error("Error");
    }
} 
fetchemployees();