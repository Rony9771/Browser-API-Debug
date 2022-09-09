console.log ('Prompt clicked')


const showAlert = () =>{
  const num = Math.random()*10;
  console.log(num);

  if (num < 5){
    alert('hello Bangladeh');
  }
  
}
const showConfirm = () =>{
  const decision=confirm ('How Are You?')

  if (decision ===true){
    alert ("I'm fine")
  }
  else{
    console.log('Not so good')
  }
}