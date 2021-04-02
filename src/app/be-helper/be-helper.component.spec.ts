import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHelperComponent } from './be-helper.component';

describe('BeHelperComponent', () => {
  let component: BeHelperComponent;
  let fixture: ComponentFixture<BeHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
