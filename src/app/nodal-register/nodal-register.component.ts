import { Component, OnInit } from '@angular/core';
import { Nodal } from '../nodal';

@Component({
  selector: 'app-nodal-register',
  templateUrl: './nodal-register.component.html',
  styleUrls: ['./nodal-register.component.css']
})
export class NodalRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nodalStates = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  nodalModel= new Nodal(null,null,null,null,null,true);

 

}
