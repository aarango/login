const form = {
  template: [
    {
      'title': 'Login Info',
      'fields': [
        {
          'title': 'Email',
          'type': 'email',
          'label': 'Email',
          'placeholder': 'Insert your Email',
          'required': true,
          'component': 'input',
        },
        {
          'label': 'Password',
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
          'label': 'First Name',
          'type': 'string',
          'placeholder': 'Add you Name',
          'required': true,
          'component': 'input',
        },
        {
          'label': 'Last Name',
          'type': 'string',
          'placeholder': 'Add your Last Name',
          'required': true,
          'component': 'input',
        },
      ],
    },
    {
      'title': 'Full registration',
      'fields': [
        {
          'label': 'First Name',
          'type': 'string',
          'placeholder': 'Your registration was successfully completed, one of our advisers will contact',
          'component': 'input',
        },
      ],
    },

  ],
};

export default form;
