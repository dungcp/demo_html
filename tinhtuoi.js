
let yearofbirth = +prompt("năm sinh: ");
let date = new Date();
let currentyear = date.getFullYear();
let Age = currentyear-yearofbirth;
alert("tuổi của bạn là: " + Age);