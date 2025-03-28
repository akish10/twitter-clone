import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,HttpClientModule,FormsModule,PostComponent,UserComponent,CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  selectedUserId:number = 1;

  selectedPostId:number = 1;
  //title = 'twitterclone';

}
