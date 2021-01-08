import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { DemoMaterialModule } from 'src/app/modules/material-module';

@Component({
  templateUrl: './lazy2a.component.html',
  styleUrls: ['./lazy2a.component.css']
})
export class Lazy2aComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [Lazy2aComponent],
  imports: [CommonModule,
    DemoMaterialModule
  ]
})
class Lazy2Module {

}
