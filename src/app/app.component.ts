import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    photos = [
      {
        url: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/07/starfox-950x664.jpg', 
        description: 'Star fox'
      },
      {
        url: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/07/starfox-950x664.jpg', 
        description: 'Star fox'
      }
    ];

}
