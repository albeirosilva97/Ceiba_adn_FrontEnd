import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioDeNotificaciones } from '@core/services/ServicioDeNotificaciones.service';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

const LONGITUD_MINIMA_DOCUMENTO_RESERVANTE = 7;
const LONGITUD_MAXIMA_DOCUMENTO_RESERVANTE = 10;
const LONGITUD_MINIMA_NOMBRE_RESERVATE = 8;
const LONGITUD_MAXIMA_NOMBRE_RESERVANTE = 60;

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  citaForm: FormGroup;
  cita: Cita = new Cita(null,null,null,null,null,null);
  constructor(protected citaService: CitaService, private routes: Router, private notificacionesService: ServicioDeNotificaciones) { }

  ngOnInit(): void {
    this.validacionesFormularioCita();
  }

  guardar(cita: Cita) {
    cita.fechaCita = cita.fechaCita.replace("T", " ");
    cita.fechaCita = cita.fechaCita.concat(":00");
    this.citaService.guardar(cita).subscribe(data => {
      console.log(data);
      this.notificacionesService.mostrarMensajeDeConfirmacion('Creada');
      this.routes.navigate(['cita/listar']);
    }
    );
  }

  private validacionesFormularioCita() {
    this.citaForm = new FormGroup({
      idPersona: new FormControl('', [Validators.required,
      Validators.minLength(LONGITUD_MINIMA_DOCUMENTO_RESERVANTE),
      Validators.maxLength(LONGITUD_MAXIMA_DOCUMENTO_RESERVANTE)]),
      nombre: new FormControl('', [Validators.required,
      Validators.minLength(LONGITUD_MINIMA_NOMBRE_RESERVATE),
      Validators.maxLength(LONGITUD_MAXIMA_NOMBRE_RESERVANTE)]),
      tipoServicio: new FormControl('', [Validators.required]),
      fechaCita: new FormControl('', [Validators.required])
    });
  }

}
