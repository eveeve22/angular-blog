import { Component, OnInit, Input,EventEmitter, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-menu-insert-page',
  templateUrl: './menu-insert-page.component.html',
  styleUrls: ['./menu-insert-page.component.css']
})
export class MenuInsertPageComponent implements OnInit, OnChanges{

  @Output() newItemEvent  = new EventEmitter<string>();
  @Input() dados:string="";

  adicionarText(value:string){
     this.newItemEvent.emit(value)
    }

  constructor() { }


  ngOnChanges(){

  }

  ngOnInit(): void {


  }



}
