// Objeto para manejar las cuentas de usuario
const accountManager = {
    accounts: [],
  
    // Función para crear una nueva cuenta de usuario
    createAccount: function(username, initialBalance) {
      const account = {
        username: username,
        balance: initialBalance,
        transactions: []
      };
      this.accounts.push(account);
      return account;
    },
  
    // Función para realizar una transacción (compra o pago)
    performTransaction: function(account, amount, type) {
      if (type === 'compra' && amount > 0) {
        account.balance -= amount;
        account.transactions.push({ type: 'compra', amount: amount });
        return true;
      } else if (type === 'pago' && amount > 0) {
        account.balance += amount;
        account.transactions.push({ type: 'pago', amount: amount });
        return true;
      } else {
        return false;
      }
    }
  };
  
  // Función para imprimir el estado de la cuenta
  function printAccountStatus(account) {
    console.log(`Usuario: ${account.username}`);
    console.log(`Saldo actual: $${account.balance}`);
  }
  
  // Función principal que maneja la interacción con el usuario
  function main() {
    // Crear cuenta de usuario
    const username = prompt("Ingrese su nombre de usuario:");
    const initialBalance = parseFloat(prompt("Ingrese su saldo inicial:"));
    const userAccount = accountManager.createAccount(username, initialBalance);
  
    let option;
    do {
      option = parseInt(prompt(
        "Seleccione una opción:\n" +
        "1. Realizar compra\n" +
        "2. Realizar pago\n" +
        "3. Ver estado de cuenta\n" +
        "4. Salir"
      ));
  
      switch (option) {
        case 1:
          const purchaseAmount = parseFloat(prompt("Ingrese el monto de la compra:"));
          if (isNaN(purchaseAmount)) {
            console.log("Debe ingresar un monto válido.");
          } else {
            if (accountManager.performTransaction(userAccount, purchaseAmount, 'compra')) {
              console.log("Compra realizada correctamente.");
            } else {
              console.log("No se pudo realizar la compra. Verifique el monto ingresado.");
            }
          }
          break;
        case 2:
          const paymentAmount = parseFloat(prompt("Ingrese el monto del pago:"));
          if (isNaN(paymentAmount)) {
            console.log("Debe ingresar un monto válido.");
          } else {
            if (accountManager.performTransaction(userAccount, paymentAmount, 'pago')) {
              console.log("Pago realizado correctamente.");
            } else {
              console.log("No se pudo realizar el pago. Verifique el monto ingresado.");
            }
          }
          break;
        case 3:
          printAccountStatus(userAccount);
          break;
        case 4:
          console.log("¡Hasta luego!");
          break;
        default:
          console.log("Opción inválida. Por favor, seleccione una opción válida.");
      }
    } while (option !== 4);
  }
  
  // Llamar a la función principal para iniciar la aplicación
  main();