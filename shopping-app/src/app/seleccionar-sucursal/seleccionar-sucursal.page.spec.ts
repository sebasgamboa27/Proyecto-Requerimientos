import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionarSucursalPage } from './seleccionar-sucursal.page';

describe('SeleccionarSucursalPage', () => {
  let component: SeleccionarSucursalPage;
  let fixture: ComponentFixture<SeleccionarSucursalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarSucursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionarSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
