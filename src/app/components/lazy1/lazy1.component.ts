import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {
  Message: string = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //this.Message = this.dataService.Message;
  }

}
