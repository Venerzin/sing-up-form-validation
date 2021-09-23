const warningEl: HTMLParagraphElement | null = document.querySelector('.c-free-trial__warning');
const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleSubmit(e : Event) : void{

  let validFirstName: boolean = false;
  let validLastName: boolean = false;
  let validEmail: boolean = false;
  let validPassword: boolean = false;

  const firstNameEl: HTMLInputElement | null = document.querySelector("#first-name");
  const lastNameEl: HTMLInputElement | null = document.querySelector("#last-name");
  const emailEl: HTMLInputElement | null = document.querySelector("#email");
  const passwordEl: HTMLInputElement | null = document.querySelector("#password");

  if(firstNameEl){
    validFirstName = nameValidation(firstNameEl.value);
  }
  if(lastNameEl){
    validLastName = nameValidation(lastNameEl.value);
  }
  if(emailEl){
    validEmail = emailRegex.test(emailEl.value); 
  }
  if(passwordEl){
    validPassword = passwordValidation(passwordEl.value);
  }


  if(validFirstName){
    displayWarning('');
    if(validLastName){
      if(validEmail){
        if(validPassword){
        }else{
          displayWarning('Password require a min of 8 characters!');
          e.preventDefault();
          passwordEl?.focus();
        }
      }else{
        displayWarning("Please enter a valid email!");
        e.preventDefault();
        emailEl?.focus;
      }
    }else{
      displayWarning('Please enter a last name!');
      e.preventDefault();
      lastNameEl?.focus();
    }
  }else{
    displayWarning('Please enter a first name!');
    e.preventDefault();
    firstNameEl?.focus();
  }
}

function nameValidation(name: string) : boolean{
  if(name.length > 0){
    return true;
  }

  return false;
}

function passwordValidation(password: string): boolean{
  if(password.length >= 8){
    return true;
  }
  
  return false;
}

function displayWarning(warning: string){
  if(warningEl){
    warningEl.innerHTML = warning;
  }
}