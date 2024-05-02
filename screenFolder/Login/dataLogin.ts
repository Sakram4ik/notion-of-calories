export const LoginData = [
  {
    rules: {
      required: 'user·email·is·required',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email',
      },
    },
    name: 'email',
  },
  {
    rules: {
      required: 'user·password·is·required',
      minLength: {
        value: 5,
        message: 'Password should be minimum 5 characters long',
      },
    },
    name: 'password',
  },
];
