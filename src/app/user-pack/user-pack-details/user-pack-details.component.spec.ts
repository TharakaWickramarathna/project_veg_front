import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackDetailsComponent } from './user-pack-details.component';

describe('UserPackDetailsComponent', () => {
  let component: UserPackDetailsComponent;
  let fixture: ComponentFixture<UserPackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
