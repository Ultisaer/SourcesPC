(()=>{


  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }
  const products : Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Producto 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: "XL",
  })

  addProduct({
    title: 'Producto 4',
    createdAt: new Date(1993, 1, 1),
    stock: 12,

  })

  console.log(products);

})()
