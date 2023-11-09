import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-mais-pensamentos',
  templateUrl: './botao-mais-pensamentos.component.html',
  styleUrls: ['./botao-mais-pensamentos.component.scss']
})
export class BotaoMaisPensamentosComponent implements OnInit {

  @Input() hasMoreThoughts: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
