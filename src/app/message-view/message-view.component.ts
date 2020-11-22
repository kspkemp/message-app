import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SMSRequest } from './model/smsrequest-model';
import { MessageService } from './service/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {

  public phoneNumber: any;
  public message: any;
  public responseMessage: any;
  public messageView = false;
  public messageDetailForm = new FormGroup({
    phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(12)])),
    message: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]))
  });
  constructor(private messageService: MessageService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.messageView = true;
    this.responseMessage = '';
  }

  public sendMessage(phoneNumber: any, msg: any): any {

    console.log('Enterd Phone No : ', phoneNumber);
    console.log('Enterd Message : ', msg);

    const smsData: SMSRequest = {
      phoneNo: phoneNumber,
      message: msg
    };
    this.messageService.sendMessage(smsData).subscribe(response => {
      if (response.message === 'success') {
        this.snackBar.open(response.response);
      } else {
        this.snackBar.open('Failed to place message in queue');
      }

    });
  }

}
