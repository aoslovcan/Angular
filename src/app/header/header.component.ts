import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  naslov = "Angularika";
  podnaslov ="Moja prva app iz Angulara";
  slika= "http://placehold.it/150x50?text=Logo";
  constructor() { }

 @Output() featuredSelected = new EventEmitter<string>();
onSelect(feature : string){
this.featuredSelected.emit(feature);

}
  ngOnInit() {
  }

}
