import { TestBed } from '@angular/core/testing';

import { CartaosService } from './cartaos.service';

describe('CartaosService', () => {
  let service: CartaosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartaosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
