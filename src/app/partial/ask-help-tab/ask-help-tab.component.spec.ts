import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskHelpTabComponent } from './ask-help-tab.component';

describe('AskHelpTabComponent', () => {
  let component: AskHelpTabComponent;
  let fixture: ComponentFixture<AskHelpTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskHelpTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskHelpTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
