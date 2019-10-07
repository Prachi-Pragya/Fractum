import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractumComponent } from './fractum.component';

describe('FractumComponent', () => {
  let component: FractumComponent;
  let fixture: ComponentFixture<FractumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
