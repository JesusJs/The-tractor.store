import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsCartCounter } from './ts-cart-counter';

describe('TsCartCounter', () => {
  let component: TsCartCounter;
  let fixture: ComponentFixture<TsCartCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsCartCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(TsCartCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
