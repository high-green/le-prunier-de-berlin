import { Component, OnInit } from '@angular/core';
import { ScriptService } from './services/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'punier-berlin-1';

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load('swiper', 'custom')
  }
}
