import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  public setList=new Set<Item>();

  constructor(private ls:ListService) { 
    
  }

  ngOnInit(): void {
    this.ls.getItems().subscribe(resp=>{
      this.setList=this.ls.setList
    });    
   
  }

}
