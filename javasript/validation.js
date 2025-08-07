/*
let db;

const request = indexedDB.open("WorkForceDB", 1);
request.onsuccess =  (e) =>{
  alert("Database opened successfully!" );
};

request.onupgradeneeded =  (event) => {

 console.log("getData.......12345");
  db = event.target.result;
  var id = 1;
const tx = db.createObjectStore("staff", { keyPath: "status", autoIncrement: true });
const store =db.transaction("staff","readwrite");
console.log(staff);
store.put({staff});

};
*/


 var staffArray = [];


function validity(){
    event.preventDefault();

    if(document.getElementById("fname").value=="")
  {
    document.getElementById("fname-respons").classList.add('invalid-feedback1')
    document.getElementById("fname-respons").innerHTML="invalid";
  } else{
    document.getElementById("fname-respons").classList.add('valid-feedback1')
    document.getElementById("fname-respons").innerHTML="valid"
  }

var staff = getData();

staffArray.push(staff);
console.log(staffArray);
alert("Staff sucessfully saved");
saveData();
document.getElementById("verify").reset();
console.log(JSON.parse(localStorage.getItem("staffArray")));
}


function getData(){
  var staff = {};
  const name1 = document.getElementById('fname').value;
  const name2 = document.getElementById('lastname').value;
  const dateOfBirth = document.getElementById('dateBirth').value;
  const placeOfBirth = document.getElementById('placeBirth').value;
  const selectedGender = document.querySelector('input[name="gender"]:checked').value;
  const status =document.getElementById('status').value;
  
  
  staff.fistname = name1;
  staff.dateOfBirth=dateOfBirth;
  staff.department = department.value;
  staff.selectedGender=selectedGender;
  staff.lastName=name2;
  staff.staff_status=status;
  return staff;
}
   

function saveData() {

   localStorage.setItem("staffArray",JSON.stringify(staffArray));

}
/*function registerStaff() {
  
  handleChange(selectObj) 
  const staffData = {
    firstName:"vivtor",
    lastName: "maura",
    dateOfBirth:"88/03/67",
    placeOfBirth:"batoke",
    department:"IT",
    status: "temporal"
  };
*/

