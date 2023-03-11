import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component {
  classeDiv1 = 'visivel';
  classeDiv2 = 'visivel';
  classeDiv3 = 'visivel';

  mudar(aba:number){
    if(aba == 1){
    this.classeDiv1 = 'visivel';
    this.classeDiv2 = 'invisivel';
    this.classeDiv3 = 'invisivel';
    }else if(aba == 2){
    this.classeDiv1 = 'invisivel';
    this.classeDiv2 = 'visivel';
    this.classeDiv3 = 'invisivel';
    }else{
    this.classeDiv1 = 'invisivel';
    this.classeDiv2 = 'invisivel';
    this.classeDiv3 = 'visivel';
    }
  };
}
