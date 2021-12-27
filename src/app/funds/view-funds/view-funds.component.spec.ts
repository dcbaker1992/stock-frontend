import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFundsComponent } from './view-funds.component';

describe('ViewFundsComponent', () => {
  let component: ViewFundsComponent;
  let fixture: ComponentFixture<ViewFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
