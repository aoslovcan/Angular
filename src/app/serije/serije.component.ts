import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serije',
  templateUrl: './serije.component.html',
  styleUrls: ['./serije.component.css']
})
export class SerijeComponent implements OnInit {
  @Input('serijaElement') element: [{naziv:"Sluškinjina priča", zanr:"Drama", brEp:4, url:"https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171900.jpg"}];
  constructor() { }

  ngOnInit() {
  }

}
