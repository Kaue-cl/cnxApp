import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoComponent } from './participacao.component';

describe('ParticipacaoComponent', () => {
  let component: ParticipacaoComponent;
  let fixture: ComponentFixture<ParticipacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
