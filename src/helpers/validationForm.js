export const validateForm = (name, number) => {
  const errors = {
    name: '',
    number: '',
  };

  if (name.trim() === '') {
    errors.name = 'Name is required';
  }
  if (number.trim() === '') {
    errors.number = 'Number is required';
  }

  return errors;
};
