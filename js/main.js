
var login = document.getElementById('login');
var hideLogin = document.querySelector('.form-login');
var regis = document.getElementById('register');
var hideRegis = document.querySelector('.form-regis');
var acc = document.getElementById('account');
var modal = document.querySelector('.modal');
var delCartItem1 = document.getElementById('cart-item_1');
var delCartItem2 = document.getElementById('cart-item_2');
var delCartItem3 = document.getElementById('cart-item_3');
let numberItem = 3;
var numItem = document.querySelector('.header__cart-notice');
numItem.innerHTML = numberItem;
// var checkNumItem = numberItem - 1;

function regisAcc(){
    regis.style.display = 'block';
    modal.style.display = 'flex';
};

function loginAcc(){
    login.style.display = 'block';
    modal.style.display = 'flex';
};

function switchLogin(){
    regis.style.display = 'none';
    login.style.display = 'block';
};

function switchRegister(){
    regis.style.display = 'block';
    login.style.display = 'none';
};

function exitModal(){
    modal.style.display = 'none';
    regis.style.display = 'none';
    login.style.display = 'none';
};

function successAcc(){
    hideLogin.style.display = 'none';
    hideRegis.style.display = 'none';
    modal.style.display = 'none';
    acc.style.display = 'inline-flex';
};

function logOut(){
    acc.style.display = 'none';
    hideLogin.style.display = 'block';
    hideRegis.style.display = 'block';
};

function deleteItem1(){
    delCartItem1.style.display = 'none';
    numItem.innerHTML = numberItem - 1;
    
};

function deleteItem2(){
    delCartItem2.style.display = 'none';
    numItem.innerHTML = numberItem - 2;
};

function deleteItem3(){
    delCartItem3.style.display = 'none';
    numItem.style.display = 'none';
};

var selectShop = document.querySelector('.header__search-select-label');
var inshop = document.getElementById('in-shop');
var outshop = document.getElementById('out-shop');

function inShop() {
    selectShop.innerHTML = 'Trong shop';
    inshop.style.display = 'inline-block';
    outshop.style.display = 'none';
}

function outShop() {
    selectShop.innerHTML = 'Ngoài shop';
    outshop.style.display = 'inline-block';
    inshop.style.display = 'none';
}


// var i;
// var x = deleteItem1();
// var app = document.querySelector('.app')

// if (i = x){
//     app.style.display = 'none';
// }