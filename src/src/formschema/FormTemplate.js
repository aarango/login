const form = {
  template: [
    {
      'title': 'Login Info',
      'fields': [
        {
          'name': 'Email',
          'type': 'email',
          'title': 'Email',
          'placeholder': 'Ingrese su Email',
          'required': true,
          'component': 'input',
        },
        {
          'name': 'Password',
          'type': 'password',
          'required': true,
          'component': 'input',
          'placeholder': 'Insert Password',
        },
      ],
    },
    {
      'title': 'Personal Information',
      'fields': [
        {
          'name': 'First Name',
          'type': 'string',
          'placeholder': 'Add you Name',
          'required': true,
          'component': 'input',
        },
        {
          'name': 'Last Name',
          'type': 'string',
          'placeholder': 'Add your Last Name',
          'required': true,
          'component': 'input',
        },
      ],
    },
  ],
};

export default form;
