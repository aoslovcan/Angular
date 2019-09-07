import { Component, OnInit, Input} from '@angular/core';
import { Knjige } from './Knjige';
import { EditKnjigaComponent } from './edit-knjiga/edit-knjiga.component';



@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
 
})
export class EventBindingComponent implements OnInit {
 odaberiKnjigu : Knjige;
 

  constructor() { }

 
  ngOnInit() {
  }

}
