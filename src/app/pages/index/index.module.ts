import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { LayoutModule } from '@app/layout/layout.module'

import { IndexComponent } from './index.component'
import { FooterComponent } from '@app/layout/footer/footer.component'

const routes: Routes = [
  {
    "path": "",
    "component": FooterComponent,
    "children": [
      {
        "path": "",
        "component": IndexComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
