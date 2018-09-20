import { Component, OnInit } from "@angular/core";
import { Jobs } from "../jobs/jobs";
import { JobsService } from "../jobs/jobs.service";
import { SocketService } from "../user/socket.service";
import { User } from "../user/user";

@Component({
  selector: "app-jobslist",
  templateUrl: "./jobslist.component.html",
  styleUrls: ["./jobslist.component.css"]
})
// export class JobslistComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class JobsListComponent implements OnInit {
  jobsList: Jobs[] = [];
  public userId: any;
  currentProfile: User = new User();

  getJobs(): void {
    this.jobsService.getJobs().subscribe(data => (this.jobsList = data));
  }
  deleteJobs(id: number) {
    this.jobsService.removeJobs(id);
  }
  updateJobs(): void {
    this.jobsService.updateJobs().subscribe(data => (this.jobsList = data));
  }

  constructor(
    private jobsService: JobsService,
    private socketService: SocketService
  ) {}
  profile: User;

  getProfile() {
    this.socketService.getProfile(this.userId).subscribe(p => {
      this.profile = p;
      this.currentProfile = p;
    });
  }

  ngOnInit() {
    this.getJobs();
    this.userId = localStorage.getItem("userId");
    this.getProfile();
  }
}
