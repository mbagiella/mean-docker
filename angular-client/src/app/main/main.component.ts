import { Component, OnInit } from '@angular/core';
import { ExpressService } from '../express.service';
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mattia;
  
  constructor(private expressService: ExpressService,private router: Router) {}

  ngOnInit() {
    this.expressService.getCV().subscribe(
      mattia => this.mattia = mattia[0],
    	error => console.log('error')
    );
  }


}
