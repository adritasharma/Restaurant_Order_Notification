import { Component } from '@angular/core';
import { NotificationService } from './_services/notification.service';
import { Message } from './_models/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private _notification:NotificationService) {}

  ngOnInit(){
    this._notification.messageReceived.subscribe((message: Message) => {  

      console.log(message)
      // this._ngZone.run(() => {  
      //   if (message.clientuniqueid !== this.uniqueID) {  
      //     message.type = "received";  
      //     this.messages.push(message);  
      //   }  
      // });  
    });  
  }
}
