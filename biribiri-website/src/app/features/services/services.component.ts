import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DataService } from '../../core/services/data.service';
import { Service } from '../../core/models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <div class="max-w-container mx-auto px-4 text-center">
        <div class="animate-fade-up">
          <h1 class="text-title font-black uppercase tracking-wider text-text-primary mb-6">
            SERVICIOS
            <span class="block text-accent">ESPECIALIZADOS</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Rehabilitación deportiva de elite con metodología científica y técnicas avanzadas 
            para maximizar tu rendimiento y acelerar tu recuperación.
          </p>
          <app-button size="lg" routerLink="/contacto">
            AGENDAR EVALUACIÓN GRATUITA
          </app-button>
        </div>
      </div>
    </section>

    <!-- Services Categories -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            (click)="filterServices('all')"
            [class]="getFilterButtonClasses('all')"
            class="px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300">
            TODOS
          </button>
          <button 
            (click)="filterServices('sports')"
            [class]="getFilterButtonClasses('sports')"
            class="px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300">
            DEPORTIVA
          </button>
          <button 
            (click)="filterServices('rehabilitation')"
            [class]="getFilterButtonClasses('rehabilitation')"
            class="px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300">
            REHABILITACIÓN
          </button>
          <button 
            (click)="filterServices('wellness')"
            [class]="getFilterButtonClasses('wellness')"
            class="px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300">
            BIENESTAR
          </button>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let service of filteredServices; trackBy: trackByServiceId"
            class="group bg-bg-primary rounded-lg shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            
            <!-- Service Image -->
            <div class="relative h-48 bg-gradient-to-br from-accent to-accent-hover overflow-hidden">
              <img 
                [src]="'https://via.placeholder.com/400x300/e31e24/ffffff?text=' + service.name.replace(' ', '+')"
                [alt]="service.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4 bg-text-highlight text-bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {{ getCategoryName(service.category) }}
              </div>
              
              <!-- Price Badge -->
              <div class="absolute bottom-4 right-4 bg-bg-primary text-accent px-4 py-2 rounded-lg font-black text-lg">
                \${{ service.price }}
              </div>
            </div>

            <!-- Service Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold uppercase tracking-wider text-text-primary mb-3 group-hover:text-accent transition-colors">
                {{ service.name }}
              </h3>
              <p class="text-text-secondary mb-4 leading-relaxed">
                {{ service.description }}
              </p>
              
              <!-- Service Details -->
              <div class="flex items-center justify-between mb-6 text-sm">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-text-secondary">{{ service.duration }} minutos</span>
                </div>
                <div class="flex items-center space-x-1">
                  <span class="text-text-highlight">★★★★★</span>
                  <span class="text-text-secondary">(4.9)</span>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="space-y-3">
                <app-button class="w-full" routerLink="/contacto">
                  RESERVAR CITA
                </app-button>
                <button class="w-full text-center text-accent hover:text-accent-hover font-semibold uppercase tracking-wider transition-colors">
                  MÁS INFORMACIÓN
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div 
          *ngIf="filteredServices.length === 0"
          class="text-center py-16">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-xl font-bold text-text-primary mb-2">No hay servicios disponibles</h3>
          <p class="text-text-secondary">Prueba con otra categoría</p>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            NUESTRO PROCESO
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Metodología probada para garantizar resultados excepcionales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl font-black text-text-primary">1</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-3">
              EVALUACIÓN
            </h3>
            <p class="text-text-secondary text-sm">
              Análisis completo de tu condición física y objetivos específicos
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl font-black text-text-primary">2</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-3">
              PLANIFICACIÓN
            </h3>
            <p class="text-text-secondary text-sm">
              Diseño de programa personalizado basado en evidencia científica
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl font-black text-text-primary">3</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-3">
              TRATAMIENTO
            </h3>
            <p class="text-text-secondary text-sm">
              Aplicación de técnicas avanzadas con seguimiento continuo
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span class="text-2xl font-black text-text-primary">4</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-3">
              RESULTADOS
            </h3>
            <p class="text-text-secondary text-sm">
              Optimización del rendimiento y prevención de futuras lesiones
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            ESPECIALIDADES
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Técnicas especializadas para cada tipo de atleta y necesidad
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-bg-primary p-8 rounded-lg shadow-card">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                  TERAPIA MANUAL AVANZADA
                </h3>
                <p class="text-text-secondary">
                  Técnicas de movilización articular y manipulación para restaurar el movimiento óptimo.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-bg-primary p-8 rounded-lg shadow-card">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                  EJERCICIO TERAPÉUTICO
                </h3>
                <p class="text-text-secondary">
                  Programas de fortalecimiento y reacondicionamiento específicos para cada deporte.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-bg-primary p-8 rounded-lg shadow-card">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                  MEDICINA DEPORTIVA
                </h3>
                <p class="text-text-secondary">
                  Prevención y tratamiento de lesiones específicas del deporte que practicas.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-bg-primary p-8 rounded-lg shadow-card">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                  ANÁLISIS BIOMECÁNICO
                </h3>
                <p class="text-text-secondary">
                  Evaluación del movimiento para optimizar técnica y prevenir lesiones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-accent to-accent-hover">
      <div class="max-w-container mx-auto px-4 text-center">
        <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-6">
          COMIENZA TU TRANSFORMACIÓN HOY
        </h2>
        <p class="text-xl text-text-primary mb-8 max-w-2xl mx-auto">
          Primera consulta gratuita para evaluar tu situación y diseñar tu plan personalizado
        </p>
        <app-button variant="secondary" size="lg" routerLink="/contacto">
          AGENDAR CONSULTA GRATUITA
        </app-button>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  activeFilter = 'all';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServices().subscribe(services => {
      this.services = services;
      this.filteredServices = services;
    });
  }

  filterServices(category: string): void {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredServices = this.services;
    } else {
      this.filteredServices = this.services.filter(service => service.category === category);
    }
  }

  getFilterButtonClasses(filter: string): string {
    const baseClasses = 'rounded-lg border-2 transition-all duration-300';
    const activeClasses = 'bg-accent border-accent text-text-primary';
    const inactiveClasses = 'bg-transparent border-border text-text-secondary hover:border-accent hover:text-accent';
    
    return `${baseClasses} ${this.activeFilter === filter ? activeClasses : inactiveClasses}`;
  }

  getCategoryName(category: string): string {
    const categories: { [key: string]: string } = {
      'sports': 'DEPORTIVA',
      'rehabilitation': 'REHABILITACIÓN',
      'wellness': 'BIENESTAR'
    };
    return categories[category] || category.toUpperCase();
  }

  trackByServiceId(index: number, service: Service): string {
    return service.id;
  }
}