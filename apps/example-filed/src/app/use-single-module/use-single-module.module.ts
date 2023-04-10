import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { UseSingleModuleComponent } from './use-single-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UseSingleModuleComponent, ChildComponentComponent]
})
export class UseSingleModuleModule { }
