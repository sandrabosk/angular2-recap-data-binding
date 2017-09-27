import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDataBindingComponent } from './mix-data-binding.component';

describe('MixDataBindingComponent', () => {
  let component: MixDataBindingComponent;
  let fixture: ComponentFixture<MixDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
