import { Component, OnInit } from '@angular/core';

export interface FlightDetails {
  no: number;
  flightName: string;
  departureTime: string;
  arrivalTime: string;
  flightDetails: string;
}

const ELEMENT_DATA: FlightDetails[] = [
  {
    no: 1,
    flightName: 'KOL - BLR',
    departureTime: '21:12',
    arrivalTime: '1:09',
    flightDetails: 'flightDetails',
  },
  {
    no: 1,
    flightName: 'BLR - HYD',
    departureTime: '7:30',
    arrivalTime: '10:19',
    flightDetails: 'https://www.google.com/',
  },
];

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'flightName',
    'departureTime',
    'arrivalTime',
    'flightDetails',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
