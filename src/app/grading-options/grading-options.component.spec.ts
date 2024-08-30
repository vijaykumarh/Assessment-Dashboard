import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingOptionsComponent } from './grading-options.component';

describe('GradingOptionsComponent', () => {
  let component: GradingOptionsComponent;
  let fixture: ComponentFixture<GradingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradingOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
