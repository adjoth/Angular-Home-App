import { TestBed } from '@angular/core/testing';

import { HousingService } from './housing.service';
import type { HousingLocation } from './housing-location';

describe('HousingService', () => {
  let service: HousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Returns json data from getAllHousingLocations', async () => {
    const locations = await service.getAllHousingLocations();
    expect(locations.length).toBeGreaterThan(0);
    expect(locations[0].name).toBeDefined();
  });

  it('Returns json data from getHousingLocationById', async () => {
    const location : HousingLocation|undefined = await service.getHousingLocationById(1);
    expect(location).toBeDefined();
    expect(location?.id).toBeDefined();
    console.log(typeof location?.id)
    const val = parseInt(String(location?.id ?? '0'));
    expect(val).toBe(1);
  });
});
