import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaLoaderComponent } from './da-loader.component';
import { DaLoaderService } from './da-loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DaLoaderComponent],
  providers: [DaLoaderService],
  declarations: [DaLoaderComponent],
})

export class DaLoaderModule {}

