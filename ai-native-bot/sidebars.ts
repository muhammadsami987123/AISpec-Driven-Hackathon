import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manually defined sidebar to present Introduction first and Chapters next
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'CH2 - Physical AI Foundations',
      collapsed: false,
      items: [
        'chapters/chapter-2/chapter-2-index',
        'chapters/chapter-2/chapter-2-three-pillars',
        'chapters/chapter-2/chapter-2-pda-loop',
        'chapters/chapter-2/chapter-2-tools-overview',
      ],
    },
    {
      type: 'category',
      label: 'CH1 - Physical AI',
      collapsed: false,
      items: [
        'chapters/chapter-1/chapter-1-what-is-physical-ai',
        'chapters/chapter-1/chapter-1-why-humanoids',
        'chapters/chapter-1/chapter-1-embodied-intelligence',
        'chapters/chapter-1/chapter-1-three-pillars',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
