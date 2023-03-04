import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Notes</span>,
  project: {
    link: 'https://github.com/KushajveerSingh/technical_notes',
  },
  docsRepositoryBase: 'https://github.com/KushajveerSingh/technical_notes/tree/main',
  footer: {
    text: <span>Copyright &copy; {new Date().getFullYear()} Kushajveer Singh</span>,
  },
  head: () => {
    return (
      <>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
};

export default config;
