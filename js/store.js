console.log('clicked')


document.getElementById('btn-add-name').addEventListener('click',function(){

  const getName = document.getElementById('text-field');
  const nameValue = getName.value;
  //console.log(nameValue);
  localStorage.setItem('name', nameValue);

})

document.getElementById('btn-remove-name').addEventListener('click',function(){
  localStorage.removeItem('name');
})