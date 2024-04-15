export const authError = (err) => {

    let errors = { username: '', email: '', password: '' };

    if (err.code === 11000) {
        errors = { code: "username or email is already in use"};
        return errors;
      }

    if (err.message.includes('clients validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
          errors[properties.path] = properties.message;
        });
      }
    
    return errors
}