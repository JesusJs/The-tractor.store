import { Component, Input, input, Output, output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ts-cart-counter',
  standalone:true,
  imports: [],
  templateUrl: './ts-cart-counter.html',
  styleUrl: './ts-cart-counter.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TsCartCounter {
  @Input() count: number = 0;

  @Output() counterClick = new EventEmitter<void>();

  onHandleClick():void {
    console.log(this.count)
    this.count ++;
    this.counterClick.emit();
    
  }
}
