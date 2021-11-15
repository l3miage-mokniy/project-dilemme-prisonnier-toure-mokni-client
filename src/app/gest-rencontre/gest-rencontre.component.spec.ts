import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestRencontreComponent } from './gest-rencontre.component';

describe('GestRencontreComponent', () => {
  let component: GestRencontreComponent;
  let fixture: ComponentFixture<GestRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestRencontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
