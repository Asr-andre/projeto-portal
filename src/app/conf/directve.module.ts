import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraCpfCnpjDirective } from './mascaraCpfCnpj.directive';

const directive = [
  MascaraCpfCnpjDirective,
];

@NgModule({
  declarations: directive,
  imports: [CommonModule],
  exports: directive
})
export class DiretivasModule {}
