# Chakra UI

We support popular UI library, e.g. Chakra UI, MUI, AntD...

## Example

Here is an example for how to use React Happy Form with Chakra UI.

```tsx
import { useForm, native, FormErrors, Path } from 'react-happy-form';
import { Button, Box, Heading, Input, Stack, Radio, Checkbox, Select } from '@chakra-ui/react';
import { FormItem } from './FormItem';

const RADIO_ITEMS = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

const CHECKBOX_ITEMS = [
  { label: 'Swimming', value: 'swimming' },
  { label: 'Running', value: 'running' },
];

const SELECT_ITEMS = [
  { label: 'Everyone can view', value: 'public' },
  { label: 'Your friends can view', value: 'friends' },
  { label: 'Only your can view', value: 'private' },
];

type FormValues = {
  name?: string;
  sex?: string;
  hobbies?: string[];
  privacy?: string;
};

export const ExampleForm = () => {
  const { field, submit, hasError, getError } = useForm<FormValues>({
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
    onValidate: (values: FormValues) => {
      const errors: FormErrors<FormValues> = new Map();
      if (!values.name) {
        errors.set('name', 'Name is required');
      }
      if (!values.hobbies || values.hobbies.length === 0) {
        errors.set('hobbies', 'Hobbies is required');
      }
      return errors;
    },
    isValidateOnTouched: true,
    isFocusOnValidateFailed: true,
  });

  return (
    <Box p="4">
      <form onSubmit={submit}>
        <Stack gap="4">
          <Heading textAlign="center">Example Form</Heading>
          <FormItem label="Name" required error={getError('name')}>
            {/* Input component */}
            <Input {...native(field('name'))} placeholder="Please enter your name" isInvalid={hasError('name')} />
          </FormItem>
          <FormItem label="Sex" required error={getError('sex')}>
            {/* Radio component */}
            <Stack direction="row" gap="2">
              {RADIO_ITEMS.map((item) => (
                <Radio
                  key={item.value}
                  {...native(field('sex'), {
                    type: 'radio',
                    value: item.value,
                    valueKey: 'isChecked',
                  })}
                  isInvalid={hasError('sex')}
                >
                  {item.label}
                </Radio>
              ))}
            </Stack>
          </FormItem>
          <FormItem label="Hobbies" required error={getError('hobbies')}>
            {/* Checkbox component */}
            <Stack direction="row" gap="2">
              {CHECKBOX_ITEMS.map((item) => (
                <Checkbox
                  key={item.value}
                  {...native(field('hobbies'), {
                    type: 'checkbox',
                    value: item.value,
                    valueKey: 'isChecked',
                  })}
                  isInvalid={hasError('hobbies')}
                >
                  {item.label}
                </Checkbox>
              ))}
            </Stack>
          </FormItem>
          <FormItem label="Privacy" required error={getError('privacy')}>
            {/* Select component */}
            <Select {...native(field('privacy'))} isInvalid={hasError('privacy')}>
              {SELECT_ITEMS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </FormItem>
          <Button colorScheme="green" onClick={submit}>
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-ta9vnp?file=ExampleForm.tsx)
