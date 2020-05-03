import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina={};
  cargada = false;

  equipo: any[]=[];

  constructor( private http: HttpClient) { 
    
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
    //console.log('servicio iniciado');
    //leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada=true;
      this.info=resp;
      console.log(resp);
      //acceder a un contenido del objeto resp
      //console.log(resp['email']);
    });
  }

  private cargarEquipo(){
       //console.log('servicio iniciado');
    //leer el archivo json
    this.http.get('https://angular-html-f4582.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
      this.equipo=resp;
      //acceder a un contenido del objeto resp
      //console.log(resp['email']);
    });
  }
}
