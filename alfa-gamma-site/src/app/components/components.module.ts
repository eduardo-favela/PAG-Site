import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { WppFloatingComponent } from './wpp-floating/wpp-floating.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    WppFloatingComponent,
    ContactCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MenubarModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    DialogModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    WppFloatingComponent,
    ContactCardComponent,
  ]
})
export class ComponentsModule { }
