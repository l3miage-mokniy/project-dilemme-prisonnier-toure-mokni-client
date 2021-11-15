import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRencontreComponent } from './join-rencontre.component';

describe('JoinRencontreComponent', () => {
  let component: JoinRencontreComponent;
  let fixture: ComponentFixture<JoinRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinRencontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
