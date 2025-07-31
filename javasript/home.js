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

function loadpage(page){
 
    fetch(page).then(res=>{
        if(res.ok){
            console.log(res.text);
            return res.text();
        } else{
            console.log('erro fetching page')
        }
    }).then(data =>{
        console.log(data);
        document.getElementById('main_display').innerHTML =data;
    });
}