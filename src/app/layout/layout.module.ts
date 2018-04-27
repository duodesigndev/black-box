import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FooterComponent } from "@app/layout/footer/footer.component"
import { HeaderComponent } from "@app/layout/header/header.component"
import { LayoutComponent } from "@app/layout/layout/layout.component"
import { QuickSidebarComponent } from "@app/layout/quick-sidebar/quick-sidebar.component"
import { ScrollTopComponent } from "@app/layout/scroll-top/scroll-top.component"
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    NavbarComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
