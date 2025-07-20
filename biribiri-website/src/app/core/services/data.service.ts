import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service, Supplement } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private services: Service[] = [
    {
      id: '1',
      name: 'TERAPIA DEPORTIVA',
      description: 'Rehabilitación especializada para atletas de alto rendimiento',
      price: 120,
      duration: 60,
      category: 'sports',
      image: '/assets/images/sports-therapy.jpg'
    },
    {
      id: '2',
      name: 'REHABILITACIÓN MUSCULAR',
      description: 'Recuperación post-lesión con técnicas avanzadas',
      price: 100,
      duration: 45,
      category: 'rehabilitation',
      image: '/assets/images/rehabilitation.jpg'
    },
    {
      id: '3',
      name: 'BIENESTAR PREVENTIVO',
      description: 'Mantén tu cuerpo en óptimas condiciones',
      price: 80,
      duration: 30,
      category: 'wellness',
      image: '/assets/images/wellness.jpg'
    }
  ];

  private supplements: Supplement[] = [
    {
      id: '1',
      name: 'BIRIBIRI WHEY PRO',
      description: 'Proteína de suero premium para máximo rendimiento',
      price: 89.99,
      category: 'protein',
      image: '/assets/images/whey-pro.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 256
    },
    {
      id: '2',
      name: 'POWER VITAMINS',
      description: 'Complejo vitamínico para atletas exigentes',
      price: 45.99,
      category: 'vitamins',
      image: '/assets/images/vitamins.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 189
    },
    {
      id: '3',
      name: 'PRE-WORKOUT EXTREME',
      description: 'Energía explosiva para entrenamientos intensos',
      price: 59.99,
      category: 'performance',
      image: '/assets/images/pre-workout.jpg',
      inStock: false,
      rating: 4.9,
      reviews: 342
    }
  ];

  getServices(): Observable<Service[]> {
    return of(this.services);
  }

  getServiceById(id: string): Observable<Service | undefined> {
    return of(this.services.find(service => service.id === id));
  }

  getSupplements(): Observable<Supplement[]> {
    return of(this.supplements);
  }

  getSupplementById(id: string): Observable<Supplement | undefined> {
    return of(this.supplements.find(supplement => supplement.id === id));
  }

  getSupplementsByCategory(category: string): Observable<Supplement[]> {
    return of(this.supplements.filter(supplement => supplement.category === category));
  }
}