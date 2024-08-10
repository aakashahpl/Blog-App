import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscirptionFormComponent } from './subscirption-form.component';

describe('SubscirptionFormComponent', () => {
  let component: SubscirptionFormComponent;
  let fixture: ComponentFixture<SubscirptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscirptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscirptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
