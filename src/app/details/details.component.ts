import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
detailsForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,  public dialogRef: MatDialogRef<DetailsComponent>){

  }
  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      id: [this.data.id],
      name: [this.data.name],
      age: [this.data.age],
      email: [this.data.email],
      phone: [this.data.phone]
  });
}

closeDialog(): void {
  this.dialogRef.close();
}
}


