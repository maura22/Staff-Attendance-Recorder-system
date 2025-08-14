/*

$(document).ready(function($)
{
    $(document).find('.screen_data').load("screens/home.html");
    $(document).on('click', '.btn_menu', function(event){
        event.preventDefaul();

        var screen_name = $(this).attr('screen_name');
    
        window.location.hash = '../html/'+screen_name;
        $(document).find('.screen_name').html(screen_name);;
        if(screen_name == "home")
        {
            $(document).find('.screen_data').load("../html/home.html")
        }  else if(screen_name == "register")
            {
                $(document).find('.screen_data').load("/html/register.html")
            } else if(screen_name == "staff")
                {
                    $(document).find('.screen_data').load("../html/register_attendance.html")
                }
    });
}); */

async function loadpage(pageUrl) {
    const res = await fetch(pageUrl);
    const html = await res.text();
    document.getElementById('main_display').innerHTML = html;
  
    if (pageUrl === 'home.html') {
      var value = document.getElementById('staffTable');
      console.log(JSON.parse(localStorage.getItem('staffArray')));
      const storedData = localStorage.getItem('staff');
      const staff = JSON.parse(localStorage.getItem('staffArray'));
      const display = document.getElementById('staffTable');
      staff.forEach((staff) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${staff.fistname}</td>
         <td>${staff.lastName}</td>
          <td>${staff.dateOfBirth}</td> 
          <td>${staff.placeOfBirth}</td>
           <td>${staff.selectedGender}</td>
        <td>${staff.department}</td>
        <td>${staff.staff_status}</td>
      `;
        value.appendChild(row);
      });
    }
  }
  
  function Loadpage(page) {
    fetch(page)
      .then((res) => {
        if (res.ok) {
          console.log(res.text);
          return res.text();
        } else {
          console.log('erro fetching page');
        }
      })
      .then((data) => {
        document.getElementById('main_display').innerHTML = data;
      });
  }
  

