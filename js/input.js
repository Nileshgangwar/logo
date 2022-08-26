// function isCheck() {
//     var num = document.getElementById("positivenumber").value;
//     if (num < 0) {
//         document.getElementById("positivenumber1").innerHTML =
//         "enter a positive value ";
//     }
// }
function isEven() {
    let num = +document.getElementById("evenandodd1").value;
    document.getElementById("evenandodd").innerHTML = "";
    if (num%2 === 0) {
        for (let i = 0; i < 3; i++) {
            num += 2;
            document.getElementById("evenandodd").innerHTML += num + ",";
            
        }
    }else if(num < 0){
       document.getElementById("evenandodd").innerHTML = "enter a positive value";
    }
    else{
        for (let i = 0; i < 3; i++) {
            num += 2;
            document.getElementById("evenandodd").innerHTML += num + ",";
            
        }
    }
 }