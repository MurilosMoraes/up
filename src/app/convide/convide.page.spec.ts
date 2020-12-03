import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvidePage } from './convide.page';

describe('ConvidePage', () => {
  let component: ConvidePage;
  let fixture: ComponentFixture<ConvidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
