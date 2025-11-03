import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('VehicleListComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, VehiclesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
        fixture.destroy();
    });

    it('debería crear el componente', () => {
        expect(component).toBeTruthy();
    });

  it('debería crear la tabla correctamente con tres filas más el encabezado', () => {
    component.vehicles = [
      {
        id: 1, marca: 'Renault', linea: 'Kangoo', modelo: '2017', referencia: '', kilometraje: 0, color: '', imagen: '' },
      { id: 2, marca: 'Chevrolet', linea: 'Spark', modelo: '2018', referencia: '', kilometraje: 0, color: '', imagen: '' },
      { id: 3, marca: 'Chevrolet', linea: 'Sail', modelo: '2016', referencia: '', kilometraje: 0, color: '', imagen: '' }
    ];

    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('table tbody tr'));

    const header = fixture.debugElement.queryAll(By.css('table thead tr th'));

    expect(rows.length).toBe(3);

    expect(header.length).toBeGreaterThan(0);
  });
});
