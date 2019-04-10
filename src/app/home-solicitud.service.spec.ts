import { TestBed } from '@angular/core/testing';

import { HomeSolicitudService } from './home-solicitud.service';

describe('HomeSolicitudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeSolicitudService = TestBed.get(HomeSolicitudService);
    expect(service).toBeTruthy();
  });
});
