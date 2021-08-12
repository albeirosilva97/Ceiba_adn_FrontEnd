import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class ServicioDeNotificaciones {

  constructor() { }

  mostrarAlertaDeConfirmacionEliminar() {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    });
  }

  mostrarMensajeDeConfirmacion(operacion: string): void {
    Swal.fire(
      operacion,
      'La cita fue ' + operacion + ' con éxito',
      'success'
    );
  }

  mostrarMensajeDeError(mensaje: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Ocurrió un error',
      text: mensaje
    });
  }

}
