class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

class GoodsList{
    constructor() {
        this.goods = []
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150 },
            {title: 'Socks', price: 50 },
            {title: 'Jacket', price: 350 },
        ]
    }

    totalSum() {
        const amount = this.goods.reduce((total, itemPrice) => {
            return total + itemPrice.price
        }, 0)
        console.log(amount);
    }
}

const init = () => {
    const goodsList = new GoodsList()
    goodsList.fetchGoods()
    goodsList.totalSum()

}

window.onload = init;
