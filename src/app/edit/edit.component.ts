import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { Jobs } from "../jobs/jobs";
import { JobsService } from "../jobs/jobs.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  jobs: Jobs = new Jobs();
  itemId = "";

  getJobs(): void {
    this.jobsService
      .getJobs()
      .subscribe(
        data =>
          (this.jobs = data.filter(x => x.id.toString() == this.itemId)[0])
      );
  }

  deleteJob(id: number) {
    this.jobsService.removeJobs(id);
  }

  editJob() {
    this.jobsService.editJobs(this.jobs).subscribe(data => {
      console.log(data);
      this._route.navigate(["jobslist"]);
    });
  }

  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute,
    private _route: Router
  ) {}
  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.getCoffee();
  // }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.itemId = this.route.snapshot.paramMap.get("id");
      //new line
      this.getJobs();
    });
  }
}
