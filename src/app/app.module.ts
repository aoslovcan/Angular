import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SetionTwoComponent } from './setion-two/setion-two.component';
import { SerijeComponent } from './serije/serije.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PopisKnjigaComponent } from './event-binding/popis-knjiga/popis-knjiga.component';
import { EditKnjigaComponent } from './event-binding/edit-knjiga/edit-knjiga.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionOneComponent,
    SetionTwoComponent,
    SerijeComponent,
    EventBindingComponent,
    PopisKnjigaComponent,
    EditKnjigaComponent,
    FooterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
