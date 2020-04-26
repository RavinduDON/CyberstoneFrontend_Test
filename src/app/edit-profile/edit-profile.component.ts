import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }
  isAbout = true;

  pe = false;
  ve = false;
  pd = false;
  ga = false;

  togglePE(args){
    this.pe = !args.target.checked;
  }
  toggleVE(args){
    this.ve = !args.target.checked;
  }
  togglePD(args){
    this.pd = !args.target.checked;
  }
  toggleGA(args){
    this.ga = !args.target.checked;
  }

  ngOnInit(): void {
  }

}
