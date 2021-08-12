import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitaPage } from '../page/producto/cita.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cita: CitaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cita = new CitaPage();
        browser.driver.manage().window().maximize();
    });
/*
    it('Deberia crear una cita', () => {
        const ID_PRODUCTO = '001';
        const DESCRIPCION_PRODUCTO = 'Cita de pruebas';

        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonCrearCitas();
        cita.ingresarId(ID_PRODUCTO);
        cita.ingresarDescripcion(DESCRIPCION_PRODUCTO);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });
*/
    it('Deberia listar citas', () => {
        page.navigateTo();
        browser.driver.sleep(2000);
        navBar.clickBotonCitas();
        browser.driver.sleep(2000);
        cita.clickBotonMatOpciones();
        browser.driver.sleep(2000);
        cita.clickBotonSeleccionarOpcion();
        browser.driver.sleep(2000);
        browser.waitForAngular();
        expect(2).toBe(cita.contarCitas());
    });
});
