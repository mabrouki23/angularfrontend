import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EvenementService } from '../evenement.service';
import { Evenement } from '../model/evenement.model';
import { CustomeDateValidators } from '../validation/datePickerValidator';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  eventForm!: FormGroup;  
  submitted = false;
  evenement!: Evenement;
  validationMassages={
    'nom':{
'required':'le champ nom est obligatoir',
'maxLength':' le nom doit etre de mois que 30 characters'
    },
    'description':{
      'required':'le champ descrition est obligatoir'
    },
    'dateDebut':{
      'required':'date debut est obligatoir',
      'dateValide':'Date debut doit etre avant date fin'
    },
    'dateFin':{
      'required':'date de fin est obligatoir',
      'dateValide':'Date fin doit etre apres date debut'
    }
  }
  constructor(private evenementService:EvenementService, 
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone) {
     
     }
     
     
      get f(): { [key: string]: AbstractControl } {
      return this.eventForm.controls;
    }

  ngOnInit(): void {    
    this.eventForm = this.formBuilder.group({
      nom:new FormControl('',Validators.compose([Validators.required, Validators.maxLength(30)])),        
      description:new FormControl('',Validators.required),
      dateDebut: new FormControl('',Validators.required),
      dateFin: new FormControl('',Validators.required),    
  }, { validators: CustomeDateValidators.fromToDate('dateDebut', 'dateFin')        
    });

    
  }
  get nom(){
    return this.eventForm.get('nom');
  }
  get dateDebut(){
    return this.eventForm.get('dateDebut');
  }
  get dateFin(){
    return this.eventForm.get('dateFin');
  }
  get description(){
    return this.eventForm.get('description');
  }
  onSubmit():any{
    this.submitted = true;
    if (this.eventForm.invalid) {
      return;}
    this.evenementService.saveEvenement(this.eventForm.value).subscribe(
      () => {        
          console.log('Data added successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/evenements'))
        }, (err) => {
          console.log(err);
      });
    }
    onReset(): void {
      this.submitted = false;
      this.eventForm.reset();
    }
   goBack():void{
    this.submitted = false;
    this.router.navigateByUrl('/evenements')
   }
  }

