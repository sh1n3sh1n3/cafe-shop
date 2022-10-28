import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaComponent } from './tea.component';

describe('TeaComponent', () => {
  let component: TeaComponent;
  let fixture: ComponentFixture<TeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
