// Header//

let header = document.querySelector('.mrnu_bar_box');
let topbar = document.getElementById('top');
let middlebar = document.getElementById('middle');
let bottombar = document.getElementById('bottom');
let sidebar = document.querySelector('.sidebar');
let header_menu_heading = document.querySelector('.header_menu_heading')
let main_container = document.querySelector('.main_container');
let mobile_close_menu = document.querySelector('.mobile_close_menu')


header.onclick = () =>{
    sidebar.classList.toggle('sideBar_width');
    header_menu_heading.classList.toggle('length_header');
    main_container.classList.toggle('body_margin');
    topbar.classList.toggle('top_width');
    middlebar.classList.toggle('middle_width');
    bottombar.classList.toggle('bottom_width');

    // inner function//
    mobile_close_menu.onclick = () =>{
        sidebar.classList.toggle('sideBar_width');
    }
}



// Header Inner Part Middle Box//

let msgBox = document.querySelector('.message_box' ).addEventListener('click' , function(){;
 let msg_box_show = document.querySelector('.msg_ditails_box');
    console.log(msg_box_show.classList.toggle('show'));
  
});

let user_img_box = document.querySelector('.user_img_box');
user_img_box.onclick=()=>{
    let info_box = document.querySelector('.info_box')
    info_box.classList.toggle('show');
};


let account_collapse = document.querySelector('.account_collapse')
 function toggleParar(){
    let p = document.querySelector('.dynamic');
    if(p.textContent!='Hide all accounts'){
        p.textContent='Hide all accounts';
    }else{
        p.textContent='Show all accounts';
    }

    let account_img =document.querySelector('.account_img');

    if(account_img.style.display != "none"){
        account_img.style.display = "none";
    }else{
        account_img.style.display = "block";
    }

    let account_add = document.querySelector('.account_add');
    if(account_add.style.opacity != 0){
        account_add.style.opacity = 0;
    }else{
        account_add.style.opacity = 1;
    }

    let tgl_arrow = document.querySelector('#tgl_arrow');
    if(tgl_arrow.style.transform == 'rotate(0deg)'){
        tgl_arrow.style.transform = 'rotate(180deg)'
    }else{
        tgl_arrow.style.transform = 'rotate(0deg)'
    }

    let account_box = document.querySelector('.account_box');
    account_box.classList.toggle('account_box_height');
 }




 // xml requst ShowContent//

function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){

        document.getElementById('secondContent').innerHTML = this.responseText;
    }

    xhttp.open("GET", "second.html");

    xhttp.send();
}




