import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaosComponent } from './cartaos.component';

describe('CartaosComponent', () => {
  let component: CartaosComponent;
  let fixture: ComponentFixture<CartaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
