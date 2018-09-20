import { Component, OnInit } from "@angular/core";
import { Jobs } from "../jobs/jobs";
import { JobsService } from "../jobs/jobs.service";
import { SocketService } from "../user/socket.service";
import { User } from "../user/user";

@Component({
  selector: "app-hustler",
  templateUrl: "./hustler.component.html",
  styleUrls: ["./hustler.component.css"]
})
export class HustlerComponent implements OnInit {
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
