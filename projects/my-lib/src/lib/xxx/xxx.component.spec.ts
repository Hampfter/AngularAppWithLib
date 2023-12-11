import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XXXComponent } from './xxx.component';

describe('XXXComponent', () => {
  let component: XXXComponent;
  let fixture: ComponentFixture<XXXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XXXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XXXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
