# Yup

We offered an officially adapter package for Yup: [React Happy Form Yup](https://github.com/react-earth/react-happy-form-yup).

## Install

```bash
npm install react-happy-form-yup
```

## Example

Here is an example for how to use React Happy Form Yup.

```tsx
import { useForm, native } from 'react-happy-form';
import { yupValidate } from 'react-happy-form-yup';
import { object, string, InferType } from 'yup';

// define Yup validate schema
const formSchema = object({
  email: string().required(),
  password: string().required(),
});

// get form values type from Yup schema
type FormValues = InferType<typeof formSchema>;

export const ExampleForm = () => {
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
      <h2>Example Form</h2>
      <form onSubmit={submit}>
        <input {...native(field('email'))} placeholder="Enter email" />
        {hasError('email') && <div>{getError('email')}</div>}
        <input {...native(field('password'))} type="password" placeholder="Enter password" />
        {hasError('password') && <div>{getError('password')}</div>}
        <button>Login</button>
      </form>
    </div>
  );
};
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-abwkag?file=ExampleForm.tsx)
