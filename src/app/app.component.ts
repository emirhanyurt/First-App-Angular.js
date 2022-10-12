import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularAPP';
  krediTutari:number =10000;
  vade:number = 36;
  aylikOdemeniz:number = 0;
  aylikFaizTurari:number = 117.83;
  toplamGeriOdemeniz:number = 0;

  hesapla(){
    this.aylikOdemeniz =(this.krediTutari/this.vade)+this.aylikFaizTurari;
    this.toplamGeriOdemeniz = this.aylikOdemeniz * this.vade;
  }
  
}
