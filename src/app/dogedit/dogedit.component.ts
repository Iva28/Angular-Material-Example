import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../models/dog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dogedit',
  templateUrl: './dogedit.component.html',
  styleUrls: ['./dogedit.component.css']
})
export class DogeditComponent implements OnInit {

  dogForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DogeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dog) { }

  ngOnInit() {
    this.dogForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      gender: [this.data.gender, [Validators.required]],
      color: [this.data.color, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.dogForm.valid) {
      if (this.data.id === 0) {
        const dog = new Dog(13, this.dogForm.value.name, this.dogForm.value.gender, this.dogForm.value.color);
        console.log('dog added');
        console.log(dog);      
        this.dialogRef.close(dog);
      } else {
        this.data.name = this.dogForm.value.name;
        this.data.gender = this.dogForm.value.gender
        this.data.color = this.dogForm.value.color
        this.dialogRef.close(this.data);
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
