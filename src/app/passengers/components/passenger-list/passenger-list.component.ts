import { Component, OnInit } from '@angular/core';

export interface FlightDetails {
  passengerId: string;
  passengerName: string;
  seatNo: string;
  wheelChairRequired: boolean;
  havingInfant: boolean;
  checkedIn: boolean;
  passportAvailable: boolean;
  dobAvailable: boolean;
  addressAvailable: boolean;
  ancillaryService: string;
  meal: string;
  product: string;
  details: string;
}


const ELEMENT_DATA: FlightDetails[] = [
  {
    passengerId: 'P101',
    passengerName: 'Suraiya',
    seatNo: 'C1',
    wheelChairRequired: false,
    havingInfant: true,
    checkedIn: false,
    passportAvailable: true,
    dobAvailable: true,
    addressAvailable: true,
    ancillaryService: 'WIfi',
    meal: 'Veg',
    product: 'Book',
    details: 'https://www.google.com/'

  },
  {
    passengerId: 'P102',
    passengerName: 'Atul',
    seatNo: 'C3',
    wheelChairRequired: false,
    havingInfant: true,
    checkedIn: true,
    passportAvailable: false,
    dobAvailable: true,
    addressAvailable: true,
    ancillaryService: 'Neck Rest',
    meal: 'Non veg',
    product: 'Watch',
    details: 'https://www.google.com/'

  },
];



@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
})
export class PassengerListComponent implements OnInit {

  displayedColumns: string[] = [
    'passengerId',
    'passengerName',
    'seatNo',
    'wheelChairRequired',
    'havingInfant',
    'checkedIn',
    'passportAvailable',
    'dobAvailable',
    'addressAvailable',
    'ancillaryService',
    'meal',
    'product',
    'details'
  ];
  dataSource = ELEMENT_DATA;


  constructor() {}

  ngOnInit(): void {}
}
