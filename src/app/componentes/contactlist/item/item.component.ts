import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public mostrarDialogo:boolean=false;
  public edicion:boolean=false;  

  @Input() item: Item={
    id:0,
    nombre:'',
    direccion:'',
    img:''
  };
  

  public itemForm=this.fb.group({
    nombre:[this.item.nombre||"",[Validators.required]],
    direccion:[this.item.direccion||'',[Validators.required]]
  })

  constructor(private ls:ListService,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  openDialog(){
    this.mostrarDialogo=true;
  }

  borrar(){
    this.ls.borrar(this.item);
  }

  mostrarEditar(){
    this.mostrarDialogo=false;
    this.edicion=true;
    this.itemForm.get('nombre')?.setValue(this.item.nombre);
    this.itemForm.get('direccion')?.setValue(this.item.direccion);
  }
  editar(){
    if (this.itemForm.invalid){
      return;
    }
    this.item.nombre=this.itemForm.get('nombre')?.value;
    this.item.direccion=this.itemForm.get('direccion')?.value;
    this.ls.editar(this.item);
    this.mostrarDialogo=false;
    this.edicion=false;
  }

  reset(){
    this.itemForm.reset();
    this.mostrarDialogo=false;
    this.edicion=false;
  }
}
