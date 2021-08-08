import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';


const routes: Routes = [
  {
    path: '',
    component: CitaComponent,
    children: [
      {
        path: 'crear',
        component: CrearCitaComponent
      },
      {
        path: 'listar',
        component: ListarCitaComponent
      },
      {
        path: 'editar',
        component: ActualizarCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
