import { NgModule } from '@angular/core';

import { CitaRoutingModule } from './cita-routing.module';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';


@NgModule({
  declarations: [
    CrearCitaComponent,
    ListarCitaComponent,
    CitaComponent,
    ActualizarCitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [CitaService]
})
export class CitaModule { }
