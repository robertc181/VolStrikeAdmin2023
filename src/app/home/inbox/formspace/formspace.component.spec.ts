import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspaceComponent } from './formspace.component';

describe('FormspaceComponent', () => {
  let component: FormspaceComponent;
  let fixture: ComponentFixture<FormspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
