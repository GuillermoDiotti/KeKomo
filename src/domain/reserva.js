export class Reserva {
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
