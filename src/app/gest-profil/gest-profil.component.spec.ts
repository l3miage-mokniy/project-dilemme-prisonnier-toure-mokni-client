import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestProfilComponent } from './gest-profil.component';

describe('GestProfilComponent', () => {
  let component: GestProfilComponent;
  let fixture: ComponentFixture<GestProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
