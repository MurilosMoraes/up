import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirijaPage } from './dirija.page';

describe('DirijaPage', () => {
  let component: DirijaPage;
  let fixture: ComponentFixture<DirijaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirijaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirijaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
