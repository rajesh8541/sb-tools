import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCase64Component } from './image-case64.component';

describe('ImageCase64Component', () => {
  let component: ImageCase64Component;
  let fixture: ComponentFixture<ImageCase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCase64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
