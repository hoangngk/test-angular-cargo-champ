import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
  settingsDE,
  settingsEN,
  tourTypesDE,
  tourTypesEN,
} from "../../../../assets/i18n/column-setting-offers-details.constant";
import { MockOffersService } from "../../../@core/mock/offers.service";
import { AuthService } from "../../../core/services";

@Component({
  selector: "ngx-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit, OnDestroy {
  routeID: string;
  viewDetails;
  settings: any = settingsEN;
  source = new LocalDataSource();
  tourTypes = tourTypesEN;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public actRoute: ActivatedRoute,
    public router: Router,
    private as: AuthService,
    private mockOffersService: MockOffersService
  ) {
    this.as.langChange.subscribe((currLang) => {
      if (currLang) {
        this.settings = currLang === "en" ? settingsEN : settingsDE;
        this.tourTypes = currLang === "en" ? tourTypesEN : tourTypesDE;
      }
    });
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: Params) => {
      this.routeID = params.params.matId;
    });
    this.getBasicInfo();
    this.getDetails();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  deleteClicked(id: string) {
    console.log(id);
  }

  editClicked(): void {
    console.log(this.routeID);
  }

  redirectToMain() {
    this.router.navigate(["../../main/offers"]);
  }

  getBasicInfo() {
    this.mockOffersService
      .getBasicInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => (this.viewDetails = res),
      });
  }

  getDetails() {
    this.mockOffersService
      .getDetails()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.source.load(
            res.map((el) => {
              return {
                ...el,
              };
            })
          );
        },
      });
  }
}
