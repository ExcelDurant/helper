import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHelperComponent } from './single-helper.component';

describe('SingleHelperComponent', () => {
  let component: SingleHelperComponent;
  let fixture: ComponentFixture<SingleHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
