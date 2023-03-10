/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentSidebar: [
    'document/quick-start',
    'document/standard-form-component',
    'document/form-validation',
    {
      'Third-party Integrations': [
        'document/third-party-integrations/chakra-ui',
        'document/third-party-integrations/yup',
      ],
    },
  ],
  apiSidebar: ['api/use-form', 'api/use-form-context', 'api/native'],
};

module.exports = sidebars;
