(()=>{
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    })
    return total;
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);

  }



  const rta = calcTotal([1,5,1,847,1,47])
  console.log(rta)
})()
