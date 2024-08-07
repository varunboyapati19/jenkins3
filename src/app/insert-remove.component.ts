import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-insert-remove',
  imports: [NgIf],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: 'insert-remove.component.html',
  styleUrls: ['insert-remove.component.css']
})
export class InsertRemoveComponent {
  isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }
}
