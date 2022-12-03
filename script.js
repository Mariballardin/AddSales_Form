

const form = document.querySelector('#form');
const fieldset = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



//  form.addEventListener('submit', (event)=> {
//    event.preventDefault();
//    nameValidate();
//    emailValidate();
//   console.log('oi');


// });

form.addEventListener('submit', (event) => {
  console.log('alo')
});


function setError(index)
{
 fieldset[index].style.border = '1px solid  #FF1010';
 span[index].style.display ='block';


}

function removeError(index)
{
  fieldset[index].style.border = '';
 span[index].style.display ='none';
}
function nameValidate(){
    if(fieldset[0].value.length < 3)
    {
       setError(0);

    }
    else 
    {
      removeError(0);
    }
     }
     
function emailValidate()
{
  if (!emailRegex.test(fieldset[1].value))
  {
    setError(1);

  }

  else 
  {
    removeError(1);
  }
}
