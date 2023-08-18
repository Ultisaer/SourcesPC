(()=>{
    let userId: string | number;
    userId = '123';
    userId = 123;

    function greeting(myText: string | number){
      if(typeof myText === "string"){
        console.log(`string ${myText.toLowerCase()}`);
      }else {
        console.log(`number ${myText.toFixed(1)}`);
      }
    }
    greeting('123');
    greeting(123);
    //greeting(true)
})();
