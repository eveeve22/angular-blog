import { Component, OnInit,Input, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { MenuInsertPageComponent } from '../menu-insert-page/menu-insert-page.component'
@Component({
  selector: 'app-menu-notices',
  templateUrl: './menu-notices.component.html',
  styleUrls: ['./menu-notices.component.css']
})
export class MenuNoticesComponent implements OnInit, OnChanges,DoCheck,AfterContentChecked {
  insertPage: MenuInsertPageComponent = new MenuInsertPageComponent;
  @Input()
  recebeDadosInsert=[];
  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string="";
  @Input()
  id:string="0";

  constructor() {

  }





  ngOnInit():void {

  }

  ngOnChanges(): void{

  }

  ngDoCheck(): void {



  }
  ngAfterContentChecked(): void {

  }

  }




