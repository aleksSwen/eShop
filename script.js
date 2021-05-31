class Cart {
    constructor(listCart, titleItem, priceItem) {  //listCart
        this.listCart = listCart;
        this.titleItem = titleItem;
        this.priceItem = priceItem;
    }

    addToCart() {}

    loadGoods() {}

    removeItem() {}

    render() {
        return `<div class="goods-item"><h3>${this.titleItem}</h3><p>${this.priceItem}</p></div>`
    }
}

// class GoodsItem {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }

//     render() {
//         return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`
//     }
// }

class GoodsList {
    constructor() {
        this.goods = []
    }

    fetchGoods() {
        this.goods = [
            {titleItem: 'Shirt', priceItem: 150 },
            {titleItem: 'Socks', priceItem: 50 },
            {titleItem: 'Jacket', priceItem: 350 },
        ]
    }

    render() {
        let listAcc = ''

        this.goods.forEach(good => {
            const goodItem = new Cart(good.listCart, good.titleItem, good.priceItem)
            listAcc += goodItem.render()
            
        })
        console.log(listAcc);

        document.querySelector('.goods-list').innerHTML = listAcc
    }

    totalSum() {  // этот метод суммирует все товары в корзине
        const amount = this.goods.reduce((total, itemPrice) => total + itemPrice.priceItem, 0)
        console.log(amount);
        let sum = `<p>Total sum: ${amount}</p>`
        document.querySelector('.total-sum').innerHTML = sum;
    }
}

const init = () => {

    const goodsList = new GoodsList()
    goodsList.fetchGoods();
    goodsList.render()
    goodsList.totalSum()
}

window.onload = init;
