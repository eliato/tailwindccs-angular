import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tail-ag';


  ngOnInit(): void {
   const menuButton = document.querySelector('#mobile-menu')
  menuButton?.addEventListener('click', e => {
    const menu = document.querySelector('.mobile-links')
    menu?.classList.toggle('hidden')
  })
  }
  

   


}
