class Product {
  constructor(name, price, stockQuantity) {
    this.name = name;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }
  getPrice() {
    return this.price;
  }
}

// const productObj = new Product("iPhone", 81999, 5);
// console.log(productObj);

class Customer {
  constructor(name, email, shoppingCart) {
    this.name = name;
    this.email = email;
    this.shoppingCart = shoppingCart;
  }
}
// const customer = new Customer("tony", "tony@gmail.com", []);
// console.log(customer);

class ShoppingCart {
  constructor() {
    this.cartItems = [];
  }

  addProduct(product, quantity) {
    if (product.stockQuantity >= quantity) {
      this.cartItems.push({
        product,
        quantity,
      });
      // console.log(product.stockQuantity);
      product.stockQuantity -= quantity;
      console.log(`${quantity} ${product.name} added`);
    } else {
      console.log(`Sorry, ${product.name} is out of stock`);
    }
  }
  getCart() {
    return this.cartItems;
  }
  calculateTotalPrice() {
    // let total = 0;
    return this.cartItems.reduce(
      (total, cartItem) =>
        (total += cartItem.quantity * cartItem.product.getPrice()),
      0
    );
  }
  checkout() {
    const totalPrice = this.calculateTotalPrice();
    console.log("Total Price", totalPrice);
    this.cartItems = [];
  }

  // removeItem(item) {
  //   console.log(this.cartItems);
  //   const i = this.cartItems.filter((currItem, i, arr) => {
  //     if (currItem.product.name === item) {
  //       return i;
  //     }
  //   });
  //   console.log(i);
  // }
}

// const cart = new ShoppingCart();
// console.log(cart);

const earpod = new Product("Earpod", 2300, 5);
const mobileCover = new Product("Mobile Cover", 1500, 7);

// const cart = new ShoppingCart();
const customer1 = new Customer("Raj", "raj@gmail.com", new ShoppingCart());
customer1.shoppingCart.addProduct(mobileCover, 2);
customer1.shoppingCart.addProduct(earpod, 1);
// console.log(cart.getCart());
// console.log(cart.calculateTotalPrice());
customer1.shoppingCart.checkout();
// cart.removeItem(mobileCover);
