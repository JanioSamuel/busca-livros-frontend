import { Component, OnInit } from '@angular/core';
import { BuscaLivrosService } from '../busca-livros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details = [];
  constructor(private buscaLivrosService: BuscaLivrosService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.buscaLivrosService.getBookDetails(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.details = data;
    })
  }

}
