import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kosz',
  templateUrl: './kosz.component.html',
  styleUrls: ['./kosz.component.css']
})
export class KoszComponent implements OnInit {

  private costs:number;

  constructor(private dialogRef: MatDialogRef<KoszComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.costs = data;
     }

  ngOnInit(): void { }

  close() {
    this.dialogRef.close();
  }

  get Costs() {
    return this.costs;
  }

}
