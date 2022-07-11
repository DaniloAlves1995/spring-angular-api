import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { GenderPipe } from './pipes/gender.pipe';



/*
  Import AppMaterialModule to import required modules from angular material together
  Export ErrorDialogComponent to be used by other modules
*/
@NgModule({
  declarations: [
    ErrorDialogComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    GenderPipe
  ]
})
export class SharedModule { }
