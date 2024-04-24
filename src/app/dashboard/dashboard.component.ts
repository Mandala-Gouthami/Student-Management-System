import { Component, ElementRef, OnInit} from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { HttpClient } from '@angular/common/http';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

 
  colDefs: ColDef[] = [
    { headerName: 'ID', field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "Email", field: "email" },
    { headerName: "Phone", field: "phone" }
  ];

	rowData:any[];
  gridOptions: GridOptions;

  constructor(private dialog:MatDialog, private http: HttpClient, private personService: PersonService){
    this.gridOptions = <GridOptions>{};
    this.gridOptions.paginationPageSize = 5; // Set the default page size
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.personService.fetchData().subscribe(data=>{
      this.rowData=data;
    });
  }

  addPerson(personData: any){
    this.personService.addPerson(personData).subscribe(response=>{
      alert("Person added successfully");
    })
  }


  onRowClicked(event: any) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '400px',
      data: event.data
    });

  }
  addNewPerson() {
    // Implement logic to open add person dialog or navigate to add person page
  }
  

}
