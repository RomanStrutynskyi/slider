// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
// ------------------------------
// Imports
// ------------------------------

import $ from 'jquery';
// export for others scripts to use
window.$ = $;


// Modules
// import Link from './../_modules/molecules/menu/menu';

// Organisms
import Slider from './../_modules/organisms/slider/slider'
import Tabby from './../_modules/organisms/rangle-tabs/rangle-tabs'

// ------------------------------
// Additional functionality
// ------------------------------

// Crossbrowser plugin for icons
import svg4everybody from 'svg4everybody/dist/svg4everybody.legacy.js';
svg4everybody();

// Data pages
let currentPage = $('body').data('page');

// ------------------------------
// Initialization modules
// ------------------------------

$(() => {
  // Common scripts

  // Home page scripts
  new Slider();
  new Tabby();
  // if (currentPage === pages.home.name) {
  //   new Link();
  // }
});
