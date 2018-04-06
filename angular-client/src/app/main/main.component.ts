import { Component, OnInit } from '@angular/core';
import { ExpressService } from '../express.service';
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'app works!';

  mattia={name:'test',function:'test',summary:'test',experiences:{data:['lol']}};

  constructor(private expressService: ExpressService) {}

  ngOnInit() {
    this.expressService.getCV().subscribe(mattia => this.mattia = mattia[0]);
  }


}
