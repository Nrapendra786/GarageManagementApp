import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEducationComponent } from './index-education.component';

describe('IndexEducationComponent', () => {
  let component: IndexEducationComponent;
  let fixture: ComponentFixture<IndexEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
