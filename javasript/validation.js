


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
 getData();
 registerStaff()
}
function getData(){
  const name1 = document.getElementById('fname').value;
  const name2 = document.getElementById('lastname').value;
  const dateOfBirth = document.getElementById('dateBirth').value;
  const placeOfBirth = document.getElementById('placeBirth').value;
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  

  const Status =  document.getElementById('status').value;

}
function handleChange(selectObj) {
  const value = selectObj.value;
  console.log(value);
}

if (!window.indexedDB) {
  console.log("Your browser doesn't support IndexedDB.");
} else {
  alert('succes!')
}
let db;

const request = indexedDB.open("WorkForceDB", 1);

request.onerror = function () {
 alert("Database failed to open");
};

request.onsuccess = function () {
  db = request.result;
  alert("Database opened successfully!");
};

request.onupgradeneeded = function (e) {
  db = e.target.result;

  const store = db.createObjectStore("staff", { keyPath: "id", autoIncrement: true });

  store.createIndex("firstName", "firstName", { unique: false });
  store.createIndex("lastName", "lastName", { unique: false });
  store.createIndex("dateOfBirth", "dateOfBirth", { unique: false });
  store.createIndex("placeOfBirth", "placeOfBirth" ,{unique: false});
  store.createIndex("gender", "gender" ,{unique: false});
  store.createIndex("department", "department", { unique: false });
  store.createIndex("status", "status", { unique: false });
};

function registerStaff() {
  getData()
  handleChange(selectObj) 
  const staffData = {
    firstName:"vivtor",
    lastName: "maura",
    dateOfBirth:"88/03/67",
    placeOfBirth:"batoke",
    department:"IT",
    status: "temporal"
  };

  const transaction = db.transaction(["staff"], "readwrite");
  const store = transaction.objectStore("staff");
  const request = store.add(staffData);

  request.onsuccess = () => alert("Staff registered successfully!");
  request.onerror = () => alert("Failed to register staff.");
}

