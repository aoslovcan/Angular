import { Component, OnInit } from '@angular/core';
import { Film } from './film.model';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  filmovi : Film[] = [
    new Film ("Nevjerovatan život psa Enza", "Drama", 
    "Milo Ventimiglia, glumi Dennyja, vozača trkaćeg automobila, koji je posvećen svom duhovitom, mudrom, gotovo ljudskom psu, Enzu. Enzo je Dannyju više od kućnog ljubimca, on mu je najbolji prijatelj.Denny upoznaje Eve, učiteljicu  koju glumi Amanda Seyfried; zaljube se, vjenčaju i dobiju dijete. Uz podršku Eve i Enza Denny uči kako biti obiteljski čovjek u kriznim trenutcima, koristeći lekcije koje je naučio na stazi. Ovu dirljivu i emotivnu priču je režirao Simon Curtis, a temelji se na bestseleru Gartha Steina.",
    
     "https://img.cineplexx.at/media/hr/inc/movies_licences/275X400_ART_OF_RACING.jpg", "Janko, Alena, Mia", "Mio Gavranović Mioćić"),
    
     new Film("Annabelle 3", "Horor", "Demonolozi Ed i Lorraine odlučni su očuvati Annabelle od uništenja te je smjeste u zaključanu sobu u svojoj kući. Njihov plan je zaštititi je stavljajući je na „sigurno” iza stakla uz svećenički blagoslov. No, nesretna noć počinje kada Annabelle probudi zle duhove u prostoriji te zajedno uoče novu metu – Warrenovu desetogodišnju kćer Judy i njezine prijatelje."
     , "https://m.media-amazon.com/images/M/MV5BYmI4NDNiMmQtZTFkYi00ZDVmLThlYTAtMWJlMjU1M2I2ZmViXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", " Madison Iseman, Vera Farmiga, Mckenna Grace", "Gary Dauberman"),

     new Film("Zvijezda je rođena", "Romantična drama", "Radi se o pravom autorskom djelu Bradleyja Coopera – on ga je, naime napisao, režirao te u njemu glumi i pjeva. Film je napravljen prema klasičnoj priči iz 1937. godine o tragičnoj ljubavi između iskusnog glazbenika na zalasku karijere i mladoj pjevačici u usponu.",
     "http://www.gpou-otocac.hr/wp-content/uploads/2018-10-18-PLAKAT-FILMA.png", "Lady Gaga, Bradley Cooper, Sam Elliott", "Bradley Cooper"),
     new Film("Mjesto tišine", "Horor triler", "Naš svijet su zauzeli naizgled neranjivi grabežljivci, koji - na najmanji mogući šum - odmah napadaju smrtonosnom silom. Sve se stoga odvija oko jednog bitnog pravila – kreći se pažljivo i nikada ne stvaraj nikakav zvuk, pa čak ni najmanji šum. Jedna je genijalna obitelj uspjela preživjeti u tišini, pažljivo prigušujući svaki mogući zvuk u svakodnevnom životu. U ovom nadnaravnom, napetom horor trileru uz Johna Krasinskog glumi i dobitnica nagrade Zlatni globus® Emily Blunt, Noah Jupe i Millicent Simmonds.",
     "https://slike1.blitz-cinestar.hr/Plakati/7.3.2018_12_08_43_Quiet_place_HR_novi.jpg?preset=thumb-500", "Emily Blunt, John Krasinski, Noah Jupe", "John Krasinski")
    
  ]

  listaFilmova = ["Nevjerovatan život psa Enza", "Annabelle3", "Plijen", 
  "Brzi i žestoki", "Crna pantera", "Istrebljenje", "Prvi čovjek", "Venom",
   "Zvijezda je rođena", "Mjesto tišine"]
  constructor() { }

  
  addHero(newHero: Film) {
    if (newHero) {
      this.filmovi.push(newHero);
    }
  }
 

  ngOnInit() {
  }

}
