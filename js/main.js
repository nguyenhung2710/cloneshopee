// Account

let login = document.getElementById('login');
let hideLogin = document.querySelector('.form-login');
let regis = document.getElementById('register');
let hideRegis = document.querySelector('.form-regis');
let acc = document.getElementById('account');
let modal = document.querySelector('.modal');

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

// Cart

let delCartItem1 = document.getElementById('cart-item_1');
let delCartItem2 = document.getElementById('cart-item_2');
let delCartItem3 = document.getElementById('cart-item_3');
let noCart = document.querySelector('.header__cart-no-cart-img');
let noCartMsg = document.querySelector('.header__cart-list-no-cart-msg');
let heading = document.querySelector('.header__cart-heading');
let viewCart = document.querySelector('.header__cart-view-cart');
let cartList = document.querySelector('.header__cart-list');
let numberItem = 3;
let numItem = document.querySelector('.header__cart-notice');
numItem.innerHTML = numberItem;
// let checkNumItem = numberItem - 1;

function deleteItem1(){
    delCartItem1.style.display = 'none';
    numItem.innerHTML = numberItem - 1;
    
};

function deleteItem2(){
    delCartItem2.style.display = 'none';
    numItem.innerHTML = numberItem - 2;
};

function deleteItem3(){
    delCartItem1.style.display = 'none';
    delCartItem2.style.display = 'none';
    delCartItem3.style.display = 'none';
    numItem.style.display = 'none';
    heading.style.display = 'none';
    viewCart.style.display = 'none';
    noCart.style.display = 'block';
    noCartMsg.style.display = 'block';
    cartList.style.padding = '50px 0';
};

// Shop in & out

let selectShop = document.querySelector('.header__search-select-label');
let inshop = document.getElementById('in-shop');
let outshop = document.getElementById('out-shop');

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


// Page Button
let pageNum = document.querySelector('.home-filter__page-current');
let pageBtnLeft = document.querySelector('.home-filter__page-btn--disabled--left');
let pageBtnRight = document.querySelector('.home-filter__page-btn--disabled--right');
let pageIconLeft = document.querySelector('.home-filter__page-icon--left');
let pageIconRight = document.querySelector('.home-filter__page-icon--right');

function pageBtnLeft1() {
    pageNum.innerHTML = '1';
    pageIconLeft.style.color = '#ccc';
    pageIconRight.style.color = '#606060';
    pageBtnRight.style.cursor = 'pointer';
    pageBtnRight.style.backgroundColor = '#fff';
    pageBtnLeft.style.cursor = 'default'
    pageBtnLeft.style.backgroundColor = '#f9f9f9';
}

function pageBtnRight1() {
    pageNum.innerHTML = '2';
    pageIconRight.style.color = '#ccc';
    pageIconLeft.style.color = '#606060';
    pageBtnLeft.style.cursor = 'pointer';
    pageBtnLeft.style.backgroundColor = '#fff';
    pageBtnRight.style.cursor = 'default';
    pageBtnRight.style.backgroundColor = '#f9f9f9';
}

// var i;
// var x = deleteItem1();
// var app = document.querySelector('.app')

// if (i = x){
//     app.style.display = 'none';
// }