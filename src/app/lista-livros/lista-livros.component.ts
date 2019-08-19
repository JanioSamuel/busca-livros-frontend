import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { BuscaLivrosService } from '../busca-livros.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    search: new FormControl(''),
    datIni: new FormControl(''),
    datFim: new FormControl('')
  });
  public shouldRun: boolean = false;
  public formBuild: FormBuilder;
  columnsToDisplay = ['Livro', 'ISBN', 'Autor', 'Editora', 'Ano', 'Ações'];
  livros = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private buscaLivrosService: BuscaLivrosService, private router: Router) { }

  ngOnInit() {
    this.buscaLivrosService.getAllBooks().subscribe((data: any) => {
      this.livros.data = data;
      this.livros.paginator = this.paginator;
    })
  }

  applyFilter() {
    let filters = {
      datIni: this.formGroup.value.datIni != null && this.formGroup.value.datIni != "" ? this.formGroup.value.datIni : null,
      datFim: this.formGroup.value.datFim != null && this.formGroup.value.datFim != "" ? this.formGroup.value.datFim : null,
      search: this.formGroup.value.search != null && this.formGroup.value.search != "" ? this.formGroup.value.search : null
    }
    if(filters['datIni'] == null && filters['datFim'] == null && filters['search'] == null) {
      this.buscaLivrosService.getAllBooks().subscribe((data: any) => {
        this.livros.data = data;
        this.livros.paginator = this.paginator;
      })
    } else {
      this.buscaLivrosService.getBooksFilter(filters).subscribe((data: any) => {
        this.livros.data = data;
        this.livros.paginator = this.paginator;
      })
    }
  }

  goToDetails(event) {
    this.router.navigate(['/details', event.id]);
    console.log(event);
  }
}
 