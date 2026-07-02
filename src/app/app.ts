import { Component, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Profil } from "./components/profil/profil";
import { Parcours } from "./components/parcours/parcours";
import { PostBac } from "./components/post-bac/post-bac";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

interface CircuitNode {
  top: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Profil, Parcours, Header, Footer, PostBac],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Ky');
  loaded = false;
  nodes: CircuitNode[] = [];
  showBackToTop = false;
  backToTopBottom = 28; // 👈 ajouté : distance dynamique par rapport au bas de l'écran

  private readonly baseBottom = 28; // valeur de base (correspond à app.css)
  private readonly gapAboveFooter = 20; // espace voulu entre le bouton et le footer

  ngOnInit(): void {
    this.nodes = Array.from({ length: 8 }, () => ({
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 3,
      size: 5 + Math.random() * 4
    }));

    requestAnimationFrame(() => {
      this.loaded = true;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.showBackToTop = scrollY > 300;

    // 👇 ajouté : pousse le bouton vers le haut si le footer commence à apparaître
    const footerEl = document.querySelector('app-footer');
    if (footerEl) {
      const footerTop = footerEl.getBoundingClientRect().top;
      const overlap = window.innerHeight - footerTop + this.gapAboveFooter;
      this.backToTopBottom = Math.max(this.baseBottom, overlap);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}