import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDirective} from "./directives/dropdown.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective
  ],
  declarations: [
    DropdownDirective
  ]
})
export class SharedModule {
}
