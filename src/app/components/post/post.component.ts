import { Component,Input , OnChanges,EventEmitter,Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  standalone:true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnChanges {

  @Input() userId: number = 1;
  @Output() postSelected = new EventEmitter<number>();

  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnChanges(): void {
    this.dataService.getPosts(this.userId).subscribe((data) => {
      this.posts = data;
    });
  }

  selectPost(postId: number) {
    this.postSelected.emit(postId);
  }

}
