const init = () => {
    // const car = {
    //     brand: 'Hyndai',
    //     model: 'Solaris',
    //     color: 'black',

    //     makeRed: () => {
    //         this.color = 'red'
    //     },
    // }

    // function CarClass(caolor, name) {
    //     this.color = caolor
    //     this.name = name

    //     this.makeRed = function() {
    //         this.color = 'red'
    //     }
    // }

    // const car1 = new CarClass('black', 'Solaris')
    // const car2 = new CarClass('green', 'Priora')

    // car1.name = 'Audi'
    // car1.makeRed()

    // console.log(car1)
    // console.log(car2);


    // function MenuItemClass(color, name, icon) {
    //     this.color = color
    //     this.name = name
    //     this.icon = icon
    // }

    // function SideMenuItemClass(color, name, icon, height) {
    //     MenuItemClass.call(this, color, name, icon)
    //     this.height = height
    // }

    // function TopMenuItemClass(color, name, icon, width) {
    //     MenuItemClass.call(this, color, name, icon)
    //     this.width = this.width
    // }

    // SideMenuItemClass.prototype.changeColorToRed = function () {
    //     this.color = 'red'
    // }

    // IopMenuItemClass.prototype.changeColorToRed = function () {
    //     this.color = 'green'
    // }


    // SideMenuItemObject.changeColor('green')
    // console.log(SideMenuItemObject);

    class MenuItem {
        constructor(color, name) {
            this.color = color;
            this.name = name;
        }
        makeRed() {
            this.color = 'red'
        }
    }
    
    class sideMenuItem extends MenuItem {
        makeBlue() {
            this.color = 'blue'
        }
    }
    
    const menuItem1 = new MenuItem('pink', 'Enter')
    const sideMenuItem1 = new sideMenuItem('blue', 'Message')

    console.log(menuItem1);
    console.log(sideMenuItem1);
}


window.onload = init
