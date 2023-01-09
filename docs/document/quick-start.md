# Quick Start

React Happy Form is a form state manage library, which is Simple, Easy to use, Powerful!

[Click here to quick preview!](https://react-happy-form.onrender.com)

## Install

```bash
npm install react-happy-form
```

## Example

Let's use React Happy Form to build your first form!

```tsx
import { useForm, native } from 'react-happy-form';

// define your form values type
type FormValues = {
  email?: string;
  password?: string;
};

export const ExampleForm () => {
  const { field, submit } = useForm<FormValues>({
    // handle form submit
    onSubmit: (values: FormValues) => {
      console.log(values);
    }
  });

  return (
    <div>
      <h2>Example Form</h2>
      <form onSubmit={submit}>
        {/* use built-in native wrapper for native input elements */}
        <input {...native(field('email'))} placeholder="Enter email" />
        <input
          {...native(field('password'))}
          type="password"
          placeholder="Enter password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-thrfw4?file=ExampleForm.tsx)
