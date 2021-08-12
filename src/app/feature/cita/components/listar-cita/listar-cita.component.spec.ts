import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioDeNotificaciones } from '@core/services/ServicioDeNotificaciones.service';
import { of } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

import { ListarCitaComponent } from './listar-cita.component';

describe('ListarCitaComponent', () => {
  let component: ListarCitaComponent;
  let fixture: ComponentFixture<ListarCitaComponent>;
  let citaService: CitaService;
  const listaCitas: Cita[] = [new Cita(1, 'nombre test', 41411, 1, 200, '21-09-2021 00:00:00'),
  new Cita(2, 'nombre test2', 41412, 1, 2002, '22-09-2021 00:00:00')];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCitaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService, ServicioDeNotificaciones]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'consultar').and.returnValue(
      of(listaCitas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.dataSource.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
