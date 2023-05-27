class sistema {
  constructor() {
    this.listMenu = [];
    this.listReserva = [];
  }

  addMenu(newMenu) {
    this.listMenu.push(newMenu);
  }

  getMenu() {
    return this.listMenu;
  }

  addReserva(newReserva) {
    this.listReserva.push(newReserva);
  }

  getReserva() {
    return this.listReserva;
  }
}

class Menu {
  constructor(
    Day,
    PrimaryDish,
    AltDish,
    Dessert,
    pricePrimaryDish,
    priceAltDish,
    priceDessert
  ) {
    this.Day = Day;
    this.PrimaryDish = PrimaryDish;
    this.AltDish = AltDish;
    this.Dessert = Dessert;
    this.pricePrimaryDish = pricePrimaryDish;
    this.priceAlt = priceAltDish;
    this.priceDessert = priceDessert;
  }

  toStringPrDish() {
    return this.PrimaryDish;
  }
  toStringAltDish() {
    return this.AltDish;
  }
  toStringDess() {
    return this.Dessert;
  }
  toString$Pri() {
    return parseInt(this.pricePrimaryDish);
  }
  toString$Alt() {
    return parseInt(this.priceAlt);
  }
  toString$Dess() {
    return parseInt(this.priceDessert);
  }
}

class Reserva {
  constructor(date, user, price, description) {
    this.date = date;
    this.user = user;
    this.price = price;
    this.description = description;
  }

  toStringDate() {
    return this.date;
  }
  toStringUser() {
    return this.user;
  }
  toStringPrice() {
    return this.price;
  }
  toStringDesc() {
    return this.description;
  }
}
