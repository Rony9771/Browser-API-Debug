
const SetElementById =(id) =>{
  const inputField =document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value= '';
 // console.log(getvalue)
  return inputValue ;
}


const addProduct = () =>{
  const product = SetElementById('product-field');
  //console.log(product)
  const quantity = SetElementById('quantity-field');
  //console.log(quantity);

  // display product in UI 
  displayProducts(product,quantity)


  // set value in LS 
  // simple way 
  localStorage.setItem(product,quantity)

}
const displayProducts =(product,quantity) =>{
  const showProduct= document.getElementById('product-container');
  const li =document.createElement ('li')
  li.innerHTML =`${product}: ${quantity}
  
  `
  showProduct.appendChild(li);
}