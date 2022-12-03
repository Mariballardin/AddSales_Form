
  const form = document.querySelector('#form');
  const fields = document.querySelectorAll('.required');
  const span = document.querySelectorAll('.span-required');
  const emailRefex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function nameValidate(){
      if(fields[0].value.lenght<3)
      {
         console.log('nome deve ter 3 caracteres');

      }
      else 
      {
        console.log('válido');
      }
       };
