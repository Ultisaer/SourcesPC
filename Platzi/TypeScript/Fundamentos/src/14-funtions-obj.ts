(()=>{
  const login = (data: {email: string, password: number}) => {
    console.log(`Email: ${data.email} Password: ${data.password}`);
  }
  login({
    email: 'XXXXXXXXXXXXXX',
    password: 123456789
  })

  type Sizes = "S" | "M" | "L" | "XL";
  const products : any[] = [];

  const addProduct = (data: {

    title: string;
    createdAt: Date;
    stock: number;
    size?: string;

  }) => {

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
