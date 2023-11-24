import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaosComponent } from './movimentacaos.component';

describe('MovimentacaosComponent', () => {
  let component: MovimentacaosComponent;
  let fixture: ComponentFixture<MovimentacaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentacaosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentacaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
