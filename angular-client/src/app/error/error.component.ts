import { Component, OnInit } from '@angular/core';
import { ExpressService } from '../express.service'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

	errorMsg ="errorinit"

  constructor(private expressService: ExpressService) { }

  ngOnInit() {
  	this.expressService.getError().subscribe(msg => this.errorMsg = msg);
  } 

}
