import { Component, OnInit } from "@angular/core";
import { SocketService } from "../user/socket.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Message } from "./message";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "./message.service";
import { AppService } from "../app.service";
import { User } from "../user/user";
import { CookieService } from "ngx-cookie-service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-messages",
  template: `
  <app-alerts></app-alerts>
  `,
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  public isPopupVisible = false;
  public isComposePopupVisible = false;
  public composeMessage = new Message();
  public activeTab = "inbox";
  public sentMessages = [];
  showFile = false;
  currentProfile: User = new User();
  public authToken: any;
  public userInfo: any;
  public userId: any;
  // public from: any;
  // public toUserId: any;
  public disconnectedSocket: boolean;

  showComposePopup = function(compose) {
    this.composeMessage = new Message();
    this.isComposePopupVisible = true; // Not sure if necessary anymore
    this.modalService.open(compose, { centered: true });
  };

  closeComposePopup = function() {
    this.isComposePopupVisible = false;
  };

  showPopup = function(message, content) {
    console.log("showing popup");
    this.isPopupVisible = true;
    this.selectedMessage = message;
    // this.selectedMesssage.fromUserId = from; //added 09/18
    // this.selectedMessage.toUserId = this.toUser; // added 09/18
    this.modalService.open(content, { centered: true });
  };

  closePopup = function() {
    console.log("closing popup");
    this.isPopupVisible = false;
  };

  messages = this.sentMessages;

  messages1 = [
    {
      author: "Jason",
      toUser: " ",
      subject: "Hello World!",
      date: "Sept 1",
      message: "I love Angular! I wonder if it loves me back?"
    },
    {
      author: "Angela",
      toUser: " ",
      subject: "Yeah, I don't know about Angular.",
      date: "Sept 3",
      message:
        "Angular and I are just friends! Hmm, but I don't mind getting to know it."
    },
    {
      author: "Mio",
      toUser: " ",
      subject: "Wassup? ",
      date: "Aug 28",
      message: "What about Java? Now that's for me!"
    }
  ];

  constructor(
    private messageService: MessageService,
    private appService: AppService,
    private socketService: SocketService,
    private cookieService: CookieService,
    private modalService: NgbModal,
    private _route: Router,
    private toastr: ToastrService
  ) {}

  profile: User;

  getProfile() {
    this.socketService.getProfile(this.userId).subscribe(p => {
      this.profile = p;
      this.currentProfile = p;
    });
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.getProfile();
  }

  sendMessage = function() {
    // this.composeMesssage.fromUserId = this.currentProfile.userId; //Does not like this
    // this.composeMesssage.author = this.currentProfile.userId;// Does not like this
    this.composeMessage.toUserId = this.toUser; // added 09/18

    // this.composeMessage.toUserId = 1; // this is optional to see/  may remove after placing ngModel in the html
    this.composeMessage.toId = this.currentProfile.userId;
    this.composeMessage.date = new Date();
    // this.composeMessage.toUser;
    // this.composeMessage.author;
    console.log(this.composeMessage);
    this.messageService.addMessage(this.composeMessage).subscribe(data => {
      this.composeMessage.toId = this.currentProfile.userId;
      this.isComposePopupVisible = false;
    });
    if (this.composeMessage) {
      this.sentMessages.push(this.composeMessage);
      this.toastr.success("Message Send Successful!");
      // this.sentMessages.push(this.messages); // added 09102018
    } else {
      this.sentMessages = false || null;
      this.toastr.error("Message Send Not Successful!");
    }
  };
}
