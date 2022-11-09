import { style } from '@angular/animations';
import { Directive,Component, ElementRef, OnInit, ViewChild, Renderer2, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gallery-works',
  templateUrl: './gallery-works.component.html',
  styleUrls: ['./gallery-works.component.css']
})
export class GalleryWorksComponent implements OnInit {

  @ViewChild('asImage') image?: ElementRef;

  constructor(private Renderer2: Renderer2) {  
  }

  ngOnInit(): void {
  }

}
