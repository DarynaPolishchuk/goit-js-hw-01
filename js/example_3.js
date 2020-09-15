const userPassword = null;

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

if (userPassword === ADMIN_PASSWORD) {
  console.log((message = ACCESS_IS_ALLOWED));
} else if (userPassword === null) {
  console.log((message = CANCELED_BY_USER));
} else if (userPassword === "123") {
  console.log((message = ACCESS_DENIED));
} else console.log((message = ACCESS_DENIED));

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'
