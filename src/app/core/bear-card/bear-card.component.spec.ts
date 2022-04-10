import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearCardComponent } from './bear-card.component';

describe('BearCardComponent', () => {
  let component: BearCardComponent;
  let fixture: ComponentFixture<BearCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
