import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { DataService } from '../../core/services/data.service';
import { Service, Supplement } from '../../core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-pattern"></div>
      </div>

      <div class="max-w-container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <!-- Content -->
        <div class="space-y-8 animate-fade-up">
          <div class="space-y-4">
            <div class="inline-block bg-accent px-4 py-2 rounded-full">
              <span class="text-sm font-bold uppercase tracking-wider text-text-primary">
                🏆 Centro Especializado
              </span>
            </div>
            <h1 class="text-title font-black leading-tight text-text-primary">
              LLEVA TU
              <span class="block text-accent">RENDIMIENTO</span>
              AL LÍMITE
            </h1>
            <p class="text-xl text-text-secondary leading-relaxed max-w-md">
              Fisioterapia deportiva de elite y suplementos premium para atletas que no se conforman con menos.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <app-button size="lg" routerLink="/contacto">
              RESERVAR EVALUACIÓN
            </app-button>
            <app-button variant="secondary" size="lg" routerLink="/suplementos">
              VER SUPLEMENTOS
            </app-button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div class="text-center">
              <div class="text-3xl font-black text-accent">500+</div>
              <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">Atletas</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-accent">98%</div>
              <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">Recuperación</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-accent">5★</div>
              <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">Valoración</div>
            </div>
          </div>
        </div>

        <!-- Product Showcase -->
        <div class="relative">
          <div class="relative z-10 bg-gradient-to-br from-bg-secondary to-transparent p-8 rounded-lg shadow-card">
            <div class="absolute -top-4 -right-4 bg-text-highlight text-bg-primary px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              NUEVO
            </div>
            <img 
              src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="BIRIBIRI Whey Pro" 
              class="w-full h-auto max-w-sm mx-auto rounded-lg shadow-lg">
            <div class="mt-6 text-center">
              <h3 class="text-2xl font-black uppercase tracking-wider text-text-primary mb-2">
                BIRIBIRI WHEY PRO
              </h3>
              <p class="text-text-secondary mb-4">
                Proteína premium para máximo rendimiento
              </p>
              <div class="text-3xl font-black text-accent mb-4">$89.99</div>
              <app-button class="w-full">
                COMPRAR AHORA
              </app-button>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-8 -left-8 w-16 h-16 bg-accent rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-accent rounded-full opacity-30"></div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            SERVICIOS ESPECIALIZADOS
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Metodología científica y técnicas avanzadas para maximizar tu potencial
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            *ngFor="let service of featuredServices" 
            class="group bg-bg-primary p-8 rounded-lg shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="mb-6">
              <div class="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold uppercase tracking-wider text-text-primary mb-2">
                {{ service.name }}
              </h3>
              <p class="text-text-secondary mb-4">
                {{ service.description }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-black text-accent">\${{ service.price }}</span>
                <span class="text-sm text-text-secondary">{{ service.duration }}min</span>
              </div>
            </div>
            <app-button variant="secondary" class="w-full">
              MÁS INFO
            </app-button>
          </div>
        </div>

        <div class="text-center mt-12">
          <app-button size="lg" routerLink="/servicios">
            VER TODOS LOS SERVICIOS
          </app-button>
        </div>
      </div>
    </section>

    <!-- Supplements Showcase -->
    <section class="py-20 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            SUPLEMENTOS PREMIUM
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Fórmulas científicamente respaldadas para atletas de elite
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            *ngFor="let supplement of featuredSupplements" 
            class="group bg-bg-secondary p-6 rounded-lg shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="relative mb-6">
              <img 
[src]="getSupplementImage(supplement.id)" 
                [alt]="supplement.name"
                class="w-full h-48 object-cover rounded-lg">
              <div 
                *ngIf="!supplement.inStock"
                class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg">
                <span class="text-text-primary font-bold uppercase tracking-wider">AGOTADO</span>
              </div>
            </div>
            
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              {{ supplement.name }}
            </h3>
            <p class="text-text-secondary mb-4 text-sm">
              {{ supplement.description }}
            </p>
            
            <div class="flex items-center justify-between mb-4">
              <span class="text-2xl font-black text-accent">\${{ supplement.price }}</span>
              <div class="flex items-center space-x-1">
                <span class="text-text-highlight">★</span>
                <span class="text-sm text-text-secondary">{{ supplement.rating }} ({{ supplement.reviews }})</span>
              </div>
            </div>
            
            <app-button 
              [class]="'w-full'"
              [disabled]="!supplement.inStock">
              {{ supplement.inStock ? 'AÑADIR AL CARRITO' : 'AGOTADO' }}
            </app-button>
          </div>
        </div>

        <div class="text-center mt-12">
          <app-button size="lg" routerLink="/suplementos">
            VER CATÁLOGO COMPLETO
          </app-button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-accent to-accent-hover">
      <div class="max-w-container mx-auto px-4 text-center">
        <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-6">
          ¿LISTO PARA EL SIGUIENTE NIVEL?
        </h2>
        <p class="text-xl text-text-primary mb-8 max-w-2xl mx-auto">
          Únete a cientos de atletas que han transformado su rendimiento con BIRIBIRI
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <app-button variant="secondary" size="lg" routerLink="/contacto">
            AGENDAR CONSULTA GRATUITA
          </app-button>
          <app-button variant="secondary" size="lg" routerLink="/sobre-mi">
            CONOCE AL ESPECIALISTA
          </app-button>
        </div>
      </div>
    </section>

    <!-- Merchandise Section -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="animate-fade-up">
            <div class="inline-block bg-accent px-4 py-2 rounded-full mb-6">
              <span class="text-sm font-bold uppercase tracking-wider text-text-primary">
                👕 MERCHANDISE OFICIAL
              </span>
            </div>
            <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-6">
              VISTE LA
              <span class="block text-accent">MARCA BIRIBIRI</span>
            </h2>
            <p class="text-xl text-text-secondary leading-relaxed mb-8">
              Ropa deportiva de alta calidad que representa el estilo de vida BIRIBIRI. 
              Comodidad, durabilidad y diseño exclusivo para los verdaderos atletas.
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                <span class="text-text-secondary">Material premium de alta durabilidad</span>
              </div>
              <div class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                <span class="text-text-secondary">Diseños exclusivos BIRIBIRI</span>
              </div>
              <div class="flex items-center">
                <span class="text-accent mr-3">✓</span>
                <span class="text-text-secondary">Perfecta para entrenamientos y uso casual</span>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <app-button size="lg" routerLink="/contacto">
                SOLICITAR CATÁLOGO
              </app-button>
              <app-button variant="secondary" size="lg">
                VER DISPONIBILIDAD
              </app-button>
            </div>
          </div>

          <!-- Merchandise Image -->
          <div class="relative">
            <div class="relative z-10">
              <img 
                src="/assets/images/merchandise-hoodie.jpg" 
                alt="Merchandise BIRIBIRI - Sudaderas personalizadas"
                class="w-full max-w-md mx-auto rounded-lg shadow-card">
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -top-8 -left-8 w-24 h-24 bg-accent rounded-full opacity-20"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-accent rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  featuredServices: Service[] = [];
  featuredSupplements: Supplement[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServices().subscribe(services => {
      this.featuredServices = services;
    });

    this.dataService.getSupplements().subscribe(supplements => {
      this.featuredSupplements = supplements;
    });
  }

  getSupplementImage(id: string): string {
    const images: { [key: string]: string } = {
      '1': 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      '2': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      '3': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    };
    return images[id] || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80';
  }
}