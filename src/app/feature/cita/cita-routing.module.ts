import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './components/cita/cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EliminarCitaComponent } from './components/eliminar-cita/eliminar-cita.component';
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
        path: 'eliminar',
        component: EliminarCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
