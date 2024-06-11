import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReciverComponent } from './code-reciver.component';

describe('CodeReciverComponent', () => {
  let component: CodeReciverComponent;
  let fixture: ComponentFixture<CodeReciverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeReciverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeReciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
