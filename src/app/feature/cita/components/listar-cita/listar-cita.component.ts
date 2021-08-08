import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioDeNotificaciones } from '@core/services/ServicioDeNotificaciones.service';
import { Observable } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  public dataSource: Observable<Cita[]>;
  displayedColumns: string[] = ['id', 'nombre', 'idPersona', 'tipoServicio', 'costoServicio', 'fechaCita', 'accion'];

  constructor(protected citaService: CitaService, private routes: Router, private notificacionesService:ServicioDeNotificaciones) { }

  ngOnInit(): void {
    this.dataSource = this.citaService.consultar();
  }

  eliminar(cita: Cita) {
    this.notificacionesService.mostrarAlertaDeConfirmacionEliminar().then((result) => {
      if (result.isConfirmed) {
        this.citaService.eliminar(cita).subscribe(data => {
          console.log(data);
          this.routes.navigate(["cita"]);
        });
        this.notificacionesService.mostrarMensajeDeConfirmacion('Eliminada');
      }
    })
  }
  editar(cita:Cita){
    localStorage.setItem("key", JSON.stringify(cita));
    this.routes.navigate(['editar']);
  }
  convertirTipoServicio(tipoServicio:number){
      if(tipoServicio == 1){
        return 'Servicio de salud oral';
      }
      if(tipoServicio == 2){
        return 'Servicio médico general';
      }
      if(tipoServicio == 3){
        return 'Servicio especializado';
      }
  }
}
