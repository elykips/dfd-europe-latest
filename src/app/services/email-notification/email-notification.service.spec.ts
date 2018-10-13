import { TestBed, inject } from '@angular/core/testing';

import { EmailNotificationService } from './email-notification.service';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailNotificationService]
    });
  });

  it('should be created', inject([EmailNotificationService], (service: EmailNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
