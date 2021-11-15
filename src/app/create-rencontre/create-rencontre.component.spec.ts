import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRencontreComponent } from './create-rencontre.component';

describe('CreateRencontreComponent', () => {
  let component: CreateRencontreComponent;
  let fixture: ComponentFixture<CreateRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRencontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
