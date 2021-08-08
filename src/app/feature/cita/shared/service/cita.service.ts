import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }

  public guardar(cita: Cita): Observable<any> {
    return this.http.doPost<Cita, boolean>(`${environment.endpoint}/citas`, cita,
                                                this.http.optsName('crear/actualizar citas'));
  }

  public eliminar(cita: Cita) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/citas/${cita.id}`,
                                                 this.http.optsName('eliminar cita'));
  }

  public actualizar(cita: Cita): Observable<any> {
    return this.http.doPut<Cita>(`${environment.endpoint}/citas/${cita.id}`, cita);

  }
}
