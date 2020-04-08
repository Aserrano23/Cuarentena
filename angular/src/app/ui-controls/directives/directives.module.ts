import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './menu-dropdown/dropdown.directive';
import { DropdowntoggleDirective } from './menu-dropdown/dropdowntoggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective,
    DropdowntoggleDirective
  ],
  exports: [
    DropdownDirective,
    DropdowntoggleDirective
  ]
})
export class DirectivesModule { }
