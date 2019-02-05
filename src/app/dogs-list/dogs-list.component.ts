import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { MatDialog } from '@angular/material/dialog';
import { DogeditComponent } from '../dogedit/dogedit.component';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {

   dogs: Dog[] = [
    new Dog(1, 'Dog 1', false, 'black'),
    new Dog(2, 'Dog 2', true, 'white'),
    new Dog(3, 'Dog 3', false, 'red')
  ] 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.dogs);
  }

  OpenDialog(dogId: number) {
    let dog = new Dog(0, '', false, '');
    if (!isNaN(dogId)) {
      dog = this.dogs.find(d => d.id == dogId)
    }
    let dialogRef = this.dialog.open(DogeditComponent, {data: dog});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      console.log(result);
    })
  }
}
