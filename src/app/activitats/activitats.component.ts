import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activitats',
  templateUrl: './activitats.component.html',
  styleUrls: ['./activitats.component.css']
})
export class ActivitatsComponent implements OnInit {
  profesors: any[]=[];
  alumne10: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenirProfesors();
    this.obtenirAlumne10();
  }

  obtenirProfesors() {
    this.http.get<any[]>('http://localhost:3080/llistaProf').subscribe(
      (response) => {
        this.profesors = response;
        console.log(this.profesors)
      }
    );
  }
  obtenirAlumne10() {
    this.http.get<any>('http://localhost:3080/naiDe10').subscribe(
      (response) => {
        this.alumne10 = response;
      }

    );
  }
}
