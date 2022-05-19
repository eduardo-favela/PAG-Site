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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
