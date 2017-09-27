import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubComponent } from './my-sub.component';

describe('MySubComponent', () => {
  let component: MySubComponent;
  let fixture: ComponentFixture<MySubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
