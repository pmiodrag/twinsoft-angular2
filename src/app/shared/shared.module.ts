import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
// common page components
import { NavbarComponent } from './navbar/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule.forRoot()],
  declarations: [ NavbarComponent],
  exports: [ NavbarComponent,
    CommonModule, FormsModule, RouterModule],
     schemas:   [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
