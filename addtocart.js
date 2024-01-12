const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    }
];


const categories = [...new Set(product.map((item) => item.title))];

document.getElementById('root').innerHTML = categories.map((title, i) => {
    const item = product.find((productItem) => productItem.title === title);
    const { image, price } = item;

    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i})'>Add to cart</button>
            </div>
        </div>`;
}).join('');

var cart = [];

function addtocart(i) {
    cart.push({ ...product[i] });
    displaycart();
}

function displaycart() {
    let total = 0;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "Total: $0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items, j) => {
            var { image, title, price } = items;
            total += price;

            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j})'></i>
                </div>`;
        }).join('');

        document.getElementById('total').innerHTML = `Total: $ ${total}.00`;
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}