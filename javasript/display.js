
/*
<script>
  // Get data from localStorage
  const storedData = localStorage.getItem("users");

  // Parse it back to an object (array in this case)
  const users = JSON.parse(storedData);

  // Reference to the table body
  const tableBody = document.querySelector("#userTable tbody");

  // Loop through the object and add rows
  users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.email}</td>
    `;
    tableBody.appendChild(row);
  });
</script>
*/

/*
<table id="userTable" border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rows will be inserted here -->
  </tbody>
</table>
const staff = JSON.parse(localStorage.getItem("staffArray"));
*/

 const attend = [];
 function select(){
  var department = document.getElementById('department').value;
  var staff =JSON.parse(localStorage.getItem("staffArray"));
  var select = staff.filter(staf=>staf.department===department)
  var stafName = document.getElementById('name')
      select.forEach( st => {
        const option =document.createElement("option");
        option.value = st.id;
        option.text =` ${st.fistname} ${st.lastName}`;
        stafName.appendChild(option);
        console.log( option);
      });
    
 }
function atteensance(){
   event.preventDefault();
   var staff = JSON.parse(localStorage.getItem("staffArray"));
    var department = document.getElementById('department').value;
    let currentTime =new Date();
    var now= new Date();
    var getHours = now.getHours().toString();
    var getMinutes = now.getMinutes().toString();
    var getSeconds = now.getSeconds().toString();
    var staf = staff.filter(st=>st.department ===department);
    var time = `${getHours}:${getMinutes}:${getSeconds}`;
    var attendance = {};
    attendance.staf=staf;
    attendance.time=time;
    
   console.log(staf);
    
    attend.push(attendance);
    localStorage.setItem("attendace",JSON.stringify(attend));
    var data = JSON.parse(localStorage.getItem("attendance"));
    alert('attendace succes') ; 

}
