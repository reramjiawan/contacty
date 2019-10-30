import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyComponent } from './component/empty/component/empty/empty.component';
import { EmptyModule } from './component/empty/empty.module';
import { FormErrorComponent } from './component/form/component/form-error/form-error.component';
import { FormModule } from './component/form/form.module';
import { HighlightPipe } from './pipe/highlight.pipe';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormModule,
    PipeModule,
    EmptyModule
  ],
  exports: [
    FormErrorComponent,
    HighlightPipe,
    EmptyComponent
  ]
})
export class SharedModule {
}
