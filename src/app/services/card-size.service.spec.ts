import { TestBed } from '@angular/core/testing';

import { CardSizeService } from './card-size.service';

describe('CardSizeService', () => {
  let service: CardSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
