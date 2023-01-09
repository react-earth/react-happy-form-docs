# Form Validation

React Happy Form support form validation, also can set form validation interactions:

- Validate after form component touched (before submit).
- Auto-focus first validate failed form component.

## How To Use Form Validation

You can enable form validation by set useForm hook onValidate handler, also you can on/off validation interactions by set isValidateOnTouched & isFocusOnValidateFailed.

```tsx
// use hasError, getError to get field error message
const { field, hasError, getError } = useForm<FormValues>({
  // enable form validation
  onValidate: (values: FormValues) => {
    const formErrors: FormErrors<FormValues> = new Map();
    // handle form validation logic...
    return formErrors;
  },
  // enable validation interactions
  isValidateOnTouched: true,
  isFocusOnValidateFailed: true,
});
```

## Example

Here is an example for how to use form validation:

```tsx
import { useForm, native, FormErrors } from 'react-happy-form';

// define your form values type
type FormValues = {
  email?: string;
  password?: string;
};

export const ExampleForm = () => {
  const { field, submit, hasError, getError } = useForm<FormValues>({
    // handle form validate
    onValidate: (values: FormValues) => {
      const formErrors: FormErrors<FormValues> = new Map();
      if (!values.email) {
        formErrors.set('email', 'Email is required');
      }
      if (!values.password) {
        formErrors.set('password', 'Password is required');
      }
      return formErrors;
    },
    // handle form submit
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
    // enable validation interactions
    isValidateOnTouched: true,
    isFocusOnValidateFailed: true,
  });

  return (
    <div>
      <h2>Example Form</h2>
      <form onSubmit={submit}>
        {/* use built-in native wrapper for native input elements */}
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

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-xfcu48?file=ExampleForm.tsx)
