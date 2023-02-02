import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-day-screen',
  templateUrl: './day-screen.component.html',
  styleUrls: ['./day-screen.component.css']
})

export class DayScreenComponent {

  modoTela = "claro";
  
   //inverte o boolean e muda a condição de aparecer ou sumir texto
   constructor(private elementRef: ElementRef) {}
   mudaclima(): void {
    if(this.modoTela === "escuro"){
      this.modoTela = "claro";
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';

    }else{
      this.modoTela = "escuro";
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'gray';
    }
   }

  //  mudaclimaD(): void {
  //   this.modoTela = "claro";
  //   if(this.modoTela === "claro"){
  //     this.elementRef.nativeElement.ownerDocument
  //           .body.style.backgroundColor = '#000';
  //   }else{
  //     this.elementRef.nativeElement.ownerDocument
  //           .body.style.backgroundColor = '#fff';
  //   }
  //  }
  
  }
  

