import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement.service';
import { Evenement } from '../model/evenement.model';

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})
export class ListEvenementComponent implements OnInit {
  evenements!: Evenement[];
  constructor(private evenementService:EvenementService) { }

  ngOnInit(): void {
    this.onGetAllEvenements()
    console.log(this.evenements);
  }
  onGetAllEvenements (){
    this.evenementService.getAllEvenements().subscribe(data=>{      
      this.evenements = data;
      console.log(this.evenements);
    },err=>{console.log(err)})     
  }
  delete(id:number){

  }
 
}
