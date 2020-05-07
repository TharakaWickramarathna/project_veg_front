import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackListComponent } from './user-pack-list.component';

describe('UserPackListComponent', () => {
  let component: UserPackListComponent;
  let fixture: ComponentFixture<UserPackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
