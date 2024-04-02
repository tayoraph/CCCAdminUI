import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/ccc/ccclogo.png"
          class="align-middle m-2 logo"
          alt="logo"
        /> 
      </a>
      CCC Bible Lesson
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
