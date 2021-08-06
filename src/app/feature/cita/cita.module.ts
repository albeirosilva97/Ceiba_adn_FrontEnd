import { NgModule } from '@angular/core';

import { CitaRoutingModule } from './cita-routing.module';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EliminarCitaComponent } from './components/eliminar-cita/eliminar-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    CrearCitaComponent,
    EliminarCitaComponent,
    ListarCitaComponent,
    CitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule,
    MatTableModule
  ],
  providers: [CitaService]
})
export class CitaModule { }