import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  listen(Eventname: string) {
    return new Observable((subscriber) => {
      this.socket.on(Eventname, (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
