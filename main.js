const cartBtn = document.querySelector('.navbar-shopping-cart');
const cartContentDesp = document.querySelector('.product-detail');
const productCardFather = document.querySelector('.cards-container');
const asideProduct = document.querySelector('.product-detail-p2');
const asideProductBtn = document.querySelector('.product-detail-close');
const emailCart = document.querySelector('.navbar-email');
const emailCartContent = document.querySelector('.desktop-menu');
const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const producList = [];

// Despliegue del menu mobile

menuBtn.addEventListener('click', openMobileNav)

function openMobileNav(){
    const iscartContentOpen = cartContentDesp.classList.contains('inactive');
    const isasideProductOpen = asideProduct.classList.remove('inactive');

    if(!iscartContentOpen){
        cartContentDesp.classList.add('inactive');
    }

    if(!isasideProductOpen){
        asideProduct.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}



// Despliegue del correo

emailCart.addEventListener('click', openEmailOptions)

function openEmailOptions(){
    const iscartContentOpen = cartContentDesp.classList.contains('inactive');
    const isasideProductOpen = asideProduct.classList.contains('inactive');

    if(!isasideProductOpen){
        asideProduct.classList.add('inactive');
    }

    if(!iscartContentOpen){
        cartContentDesp.classList.add('inactive');
    }
    emailCartContent.classList.toggle('inactive');
}

// Despliegue de detalles del carrito de compras

cartBtn.addEventListener('click', cartContent);

function cartContent(){
    const isAsideProductOpen = asideProduct.classList.contains('inactive');
    const emailCartContentOpen = emailCartContent.classList.contains('inactive');

    if(!emailCartContentOpen){
        emailCartContent.classList.add('inactive');
    }

    if(!isAsideProductOpen){
        asideProduct.classList.add('inactive');
    }
    cartContentDesp.classList.toggle('inactive');
}


// Productos del main abre el aside y lo cierra con el boton.

asideProductBtn.addEventListener('click', closeAside);

function closeAside(){
    asideProduct.classList.add('inactive');
}

function openAside(){
    const iscartContentOpen = cartContentDesp.classList.contains('inactive');
    const isemailCartContentOpen = emailCartContent.classList.contains('inactive');
    
    if(!isemailCartContentOpen){
        emailCartContent.classList.add('inactive');
    }

    if(!iscartContentOpen){
        cartContentDesp.classList.add('inactive');
    }
    asideProduct.classList.remove('inactive');
}

producList.push({nameProduct: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
producList.push({nameProduct: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
producList.push({nameProduct: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});

for(product of producList){
    const productCard = document.createElement('div');  //Div primer padre
    productCard.classList.add('product-card');
    const producCardImg = document.createElement('img');
    producCardImg.setAttribute('src', product.image);

    producCardImg.addEventListener('click', openAside);

    const productInfo = document.createElement('div'); //Div segundo padre
    productInfo.classList.add('product-info');         
    const productInfoDiv = document.createElement('div');
    const productInfoDivp1 = document.createElement('p');
    productInfoDivp1.innerText = product.price;
    const productInfoDivp2 = document.createElement('p');
    productInfoDivp2.innerText = product.nameProduct;
    const productInfoFigure = document.createElement('figure');
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoFigureImg);
    productInfoDiv.append(productInfoDivp1, productInfoDivp2);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(producCardImg, productInfo);

    productCardFather.appendChild(productCard);
}