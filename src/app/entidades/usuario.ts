// Clase que guarda los atributos de un Heroe
export class Usuario{

    private _id : number = 0;
    private static contadorId : number = 1;
    constructor(public nombre : string, public password : string){
        this._id = Usuario.contadorId++;
        this.nombre = nombre
        this.password = password
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Nombre: ${this.nombre}, Universo: ${this.password}`
    }

}