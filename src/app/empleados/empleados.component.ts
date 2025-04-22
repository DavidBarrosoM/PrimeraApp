import { Component,OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
@Component({
    selector:"app-empleados",
    templateUrl:"./empleados.component.html",
    standalone:true,
    imports: [FormsModule], 
    styleUrls:['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
    numeroEmpleados:number = 10;
    private empleados:string[] = ["Juan","Pedro","Maria","Luis"];
    getEmpleados():string[] {
        return this.empleados;
    }
    agregarJefe(value:String){

    }
    habilitacionCuadro= true;

    usuarioRegistrado = false;
    textoDeRegistro = "No hay nadie registrado";
    getRegistroUsario(){
        this.usuarioRegistrado = true;
        //return this.usuarioRegistrado;
    }

    setUsuarioRegistrado(){
        this.textoDeRegistro = "Usuario Registrado";
        //alert("Usuario Registrado");
    }


    usuarioRegistrado2 = false;
    textoDeRegistro2 = "No hay nadie registrado";
    getRegistroUsario2(){
        this.usuarioRegistrado2 = true;
        //return this.usuarioRegistrado;
    }

    setUsuarioRegistrado2(event:Event){
        //this.textoDeRegistro2 = "Usuario Registrado";
        //alert("Usuario Registrado");
        //alert(event.target);
        if((<HTMLInputElement>event.target).value == "si"){
            this.textoDeRegistro2 = "El usuario se acaba de registrar";

        }else{
            this.textoDeRegistro2 = "No hay nadie registrado";
        }

    }

    cargo = "Programador";

    constructor() { }
    ngOnInit(): void {
        console.log("ngOnInit EmpleadosComponent");
    }
}