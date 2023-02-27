# Chakra UI

All Chakra UI form components are React Happy Form standard form component, so we don't need to do any adaptations!

## Example

Here is an example for how to use React Happy Form with Chakra UI.

```tsx
import { useForm, native, FormErrors } from 'react-happy-form';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  RadioGroup,
  HStack,
  Radio,
} from '@chakra-ui/react';

type FormValues = {
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: 'male' | 'female';
};

export const App = () => {
  const { field, submit, hasError, getError } = useForm<FormValues>({
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values));
    },
    onValidate: (values: FormValues) => {
      const formErrors: FormErrors<FormValues> = new Map();
      if (!values.firstName) {
        formErrors.set('firstName', 'First name is required');
      }
      if (!values.lastName) {
        formErrors.set('lastName', 'Last name is required');
      }
      if (!values.email) {
        formErrors.set('email', 'Email is required');
      }
      if (!values.gender) {
        formErrors.set('gender', 'Gender is required');
      }
      return formErrors;
    },
    isValidateOnTouched: true,
    isFocusOnValidateFailed: true,
  });

  return (
    <Box p="4">
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        Charkra UI - React Happy Form
      </Text>
      <form onSubmit={submit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={hasError('firstName')}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input id="firstName" {...native(field('firstName'))} />
            <FormErrorMessage>{getError('firstName')}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={hasError('lastName')}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input id="lastName" {...native(field('lastName'))} />
            <FormErrorMessage>{getError('lastName')}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={hasError('email')}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" {...native(field('email'))} />
            <FormErrorMessage>{getError('email')}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={hasError('gender')}>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <RadioGroup {...field('gender')}>
              <HStack spacing={4}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </HStack>
            </RadioGroup>
            <FormErrorMessage>{getError('gender')}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="green" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/chakra-ui-3682p6)
