export class Knjige{
    public naslov : string;
    public zanr : string;
    public autor : string;
    public nakladnik : string;
  
    public imgPath : string;
    public tekst : string;

    constructor(name:string, genre: string, author: string, publisher: string, url : string, desc:string)
    {

        this.naslov = name;
        this.zanr =  genre;
        this.autor=   author;
         this.nakladnik =  publisher ;
    
        this.imgPath = url;
        this.tekst = desc;


    }
}