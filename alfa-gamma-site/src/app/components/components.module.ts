import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { WppFloatingComponent } from './wpp-floating/wpp-floating.component';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    WppFloatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MenubarModule,
    TabViewModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    WppFloatingComponent
  ]
})
export class ComponentsModule { }
