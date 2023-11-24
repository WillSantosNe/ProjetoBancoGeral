import { TestBed } from '@angular/core/testing';

import { MovimentacaosService } from './movimentacaos.service';

describe('MovimentacaosService', () => {
  let service: MovimentacaosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacaosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
