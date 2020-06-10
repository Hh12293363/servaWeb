import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryfyInfoComponent } from './veryfy-info.component';

describe('VeryfyInfoComponent', () => {
  let component: VeryfyInfoComponent;
  let fixture: ComponentFixture<VeryfyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryfyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryfyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
