import { TestBed } from '@angular/core/testing';

import { MainMenuControllerService } from './main-menu-controller.service';

describe('MainMenuControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainMenuControllerService = TestBed.get(MainMenuControllerService);
    expect(service).toBeTruthy();
  });
});
