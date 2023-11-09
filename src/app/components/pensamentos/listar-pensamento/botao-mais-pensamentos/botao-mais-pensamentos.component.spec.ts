import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMaisPensamentosComponent } from './botao-mais-pensamentos.component';

describe('BotaoMaisPensamentosComponent', () => {
  let component: BotaoMaisPensamentosComponent;
  let fixture: ComponentFixture<BotaoMaisPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoMaisPensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoMaisPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
