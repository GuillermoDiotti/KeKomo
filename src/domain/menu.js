export class Menu {
  constructor(
      Day,
      PrimaryDish,
      AltDish,
      Dessert,
      pricePrimaryDish,
      priceAltDish,
      priceDessert,
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
