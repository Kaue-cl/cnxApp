import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JovensComponent } from './jovens.component';

describe('JovensComponent', () => {
  let component: JovensComponent;
  let fixture: ComponentFixture<JovensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JovensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JovensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
