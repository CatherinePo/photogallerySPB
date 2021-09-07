import { Component, OnInit } from '@angular/core';
import { photos } from '../photos';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit {
  photos = photos;
  constructor() { }

  ngOnInit(): void {
  }

}
