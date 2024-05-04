import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  user : any = JSON.parse(localStorage.getItem('user') as string);
  id = this.route.snapshot.params['id'];


  constructor(private authService : AuthService , private evaluationService : EvaluationService , private route : ActivatedRoute , private toast : NgToastService , private router : Router) { }

  ngOnInit() {
    this.authService.getClient(this.user.id).subscribe((data) => {
      this.user = (data.data as any).client;
    });
  }

  evalutation(form : NgForm){
    const data = {
      ...form,
      clientId : this.user.id,
      produitId : this.id
    }
    this.evaluationService.createEvaluation(data).subscribe((data) => {
      this.toast.success({detail : 'Success' , summary : 'Evaluation ajoutée avec succès'});
      //reset form
      setTimeout(() => {
        this.router.navigate(['/produit/' + this.id]);
      }, 2000);
    } , (error) => {
      this.toast.error({detail : 'Error' , summary : 'Erreur lors de l\'ajout de l\'evaluation'});
    });
    

  }

}
