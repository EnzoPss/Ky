import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PostBacItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-post-bac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-bac.html',
  styleUrl: './post-bac.css',
})
export class PostBac {
  openIndex: number | null = null;

  items: PostBacItem[] = [
    {
      title: 'Titre du poste',
      company: 'Nom de l\'entreprise',
      date: '2024 - 2025',
      description: 'Description de la mission, des responsabilités et des résultats obtenus durant cette expérience.'
    },
    {
      title: 'Titre du poste',
      company: 'Nom de l\'entreprise',
      date: '2023 - 2024',
      description: 'Description de la mission, des responsabilités et des résultats obtenus durant cette expérience.'
    }
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}