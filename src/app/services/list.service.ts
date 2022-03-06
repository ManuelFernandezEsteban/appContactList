import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Item } from '../componentes/contactlist/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

 
  public setList=new Set<Item>();

  constructor(private http:HttpClient) { 
    this.getItems()

  }
  getItems(){
    return this.http.get('../../assets/json/data.json')
      .pipe(
        map((resp:any)=>{          
          this.setList=new Set(resp.lista);          
        })
      )  
  }
  borrar(item:Item){
    this.setList.delete(item);
  }
  editar(item:Item){
    this.setList.add(item);
  }
}  
