import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantUsComponent } from './contant-us.component';

describe('ContantUsComponent', () => {
  let component: ContantUsComponent;
  let fixture: ComponentFixture<ContantUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContantUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
