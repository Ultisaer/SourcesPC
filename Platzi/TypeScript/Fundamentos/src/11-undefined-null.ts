(()=>{
  //TypeScript
  let myVar =null; //Tipo any
  let otherVar =undefined; //Tipo any

  let myNull:null =null; // Tipo null
  let myUndefined:undefined =undefined; //Tipo undefined

  let myNumber: number |null =null;
  myNumber = 50;

  let myString: string |undefined =undefined;
  myString = "Hola TypeScript";

  function hi(name: string | null){
    let hello = "Hola ";
    if (name) {
      hello+=name;
    } else {
      hello+= "nobody";
    }
    console.log(hello);
  }
  hi('Fabio');
  hi(null);
  function hi2(name: string | null){
    let hello = "Hola ";
    hello+=name?.toLowerCase() || "nobody";
  }
  hi2('Fabio');
  hi2(null);
  })();
