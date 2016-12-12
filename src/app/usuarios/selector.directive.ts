//????
import { Directive ,ElementRef,Renderer,HostListener} from '@angular/core';



@Directive({
  selector: '[Selector-Directive]'
})
export class SelectorDirective {
  constructor(private el:ElementRef, private render: Renderer) { }
// Resaltar el elemento
  @HostListener('mouseover')
  MouseOver(){
    this.render.setElementStyle(this.el.nativeElement,'background-color','black'); 
    this.render.setElementStyle(this.el.nativeElement,'cursor','pointer'); 

  }
  //Mano en el elemento
  @HostListener('mouseleave')
  MouseLeave(){
    this.render.setElementStyle(this.el.nativeElement,'background-color','');  
  }
}


