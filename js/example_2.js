const invoice = 150;
const stock = 100;

// Write code under this line
let message;

invoice === 100 || invoice === 50
  ? (message = "Заказ оформлен, с вами свяжется менеджер")
  : (message = "На складе недостаточно товаров!");
console.log(message);
