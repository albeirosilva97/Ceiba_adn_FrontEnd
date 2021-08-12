import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioDeNotificaciones } from '@core/services/ServicioDeNotificaciones.service';
import { of } from 'rxjs';
import { CitaService } from '../../shared/service/cita.service';

import { CrearCitaComponent } from './crear-cita.component';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CitaService, HttpService, ServicioDeNotificaciones],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citaForm.valid).toBeFalsy();
  });

});
