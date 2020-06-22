import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <div>
    <p [style.fontSize.px]="size">  ¡¡¡Hola Mundo!!!</p>
    </div>
    <button class="btn btn-primary" (click)="size = size + 5">
    <i class="fa fa-plus"></i>
    </button>
    <br />
    <button class="btn btn-primary" (click)="size = size - 5">
    <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  size: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
