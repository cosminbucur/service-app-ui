import { Tyre } from './../../../../shared/models/tyre.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyre-card',
  templateUrl: './tyre-card.component.html',
  styleUrls: ['./tyre-card.component.scss']
})
export class TyreCardComponent implements OnInit {

  @Input() tyre: Tyre;

  constructor() { }

  public ngOnInit(): void {
  }

}
