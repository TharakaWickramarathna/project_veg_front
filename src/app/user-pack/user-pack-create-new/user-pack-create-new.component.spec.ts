import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackCreateNewComponent } from './user-pack-create-new.component';

describe('UserPackCreateNewComponent', () => {
  let component: UserPackCreateNewComponent;
  let fixture: ComponentFixture<UserPackCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPackCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
