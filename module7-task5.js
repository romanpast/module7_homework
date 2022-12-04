class Tool {
  constructor(name, category) {
    this.name = name;
    this.category = category
  }

  powerOn(state) {
    let on = "the power is on"
    let off = "the power is off"
    return state ? on : off
  }

}

class Drills extends Tool {
  constructor(brand, price, name, category) {
    super(name, category);
    this.brand = brand;
    this.price = price
  }

  priceRange = () => this.price > 1000 ? "expensive" : "cheap"
}

class Saws extends Tool {
  constructor(type, country, name, category) {
    super(name, category);
    this.type = type;
    this.country = country
  }

  madeIn = () => `This saw is made in ${this.country}`
}


const drill = new Drills("yamaha", 500, "drill", "construction")
const chainsaw = new Saws("chainsaw", "China", "saw", "lumber")

console.log(drill.name)
console.log(drill.category)
console.log(drill.brand)
console.log(drill.powerOn(true))
console.log(drill.priceRange())


console.log(chainsaw.name)
console.log(chainsaw.category)
console.log(chainsaw.type)
console.log(chainsaw.powerOn(false))
console.log(chainsaw.madeIn())