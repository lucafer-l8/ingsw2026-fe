import { TestBed } from '@angular/core/testing';
import { GamingTableService } from './gaming-table.service';

describe('SampleEntityService', () => {
  let service: GamingTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamingTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
