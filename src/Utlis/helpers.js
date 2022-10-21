
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const formValidation=(name,value)=>{
  

    if(name==='email'){
        return emailRegex.test(value)
    }

    if(name==='password'){
        return  passRegex.test(value)
    }
         
      
}