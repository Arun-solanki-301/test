
export const emailLengthValidation = (userEmail)=>{
  // console.log(userEmail.length)
  if(userEmail.length===0) return false
  else return true ;
}
export const emailOtherValidation = (userEmail)=> {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  
  if (reg.test(userEmail) === false) {
    return false;
  } else {
    return true;
  }
}
export const passwordLengthValidation = (userPassword)=>{
  // console.log(userPassword)
  if(userPassword.length===0) return false;
  else return true;
}
// export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validPassword=(userPassword)=>{
  const reg = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')
  if (reg.test(userPassword) === false) {
    return false;
  } else {
    return true;
  }

}

export const passwordConfirmation = (Password , confirm)=>{
    if(Password === confirm && Password.length !== 0){
      return true;
    }else{
      return false;
    }
}



