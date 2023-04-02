class Pay {
  makePay(quantity) {
    return {
      realized: true,
      quantity: quantity,
    };
  }
}

class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "PayPal",
      email: this.email,
    };
  }
}

class Card extends Pay {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  makePay(quantity) {
    const cardNumber = this.cardNumber.toString();
    if (cardNumber.length < 16) {
      throw new Error("La tarjeta debe tener 16 dígitos");
    }
    const lastCardNumbers = cardNumber.substring(cardNumber.length - 4);
    return {
      ...super.makePay(quantity),
      lastCardNumbers: lastCardNumbers,
    };
  }
}

class Cash extends Pay {
  makePay(quantity) {
    return super.makePay(quantity);
  }
}

function processPay(method, quantity) {
  const pay = method.makePay(quantity);
  console.log("pay:", pay);
  return pay;
}

const card = new Card("4913478952471122");
processPay(card, 100);

const paypal = new PayPal("test@mail.com");
processPay(paypal, 240);

const cash = new Cash();
processPay(cash, 400);
