import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Knjige } from '../Knjige';


@Component({
  selector: 'app-popis-knjiga',
  templateUrl: './popis-knjiga.component.html',
  styleUrls: ['./popis-knjiga.component.css']
})
export class PopisKnjigaComponent implements OnInit {
  @Output() odabranaknjiga = new EventEmitter<Knjige>();
knjige : Knjige[] = [
  new Knjige("Sumrak saga", "Fikcija za mlade",
   "Stephenie Meyer", "Little, Brown and Company",
  "https://upload.wikimedia.org/wikipedia/hr/thumb/d/dd/Twilightpostermedium.jpg/200px-Twilightpostermedium.jpg", "Ultricies mi eget mauris pharetra et ultrices neque. Pretium lectus quam id leo in vitae turpis. Quam id leo in vitae. Elementum pulvinar etiam non quam lacus. Sit amet consectetur adipiscing elit ut aliquam. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Diam phasellus vestibulum lorem sed risus ultricies tristique. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Varius vel pharetra vel turpis nunc. Scelerisque varius morbi enim nunc. Velit scelerisque in dictum non consectetur a erat." ),
 
  new Knjige("Pali Anđeo", "Gotička saga", "Lauren Kate", "Algoritam", 
  "https://www.njuskalo.hr/image-w920x690/beletristika/set-knjiga-lauren-kate-serijal-pali-andeo-slika-59441445.jpg", "Nunc scelerisque viverra mauris in aliquam sem fringilla. Et egestas quis ipsum suspendisse. Consectetur adipiscing elit duis tristique sollicitudin nibh. Scelerisque viverra mauris in aliquam sem fringilla ut. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Leo vel fringilla est ullamcorper. Nec dui nunc mattis enim ut tellus elementum. Neque ornare aenean euismod elementum nisi quis eleifend quam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Non arcu risus quis varius. Sed felis eget velit aliquet sagittis id consectetur. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Nunc consequat interdum varius sit amet. Sed vulputate mi sit amet."),
  
  new Knjige("Bratstvo crnog bodeža", "Fantazija", "J.R.Ward", "Znanje", 
  "https://www.delfi.rs/_img/artikli/2017/01/nocni_lov_vv.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Interdum velit laoreet id donec ultrices. Amet cursus sit amet dictum sit. Mi bibendum neque egestas congue quisque egestas. Praesent semper feugiat nibh sed pulvinar. Turpis nunc eget lorem dolor. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Sed vulputate mi sit amet. Nibh praesent tristique magna sit."),
  
  new Knjige("Domaćin", "Romantična fantazija", "Stephenie Meyer", "Znanje", 
  "https://images-na.ssl-images-amazon.com/images/I/71qzRVfxvnL.jpg", "Turpis egestas sed tempus urna et pharetra. Pharetra magna ac placerat vestibulum lectus. Sem et tortor consequat id. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sed nisi lacus sed viverra tellus in. Suspendisse in est ante in nibh mauris cursus mattis molestie. At quis risus sed vulputate. Facilisi etiam dignissim diam quis. Orci dapibus ultrices in iaculis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Bibendum neque egestas congue quisque egestas diam in. Id aliquet risus feugiat in ante. Faucibus vitae aliquet nec ullamcorper sit. Sed faucibus turpis in eu mi bibendum neque. Quis auctor elit sed vulputate mi sit. At erat pellentesque adipiscing commodo."),

  new Knjige("Kuća noći", "Fantastika", "P.C. Cast", "Little Brown Company", 
  "http://www.knjigolov.hr/slike/201204030935520.predodredjena.jpg",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
  
   new Knjige("Sluškinjina priča", "Drama", "Margaret Atwood", "Školska knjiga", 
   "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/171900.jpg",
    "Na početku 21. stoljeća u SAD-u na vlast pučem dolazi hunta koja vlast temelji na religijskom konzervatizmu. Žene se otpuštaju s posla i lišavaju pristupa novcu, dakle ugledu, moći i vlasti. Zabranjeni su pobačaji kao i bilo kova vrsta kontracepcije. Žene su potpuno određene funkciji materinstva i isključivo o tome ovisi njihov društveni status. One su Supruge, Sluškinje, Marte ili Tetke. Supruge su žene uglednih funkcionara i uglavnom su neplodne. Zbog toga svakom Zapovjedniku vlast dodjeljuje Sluškinju. Sluškinje se regrutiraju od žena udanih drugi puta ili onih koje žive u izvanbračnim zajednicama, jer su drugi brak i izvanbračne veze proglašeni nezakonitima. Odgajaju ih u posebnim zavodima, a Tetke su njihove učiteljice i čuvarice. Zadatak im je da rađaju. Seksualni čin sveden je na bestrasni ritual kojem prisustvuju i supruge. Nakon poroda, koji se, poput mise, odvija javno, dijete se oduzima majci i daje da se o njemu brine Supruga. Sluškinje za koje se utvrdi da su neplodne, postaju Marte, to jest kućne pomoćnice i kuharice. Kazne za neposluh su drastične...Kritičari nisu slučajno usporedili Sluškinjinu priču s Orwellovom 1984, ali ovaj put mračna je budućnost dana iz ženske perspektive: žena je narator, žene su glavna lica, a žene su i najveće žrtve režima.")

];

OnAdd(knjiga: Knjige){
  this.odabranaknjiga.emit(knjiga);
}


  constructor() { }

  ngOnInit() {
    
  }

}
