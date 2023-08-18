import {addProduct, calcStrock, products} from "./product.service"

addProduct({
  title: 'Producto 1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: "XL",
})

addProduct({
  title: 'Producto 4',
  createdAt: new Date(1993, 1, 1),
  stock: 18,

})

console.log(products)
const total = calcStrock()
console.log(total)

// tsc --init
