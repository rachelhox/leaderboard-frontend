/* eslint-disable*/
import * as createPalette from '@mui/material/styles/createPalette';
 
// create custom palette
declare module '@mui/material/styles/createPalette' {
   interface Custom {
   }
   interface PaletteOptions {
      condition: {
        zero: string
        one: string
        two: string
        three: string
      }
       custom?: Custom;
   }
   interface Palette {
      condition: {
        zero: string
        one: string
        two: string
        three: string
      }
       custom: Custom;
   }
}
 
// create custom breakpoints
declare module '@mui/material/styles' {
   interface BreakpointOverrides {
     xs: false; // removes the `xs` breakpoint
     sm: false;
     md: false;
     lg: false;
     xl: false;
     mobile: true; // adds the `mobile` breakpoint
     tablet: true;
     laptop: true;
     desktop: true;
   }
 }

 