export class Trajeto{
    private local:string
    private distacia:number
    private tempo:number;
    
    constructor(local:string, distancia:number,tempo:number) {
        this.local = local
        this.distacia = distancia
        this.tempo = tempo
    }
    public getLocal():string{
        return this.local
    }
    public getDistancia():number{
        return this.distacia
    }
    public getTempo():number{
        return this.tempo
    }
    public toString(){
        console.log("Distancia: ",this.distacia)
        console.log("Local: ", this.local)
        console.log("Tempo: ", this.tempo)
    }
}