import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitaConsulta = `${environment.endpoint}/citas`;
  const apiEndpointCitas = `${environment.endpoint}/citas`;


  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const citaService: CitaService = TestBed.inject(CitaService);
    expect(citaService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const dummyCitas = [
      new Cita(1, 'nombre test', 41411, 1, 200, '21-09-2021 00:00:00'),
      new Cita(2, 'nombre test2', 41412, 1, 2002, '22-09-2021 00:00:00')
    ];
    service.consultar().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(apiEndpointCitaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });

  it('deberia crear una cita', () => {
    const dummyCita = new Cita(1, 'nombre test', 41411, 1, 200, '21-09-2021 00:00:00');
    service.guardar(dummyCita).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCitas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
