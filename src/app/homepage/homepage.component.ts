import { Component } from '@angular/core';
import { MaincontentComponent } from "./maincontent/maincontent.component";
import { HomelabsComponent } from "../homelabs/homelabs.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MaincontentComponent, HomelabsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
