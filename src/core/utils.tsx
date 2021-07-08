export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const confpasswordValidator = (password: string, confpassword: string) => {
  if (password !== confpassword || confpassword.length === 0) return 'Password and Confirm passwords should be same.';

  return '';
};
export const confnewpasswordValidator = (password: string, confnewpassword: string) => {
  if (password !== confnewpassword || confnewpassword.length === 0) return 'Password and Confirm new passwords should be same.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'cannot be empty.';

  return '';
};

export const mobilenumberValidator =(mobilenumber : number) => {
  if (!mobilenumber || mobilenumberValidator.length <= 10) return 'Mobile Number not correct.';
  return '';
};

export const companynameValidator  = (companyname : string) => {
  if (!companyname || companynameValidator.length <= 30) return 'Enter correct Company name.';
  return '';
};
