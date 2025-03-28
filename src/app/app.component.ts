import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HttpClientModule,FormsModule,
    PostComponent,CommentComponent,UserComponent,PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  selectedUserId:number = 1;

  selectedPostId:number = 1;
  //title = 'twitterclone';

}
