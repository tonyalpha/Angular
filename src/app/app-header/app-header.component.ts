import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  private title = "Movies";
  private logo: string;
  widthLogo = 60;
  titleLogo = this.title;
  altLogo = this.title;

  constructor() { }

  ngOnInit() {
    this.logo = "./assets/images/logo.png";
  }

}
