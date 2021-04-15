import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleArticuloEmpleadoPage } from './detalle-articulo-empleado.page';

describe('DetalleArticuloEmpleadoPage', () => {
  let component: DetalleArticuloEmpleadoPage;
  let fixture: ComponentFixture<DetalleArticuloEmpleadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleArticuloEmpleadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleArticuloEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
