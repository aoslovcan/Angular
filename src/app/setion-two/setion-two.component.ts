import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-setion-two',
  templateUrl: './setion-two.component.html',
  styleUrls: ['./setion-two.component.css']
})
export class SetionTwoComponent implements OnInit {

serije = [{naziv: "Sluškinjina priča", zanr:"Drama", brEp: 4, url:"https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171900.jpg"}];
 nazivSerije = '';
 zanrSerije = '';
 brEpizoda = 0;
 imgpath="";

AddSeries() {
   this.serije.push({
    
     
     naziv: this.nazivSerije,
     zanr: this.zanrSerije,
     brEp: this.brEpizoda,
     url : this.imgpath

   });
 }

  constructor() { }

 
  ngOnInit() {
  }

}
