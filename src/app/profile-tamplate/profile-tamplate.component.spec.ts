import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTamplateComponent } from './profile-tamplate.component';

describe('ProfileTamplateComponent', () => {
  let component: ProfileTamplateComponent;
  let fixture: ComponentFixture<ProfileTamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTamplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
