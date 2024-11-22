let iconCart=document.querySelector('.iconCart');
let cart=document.querySelector('.cart');
let container=document.querySelector('.container');
let close=document.querySelector('.close');

iconCart.addEventListener('click',()=>{
    if(cart.style.right=='-100%'){
        cart.style.right='0';
        container.style.transform='translateX(-400px)';
    }else{
        cart.style.right='-100%';
        container.style.transform='translateX(0)';
    }
})
close.addEventListener('click',()=>{
    cart.style.right='-100%';
    container.style.transform='translateX(0)';
})
let products= null;
//get data from file json
fetch('product.json')
.then(response=> response.json())
.then(data=>{
    products=data;
    addDataToHTML();
})

//show data in list html
function addDataToHTML(){
    //remove datas default to html
    let listProductHTML=document.querySelector('.listProduct');
    listProductHTML.innerHTML='';

    //add new datas
    if(products!=null){
        products.forEach(product=>{
            let newProduct=document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML=
            `<img src="${product.image}">
            <h2>$(product.name}</h2>
            <div class="price">$${product.price}</div>
            <button>Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}
let ListCart=[];
//and i get cookie data cart
function checkCart(){
    var cookieValue=document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        ListCart=JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();

function addCart($idProduct){
    let productCopy=JSON.parse(JSON.stringify(products));
    //if this product is not in the cart
    if(!ListCart[$idProduct]){
        let dataProduct=productCopy.filter(
            product =>product.id == $idProduct
        )[0];   
        //add  data product in cart
        ListCart[$idProduct]=dataProduct;
        ListCart[$idProduct].quantity=1;
    }else{
        //if this product is already in cart
        //i just increased the quantity
        ListCart[$idProduct].quantity++;
    }
    //i will save datas cart in cookie
    //to save this datas cart when i turn off the computer
    let timeSave="expires=Thu,31 Dec 2025 23:59:59 UTC";
    Document.cookie="listCart="+JSON.stringify(ListCart)+"; path=/;";
    addCartToHTML();
}
addCartToHTML();
function addCartToHTML(){
    //clear data default
    let listCartHTML=document.querySelector('.listCart');
    ListCartHTML.innerHTML='';

    let totalHTML=document.querySelector('.totalQuantity');
    let totalQuantity=0;

    if(ListCart){
        ListCart.forEach(product =>{
            if(product){
                let newCart=document.createElement('div');
                newCart.classList.add('item');  
                newCart.innerHTML=
                ` <img src="${product.image}">
                <div class="content">
                    <div class="name">
                        ${product.name}
                    </div>
                    <div class="price">
                        ${product.price}/1 product
                    </div>
                </div>
                <div class="quantity">
                    <button> onclick="changeQuantity(${product.id},'-)"-</button>
                    ${product.quantity}</span>
                    <button>onclick="changeQuantity(${product.id},'+)"-+</button>
                    </div>`;
                    listCartHTML.appendChild(newCart);
                    totalQuantity=totalQuantity+product.quantity;
            }
        })
    }
    totalHTML.innerText=totalQuantity;
}
function changeQuantity($idProduct,$type){
    switch($type){
        case '+':
            ListCart[$idProduct].quantity++;
            break;
        case '-':
            ListCart[$idProduct].quantity--;
            if(ListCart[$idProduct].quantity<=0){
                delete ListCart[$idProduct];
            }
            break;
        default:
            break; 
    }
    //save data in cookie
    let timeSave="expires=Thu,31 Dec 2025 23:59:59 UTC";
    Document.cookie="listCart="+JSON.stringify(ListCart)+"; path=/;";

    //reload list cart in html
    addCartToHTML();
}
