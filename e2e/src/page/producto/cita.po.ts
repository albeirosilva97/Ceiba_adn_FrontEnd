import { by, element } from 'protractor';

export class CitaPage {
    private linkCrearCita = element(by.id('linkCrearCita'));
    private linkListarCitas = element(by.id('linkListarCitas'));
    private linkOpcionesMatSelect = element(by.id('opciones'));
    private seleccionarOpcion = element(by.cssContainingText('mat-option .mat-option-text', 'listar citas'));
    private inputIdCita = element(by.id('idProducto'));
    private inputDescripcionCita = element(by.id('descripcionProducto'));
    private listaCitas = element.all(by.css('mat-table mat-row'));

    async clickBotonCrearCitas() {
        await this.linkCrearCita.click();
    }

    async clickBotonListarCitas() {
        await this.linkListarCitas.click();
    }
    async clickBotonMatOpciones() {
        await this.linkOpcionesMatSelect.click();
    }
    async clickBotonSeleccionarOpcion() {
        await this.seleccionarOpcion.click();
    }

    async ingresarId(idCita) {
        await this.inputIdCita.sendKeys(idCita);
    }

    async ingresarDescripcion(descripcionProducto) {
        await this.inputDescripcionCita.sendKeys(descripcionProducto);
    }

    async contarCitas() {
        console.log( this.listaCitas.values());
        return this.listaCitas.count();
    }
}
