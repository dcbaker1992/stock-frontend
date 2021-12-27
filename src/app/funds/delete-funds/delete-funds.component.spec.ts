import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFundsComponent } from './delete-funds.component';

describe('DeleteFundsComponent', () => {
  let component: DeleteFundsComponent;
  let fixture: ComponentFixture<DeleteFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
