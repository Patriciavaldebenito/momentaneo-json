import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {
 componentes : Componente[]=[
   { icon:'american-football',name:'Action Sheet',redirecTo:'/action-sheet'},
   { icon:'appstore',name:'Alert',redirecTo:'/alert'}

 ]
  constructor() { }

  ngOnInit() {
  }

 
}

interface Componente {
  icon:string;
  name:string;
  redirecTo:string;
}