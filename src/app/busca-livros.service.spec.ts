import { TestBed } from '@angular/core/testing';

import { BuscaLivrosService } from './busca-livros.service';

describe('BuscaLivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaLivrosService = TestBed.get(BuscaLivrosService);
    expect(service).toBeTruthy();
  });
});
