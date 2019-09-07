import { Component, OnInit, Input } from '@angular/core';
import { Knjige } from '../Knjige';

@Component({
  selector: 'app-edit-knjiga',
  templateUrl: './edit-knjiga.component.html',
  styleUrls: ['./edit-knjiga.component.css']
})
export class EditKnjigaComponent implements OnInit {

 @Input() knjige : Knjige;
  constructor() { }

  ngOnInit() {
  }

}
