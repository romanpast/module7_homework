function Tool(name, category) {
  this.name = name,
  this.category = category
}

Tool.prototype.powerOn = function PowerState(state) {
  let on = "the power is on"
  let off = "the power is off"
  return state ? on : off
}

function Drills(brand, price) {
  this.brand = brand,
  this.priceRange = () => price > 1000 ? "expensive" : "cheap"
}

function Saws(type, country) {
  this.type = type,
  this.madeIn = () => `This saw is made in ${country}`
}


Drills.prototype = new Tool("drill", "construction")
Saws.prototype = new Tool("saw", "lumber")

const drill = new Drills("yamaha", 500)
const chainsaw = new Saws("chainsaw", "China")

console.log(drill.name)
console.log(drill.brand)
console.log(drill.powerOn(true))
console.log(drill.priceRange())


console.log(chainsaw.name)
console.log(chainsaw.type)
console.log(chainsaw.powerOn(false))
console.log(chainsaw.madeIn())