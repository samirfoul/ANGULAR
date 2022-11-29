import { FormBuilder } from '@angular/forms';
import { CompanyService } from './../../services/company.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  // initialise le tableau
  companies!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'companyId',
    'companyName',
    'contact',
    'phone',
    'email',
    'zipCode',
    'actions',
  ];

  // initialise le tri
  @ViewChild(MatSort)
  matSort!: MatSort;

  // initialise la pagination
  @ViewChild(MatPaginator)
  matPaginator!: MatPaginator;
  // binding search bar
  searchKey!: string;

  constructor(
    public companyService: CompanyService,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public MatDialogogRef: MatDialogRef<CompaniesComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllCompanies();
  }

  // affiche la liste des entreprises
  getAllCompanies() {
    this.companyService.getAllData().subscribe((res) => {
      // this.companies = list;
      // console.log(res);
      let array = res.map((item: any) => {
        return { id: item.id, ...item };
      });
      this.companies = new MatTableDataSource(array);
      // trie le tableau
      this.companies.sort = this.matSort;
      // pagine le tableau
      this.companies.paginator = this.matPaginator;
    });
  }
  // filtre la searchbar
  applyFilterSearchBar() {
    this.companies.filter = this.searchKey.trim().toLowerCase();
  }

  // vide la searchbar
  clearSearchBar() {
    this.searchKey = '';
    this.applyFilterSearchBar();
  }
  onAdd() {
    this.companyService.menuChoice = 'Add';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.matDialog
      .open(CompanyComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.getAllCompanies();
      });
  }
  // ouvre une popup (page CompanyComponent) pour modifier
  onEdit(row: any) {
    this.companyService.menuChoice = 'Edit';
    // peuple le formulaire
    this.companyService.formGroup = this.formBuilder.group(
      Object.assign({}, row)
    );
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.matDialog
      .open(CompanyComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.getAllCompanies();
      });
  }
}
