import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitaService } from '../../shared/service/cita.service';
import { Cita } from '../../shared/model/cita';
import { ServicioDeNotificaciones } from '@core/services/ServicioDeNotificaciones.service';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {

  cita: Cita = JSON.parse(localStorage.getItem('key'));
  citaForm: FormGroup;

  constructor(protected citaService: CitaService, private routes: Router, private notificacionesService: ServicioDeNotificaciones) {
  }

  ngOnInit(): void {
    this.validacionesFormularioCita();
  }

  guardar(cita: Cita) {
    this.citaService.actualizar(cita).subscribe(data => {
      this.cita = data;
      this.notificacionesService.mostrarMensajeDeConfirmacion('Actualizada');
      this.routes.navigate(['cita/listar']);
    });
  }

  private validacionesFormularioCita() {
    this.citaForm = new FormGroup({
      id: new FormControl(' ', [Validators.required]),
      idPersona: new FormControl(' ', [Validators.required]),
      nombre: new FormControl(' ', [Validators.required]),
      tipoServicio: new FormControl(' ', [Validators.required]),
      costoServicio: new FormControl(' ', [Validators.required]),
      fechaCita: new FormControl(' ', [Validators.required])
    });
  }

}
