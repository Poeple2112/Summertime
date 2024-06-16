const username = document.querySelector(".username");
const phim = document.querySelectorAll(".input_css");
const error = document.querySelector("#error");
const buttonsubmit = document.getElementById("btn_login");
let checkname = false;
let checkage = false;
let checksdt = false;
let checkpassword = false;
let checkgender = false;

function checkselect(){
    if(document.getElementById("1").checked){
      error.innerText=""
      checkgender=true;
    }else if (document.getElementById("2").checked){
      error.innerText=""
      checkgender=true;
    }else if (document.getElementById("3").checked){
      error.innerText=""
      checkgender=true;
    }else{
      error.innerText="vui lòng chọn giới tính"
      checkgender=false;
    }
}
function click_login_btn() {
    event.preventDefault();
  if(username.value == "admin") {
    window.location.href = "gioithieu.html"
  }
//     event.preventDefault();
//     phim.forEach(items => {
//         if(items.name == "age") {
//             if (items.value <= 0 || items.value.length == 4 || items.value == "") {
//                 error.innertext = "Vui lòng nhập số tuổi hợp lệ"
//                 checkage = false;
//             }else{
//                 error.innertext = ""
//                 checkage = true;
//             }
//         if(items.name == "sdt") {
//             if(items.value.length > 11 || items.value == "") {
//                 error.innertext = "Vui lòng nhập số điện thoại hợp lệ"
//                 checksdt = false;
//             }else {
//                 error.innertext = ""
//                 checksdt = true;
//             }
//         }
//         if (items.name == "password") {
//             if (items.value.trim() <= 5 || items.value.trim() == "") {
//                 error.innertext = "Vui lòng nhập mật khẩu 6 ký tự"
//                 checkpassword = false;
//             }else {
//                 error.innertext = ""
//                 checkpassword = true;
//             }
//         }
//         }
//     });
//     checkselect();
//     if (username.value.trim() == "" || username.value.length <= 4) {
//         error.innertext = "Vui lòng nhâp tên hợp lệ"
//         checkname = false;
//     }else {
//         error.innertext = ""
//         checkname = true;
//     }
//     if (checkname && checkage && checkgender && checksdt && checkpassword) {
//         console.log("dang nhap tc");
//         window.location = "./gioithieu.html"
//     }
 
}
buttonsubmit.addEventListener('click' , click_login_btn)

