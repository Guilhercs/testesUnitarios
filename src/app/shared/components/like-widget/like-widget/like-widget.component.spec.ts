import { UniqueIdService } from './../../../services/unique-id/unique-id.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent>  = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy()
  });
});
