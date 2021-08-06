import { Component, OnInit } from '@angular/core';
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

  constructor(protected citaService: CitaService) { }

  ngOnInit(): void {
    this.dataSource = this.citaService.consultar();
  }

}
