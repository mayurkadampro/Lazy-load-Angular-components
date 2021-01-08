import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, OnInit, Output, ViewContainerRef } from '@angular/core';
import { DemoMaterialModule } from 'src/app/modules/material-module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})
export class Lazy2Component implements OnInit {
  Message: string = "";
  @Output()
  emitter: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {}

  async openDialog() {
    this.viewContainerRef.clear();
    const { Lazy2aComponent } = await import('../lazy2a/lazy2a.component');
    const dialogRef = this.dialog.open(Lazy2aComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.emitter.emit(result);
    });
  }

  
    
  

}

@NgModule({
  declarations: [Lazy2Component],
  imports: [CommonModule,
    DemoMaterialModule
  ]
})
class Lazy2Module {

}