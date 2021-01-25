import { Tyre } from 'src/app/shared/models/tyre.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tyre-card',
  templateUrl: './tyre-card.component.html',
  styleUrls: ['./tyre-card.component.scss']
})
export class TyreCardComponent implements OnInit {

  @Input() tyre: Tyre;
  @Output() tyreDeleted = new EventEmitter<Tyre>();
  @Output() tyreCloned = new EventEmitter<Tyre>();

  constructor() { }

  ngOnInit() {
  }

  deleteTyre(tyre: Tyre) {
    console.log('delete tyre', tyre);
    this.tyreDeleted.emit(tyre);
  }

  cloneTyre(tyre: Tyre) {
    console.log('clone tyre', tyre);
    this.tyreCloned.emit(tyre);
  }
}
