import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackEditComponent } from './user-pack-edit.component';

describe('UserPackEditComponent', () => {
  let component: UserPackEditComponent;
  let fixture: ComponentFixture<UserPackEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
