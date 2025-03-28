import { Component,Input,OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  standalone:true,
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent  implements OnChanges{

  @Input() postId: number = 1;
  comments: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnChanges(): void {
    this.dataService.getComments(this.postId).subscribe((data) => {
      this.comments = data;
    });
  }

}
