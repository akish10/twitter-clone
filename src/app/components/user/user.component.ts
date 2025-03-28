import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users : any[] = [];
  selectedUserId : number = 1;

  @Output() change = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.getUsers().subscribe((data)=>{
        this.users = data;
      })
  }

  onUserChange() {
    this.change.emit(this.selectedUserId)
  }


}
