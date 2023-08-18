(() => {
  //Type string implicit
  let productTitle = "My amazing product";
  //productTitle = null //We can't reassign a value with different type
  console.log("Product title", productTitle);

  //We can use double quotation marks, single quotes, and back tick's
  const productDescription = "Lorem ipsum dolor sit amet, lore'm";
  console.log(productDescription);
  const productDescription2 = 'Lorem ipsum dolor sit amet, lore\'m';
  console.log(productDescription2);

  const productPrice = 125.00;
  let productIsNew = true;

  //Backticks, are useful to multiline stings and do string interpolation
  const summary = `
    Title: ${productTitle},
    Description: ${productDescription},
    Price: ${productPrice},
    Is New: ${productIsNew}
  `;
  console.log(summary);

})();
