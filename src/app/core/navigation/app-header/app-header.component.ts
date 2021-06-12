import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppHeaderComponent implements OnInit {
  @Output() sideNavEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onToggleSidenav = () => {
    this.sideNavEmitter.emit();
  };
}
