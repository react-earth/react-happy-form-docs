# Standard Form Component

We defined standard form component to provide developers with a consistent development experience across different UI libraries.

## Standard Form Component Props

A standard form component should have following props:

```ts
type StandardFormComponentProps = {
  value: any; // form component state
  onChange: (value: any) => void; // change form component state

  /**
   * following props is optional
   * you can implement it if you want to have better validation interactions
   */
  onBlur?: () => void; // determine if form component is touched
  ref?: any; // store form component ref use for auto-focus when validate failed
};
```

## Convert To Standard Form Component

Most of React UI library's form components conforms to standard form component.

Covert non-conforming form component to standard form component:

- For native or native-like form component, you can use built-in [native](/docs/api/native) wrapper.
- For other components, you can add a simple wrapper, or use official or third-party adapter library, i.e. [MUI integration](/docs/document/third-party-integrations/chakra-ui).
