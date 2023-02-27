# Yup

We offered an officially adapter package for Yup: [React Happy Form Yup](https://github.com/react-earth/react-happy-form-yup).

## Install

```bash
npm install yup react-happy-form-yup
```

## Example

Here is an example for how to use React Happy Form Yup.

```tsx
import { useForm, native } from 'react-happy-form';
import { yupValidate } from 'react-happy-form-yup';
import { object, string, InferType } from 'yup';

// define Yup validate schema
const formSchema = object({
  firstName: string().required('File name is required'),
  lastName: string().required('Last name is required'),
  email: string().required('Email name is required'),
});

// get form values type from Yup schema
type FormValues = InferType<typeof formSchema>;

export const App = () => {
  const { field, submit, hasError, getError } = useForm<FormValues>({
    // use yupValidate for Yup schema
    onValidate: yupValidate(formSchema),
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
    isValidateOnTouched: true,
    isFocusOnValidateFailed: true,
  });

  return (
    <div>
      <h2>Yup - React Happy Form</h2>
      <form onSubmit={submit}>
        <input {...native(field('firstName'))} placeholder="First name" />
        {hasError('firstName') && <span>{getError('firstName')}</span>}
        <input {...native(field('lastName'))} placeholder="Last name" />
        {hasError('lastName') && <span>{getError('lastName')}</span>}
        <input {...native(field('email'))} placeholder="Email" />
        {hasError('email') && <span>{getError('email')}</span>}
        <button>Submit</button>
      </form>
    </div>
  );
};
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yup-xdpkjs)
