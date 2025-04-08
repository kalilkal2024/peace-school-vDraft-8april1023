import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-volunteer-gallery',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './volunteer-gallery.component.html',
  styleUrls: ['./volunteer-gallery.component.scss']
})
export class VolunteerGalleryComponent {
  galleryImages = [
    {
      url: 'assets/images/gallery/test.jpg',
      caption: 'English Teaching Workshop'
    },
    {
      url: 'assets/images/gallery/community-project.jpg',
      caption: 'Community Development Project'
    },
    {
      url: 'assets/images/gallery/cultural-exchange.jpg',
      caption: 'Cultural Exchange Activities'
    },
    {
      url: 'assets/images/gallery/sports-program.jpg',
      caption: 'Sports Program with Local Children'
    },
    {
      url: 'assets/images/gallery/classroom.jpg',
      caption: 'Classroom Activities'
    }
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  };
}