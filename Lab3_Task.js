let CartQuantity = 0;
 

function showquantity (){
    document.getElementById("quantity").textContent = CartQuantity;
}

function addtocart(){
    CartQuantity += 1;
    document.getElementById("quantity").textContent = CartQuantity;
}
function add2 (){
    CartQuantity += 2;
document.getElementById("quantity").textContent = CartQuantity;
}
function add3 (){
    CartQuantity += 3;
    document.getElementById("quantity").textContent = CartQuantity;
}
function Reset () {
    CartQuantity= 0 ;
    document.getElementById("quantity").textContent = CartQuantity;
}


document.getElementById("Show").addEventListener('click' , showquantity);

document.getElementById("Add").addEventListener("click" , addtocart);
document.getElementById("+2"). addEventListener('click' , add2);

document.getElementById("+3").addEventListener('click' , add3);

document.getElementById("Reset").addEventListener('click' , Reset);