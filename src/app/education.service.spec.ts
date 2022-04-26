import { TestBed } from '@angular/core/testing';
import { EducationModel } from './education-model';

import { EducationService } from './education.service';

describe('EducationService', () => {
  let service: EducationService;

  const education: EducationModel = {
    educationId: 1,
    isbn: '299292',
    title: '02022',
    author: '020202020',
    shortDescription: '292992',
    nodeIds: []
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationService);
    service.create(education);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
