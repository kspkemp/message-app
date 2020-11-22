import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageViewComponent } from './message-view/message-view.component';

const routes: Routes = [{path: 'message-send', component: MessageViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
