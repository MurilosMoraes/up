import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorridasPage } from './corridas.page';

describe('CorridasPage', () => {
  let component: CorridasPage;
  let fixture: ComponentFixture<CorridasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorridasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorridasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
