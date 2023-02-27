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
  firstName?: string;
  lastName?: string;
  email?: string;
};

export const App = () => {
  const { field, submit } = useForm<FormValues>({
    // handle form submit
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <h2>Example Form</h2>
      <form onSubmit={submit}>
        {/* use built-in native wrapper for native elements */}
        <input {...native(field('firstName'))} placeholder="First name" />
        <input {...native(field('lastName'))} placeholder="Last name" />
        <input {...native(field('email'))} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
};
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/quick-start-prh3xj)
