import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayRencontreComponent } from './play-rencontre.component';

describe('PlayRencontreComponent', () => {
  let component: PlayRencontreComponent;
  let fixture: ComponentFixture<PlayRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayRencontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
