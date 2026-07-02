import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  isScrolled = false;
  loaded = false; // 👈 AJOUT : pilote l'animation d'entrée

  // --- Personnalisation ---
  profileImage = 'https://www.photofunky.net/output/image/b/a/0/9/ba0992/photofunky.gif';
  firstName = 'Kyliann';
  lastName = 'MEDERIC';
  tagline = 'Commercial';
  // ------------------------

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.loaded = true; // 👈 AJOUT
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 40;
  }
}