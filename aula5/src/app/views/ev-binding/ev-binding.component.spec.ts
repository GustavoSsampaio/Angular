import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvBindingComponent } from './ev-binding.component';

describe('EvBindingComponent', () => {
  let component: EvBindingComponent;
  let fixture: ComponentFixture<EvBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
