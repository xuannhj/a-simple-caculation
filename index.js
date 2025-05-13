document.getElementById("scoreForm").addEventListener("submit", function(e)
{
    e.preventDefault();// Prevent the form from submitting, khi mà submit thì ngăn chặn hành vi mặc định của form là reload lại trang
    const toan = document.getElementById("toan").value;
    const ly = document.getElementById("ly").value;
    const hoa = document.getElementById("hoa").value;

    let avg = (parseFloat(toan) + parseFloat(ly) + parseFloat(hoa))/3;
     // parseFloat: chuyển đổi chuỗi thành số thực
         console.log(avg);
    document.getElementById("resultValue").textContent = avg.toFixed(2);
    // toFixed(2): làm tròn số đến 2 chữ số thập phân

    let message = "";
    if (avg >= 8) {
        message = "Chùi ui giỏi wá";
    } else if (avg >= 6.5) {
        message = "Cũng cũng đóa";
    } else if (avg >= 5) {
        message = "Jz chòi";
    } else {
        message = "Ét ô ét";
    }

    document.getElementById("resultMessage").textContent = message;

    document.getElementById("toanDisplay").textContent = toan;
    document.getElementById("lyDisplay").textContent = ly;
    document.getElementById("hoaDisplay").textContent = hoa;

    
});