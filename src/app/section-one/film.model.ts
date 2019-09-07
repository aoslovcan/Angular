export class Film{
    public ime:string;
    public zanr: string;
    public opis:string;
    public path: string;
    public glumci: string;
    public redatelj : string;


    constructor(name : string, genre:string, desc:string, imgPath: string, act:string, redat:string){

        this.ime = name;
        this.zanr = genre;
        this.opis = desc;
        this.path = imgPath;
        this.glumci = act;
        this.redatelj = redat;
    }
}