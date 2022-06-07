import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CasetonComponent } from './pages/productos/aligerantes/caseton/caseton.component';
import { PerlitaComponent } from './pages/productos/aligerantes/perlita/perlita.component';
import { InsertosBlockComponent } from './pages/productos/aligerantes/insertos-block/insertos-block.component';
import { CuboIntegradoComponent } from './pages/productos/aislantes/cubo-integrado/cubo-integrado.component';
import { MediaCanaComponent } from './pages/productos/aislantes/media-cana/media-cana.component';
import { PanelComponent } from './pages/productos/sistemas-constructivos-aislantes/panel/panel.component';
import { GeosystemComponent } from './pages/productos/sistemas-constructivos-aislantes/geosystem/geosystem.component';
import { BovedillaEComponent } from './pages/productos/sistemas-constructivos-aislantes/bovedilla-e/bovedilla-e.component';
import { BovedillaAaComponent } from './pages/productos/sistemas-constructivos-aislantes/bovedilla-aa/bovedilla-aa.component';
import { AmvicComponent } from './pages/productos/sistemas-constructivos-aislantes/amvic/amvic.component';
import { PlafonComponent } from './pages/productos/decorativos/plafon/plafon.component';
import { MoldurasComponent } from './pages/productos/decorativos/molduras/molduras.component';
import { HieleraComponent } from './pages/productos/cadena-fria/hielera/hielera.component';
import { UbicacionContactoComponent } from './pages/ubicacion-contacto/ubicacion-contacto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component'
import { ClimateComponent } from './pages/productos/aislantes/climate/climate.component';
import { EppComponent } from './pages/materiales/epp/epp.component';
import { EpsComponent } from './pages/materiales/eps/eps.component';
import { ArcelComponent } from './pages/materiales/arcel/arcel.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { BovedillaAComponent } from './pages/productos/sistemas-constructivos-aislantes/bovedilla-a/bovedilla-a.component';
import { AlfatermComponent } from './pages/productos/aislantes/alfaterm/alfaterm.component';
import { MoldeoComponent } from './pages/productos/aplicacion-especial/moldeo/moldeo.component';
import { AgriculturaComponent } from './pages/productos/aplicacion-especial/agricultura/agricultura.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aligerantes/caseton',
    component: CasetonComponent
  },
  {
    path: 'aligerantes/perlita',
    component: PerlitaComponent
  },
  {
    path: 'aligerantes/insertos-block',
    component: InsertosBlockComponent
  },
  {
    path: 'aislantes/cubo-integrado',
    component: CuboIntegradoComponent
  },
  {
    path: 'aislantes/media-cana',
    component: MediaCanaComponent
  },
  {
    path: 'aislantes/climate',
    component: ClimateComponent
  },
  {
    path: 'aislantes/alfaterm',
    component: AlfatermComponent
  },
  {
    path: 'sistemas-constructivos-aislantes/panel',
    component: PanelComponent
  },
  {
    path: 'sistemas-constructivos-aislantes/geosystem',
    component: GeosystemComponent
  },
  {
    path: 'sistemas-constructivos-aislantes/bovedilla-e',
    component: BovedillaEComponent
  },
  {
    path: 'sistemas-constructivos-aislantes/bovedilla-aa',
    component: BovedillaAaComponent
  },
  {
    path: 'sistemas-constructivos-aislantes/amvic',
    component: AmvicComponent
  },
  {
    path:'sistemas-constructivos-aislantes/bovedilla-a',
    component:BovedillaAComponent
  },
  {
    path: 'decorativos/plafon',
    component: PlafonComponent
  },
  {
    path: 'decorativos/molduras',
    component: MoldurasComponent
  },
  {
    path: 'cadena-fria/hielera',
    component: HieleraComponent
  },
  {
    path: 'aplicacion-especial/moldeo',
    component: MoldeoComponent
  },
  {
    path: 'aplicacion-especial/agricultura',
    component: AgriculturaComponent
  },
  {
    path:'epp',
    component: EppComponent
  },
  {
    path: 'eps',
    component: EpsComponent
  },
  {
    path: 'arcel',
    component: ArcelComponent
  },
  {
    path: 'beneficios',
    component: BeneficiosComponent
  },
  {
    path: 'ubicacion-contacto',
    component: UbicacionContactoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'post/:idPost',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
