import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { GalleriaModule } from 'primeng/galleria';
import { SpeedDialModule } from 'primeng/speeddial';
import { CardModule } from 'primeng/card';
import { CasetonComponent } from './productos/aligerantes/caseton/caseton.component';
import { InsertosBlockComponent } from './productos/aligerantes/insertos-block/insertos-block.component';
import { PerlitaComponent } from './productos/aligerantes/perlita/perlita.component';
import { TooltipModule } from 'primeng/tooltip';
import {Table, TableModule} from 'primeng/table';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {FieldsetModule} from 'primeng/fieldset';
import {AccordionModule} from 'primeng/accordion';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ListboxModule} from 'primeng/listbox';
import {DividerModule} from 'primeng/divider';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import * as $ from 'jquery';
import { CuboIntegradoComponent } from './productos/aislantes/cubo-integrado/cubo-integrado.component';
import { MediaCanaComponent } from './productos/aislantes/media-cana/media-cana.component';
import { RShieldComponent } from './productos/aislantes/r-shield/r-shield.component';
import { PanelComponent } from './productos/sistemas-constructivos-aislantes/panel/panel.component';
import { AmvicComponent } from './productos/sistemas-constructivos-aislantes/amvic/amvic.component';
import { BovedillaAaComponent } from './productos/sistemas-constructivos-aislantes/bovedilla-aa/bovedilla-aa.component';
import { BovedillaEComponent } from './productos/sistemas-constructivos-aislantes/bovedilla-e/bovedilla-e.component';
import { GeosystemComponent } from './productos/sistemas-constructivos-aislantes/geosystem/geosystem.component';
import { PlafonComponent } from './productos/decorativos/plafon/plafon.component';
import { MoldurasComponent } from './productos/decorativos/molduras/molduras.component';
import { HieleraComponent } from './productos/cadena-fria/hielera/hielera.component';
import { AlfaboxComponent } from './productos/cadena-fria/alfabox/alfabox.component';
import { UbicacionContactoComponent } from './ubicacion-contacto/ubicacion-contacto.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../../environments/environment';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import {ImageModule} from 'primeng/image';
import { ClimateComponent } from './productos/aislantes/climate/climate.component';
import { EppComponent } from './materiales/epp/epp.component';
import { EpsComponent } from './materiales/eps/eps.component';
import { ArcelComponent } from './materiales/arcel/arcel.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { AlfatermComponent } from './productos/aislantes/alfaterm/alfaterm.component';
import { BovedillaAComponent } from './productos/sistemas-constructivos-aislantes/bovedilla-a/bovedilla-a.component';
import { MoldeoComponent } from './productos/aplicacion-especial/moldeo/moldeo.component';
import { AgriculturaComponent } from './productos/aplicacion-especial/agricultura/agricultura.component';

@NgModule({
  declarations: [
    HomeComponent,
    CasetonComponent,
    InsertosBlockComponent,
    PerlitaComponent,
    CuboIntegradoComponent,
    MediaCanaComponent,
    RShieldComponent,
    PanelComponent,
    AmvicComponent,
    BovedillaAaComponent,
    BovedillaEComponent,
    GeosystemComponent,
    PlafonComponent,
    MoldurasComponent,
    HieleraComponent,
    AlfaboxComponent,
    UbicacionContactoComponent,
    ContactoComponent,
    BlogComponent,
    PostComponent,
    ClimateComponent,
    EppComponent,
    EpsComponent,
    ArcelComponent,
    BeneficiosComponent,
    AlfatermComponent,
    BovedillaAComponent,
    BovedillaAComponent,
    AlfatermComponent,
    MoldeoComponent,
    AgriculturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    BrowserAnimationsModule,
    TabViewModule,
    GalleriaModule,
    CardModule,
    SpeedDialModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RecaptchaV3Module,
    TableModule,
    VirtualScrollerModule,
    FieldsetModule,
    AccordionModule,
    ScrollPanelModule,
    ListboxModule,
    DividerModule,
    DialogModule,
    MessageModule,
    MessagesModule,
    ImageModule,
  ],
  exports: [
    HomeComponent,
    CasetonComponent,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    }
  ]
})
export class PagesModule { }
