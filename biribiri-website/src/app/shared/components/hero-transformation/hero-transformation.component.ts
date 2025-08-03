import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero-transformation',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <!-- Hero Transformation Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden" 
             [style.background]="'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary), var(--bg-primary))'">
      <!-- Background Pattern Mejorado -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-pattern"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
             [style.background-color]="'var(--accent)'"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"
             [style.background-color]="'var(--text-highlight)'"></div>
      </div>

      <div class="max-w-container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <!-- Content Optimizado -->
        <div class="space-y-8 animate-fade-up">
          <div class="space-y-6">
            <!-- Credibility Badge Mejorado -->
            <div class="flex items-center space-x-4">
              <div class="inline-block px-6 py-3 rounded-full shadow-lg"
                   [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'">
                <span class="text-sm font-black uppercase tracking-wider"
                      [style.color]="'var(--text-primary)'">
                  🏆 #1 CENTRO ESPECIALIZADO
                </span>
              </div>
              <div class="bg-green-500/20 px-3 py-1 rounded-full">
                <span class="text-green-400 text-xs font-bold">✓ CERTIFICADO</span>
              </div>
            </div>

            <!-- Headline Emocional -->
            <h1 class="text-title font-black leading-tight" 
                [style.color]="'var(--text-primary)'">
              <span class="relative">
                TRANSFORMA TU
                <div class="absolute -bottom-2 left-0 w-full h-1 rounded-full transform scale-x-0 animate-scale-x delay-500"
                     [style.background-color]="'var(--accent)'"></div>
              </span>
              <span class="block mt-2" 
                    [style.color]="'var(--accent)'">CUERPO Y MENTE</span>
              <span class="block text-2xl font-bold mt-2" 
                    [style.color]="'var(--text-secondary)'">
                en solo 30 días
              </span>
            </h1>

            <!-- Value Proposition Mejorada -->
            <div class="p-6 rounded-2xl border"
                 [style.background]="'linear-gradient(to right, var(--bg-secondary), transparent)'"
                 [style.border-color]="'var(--accent)'">
              <p class="text-xl leading-relaxed font-semibold mb-4"
                 [style.color]="'var(--text-primary)'">
                Únete a <span class="font-black" [style.color]="'var(--accent)'">500+ atletas de elite</span> que han logrado:
              </p>
              <div class="grid grid-cols-2 gap-4" 
                   [style.color]="'var(--text-secondary)'">
                <div class="flex items-center space-x-2">
                  <span class="text-green-400">⚡</span>
                  <span class="text-sm font-semibold">+40% Rendimiento</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-400">🎯</span>
                  <span class="text-sm font-semibold">-50% Tiempo recuperación</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-400">💪</span>
                  <span class="text-sm font-semibold">+60% Fuerza</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-400">🧠</span>
                  <span class="text-sm font-semibold">+35% Concentración</span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTAs con Urgencia -->
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row gap-4">
              <app-button size="lg" routerLink="/contacto" class="group relative overflow-hidden">
                <span class="relative z-10">
                  EVALUACIÓN GRATUITA
                </span>
                <span class="absolute top-0 right-0 bg-text-highlight text-bg-primary text-xs px-2 py-1 rounded-bl-lg font-bold">
                  GRATIS
                </span>
              </app-button>
              <app-button variant="secondary" size="lg" routerLink="/suplementos">
                <span class="flex items-center space-x-2">
                  <span>SUPLEMENTOS PREMIUM</span>
                  <span class="text-yellow-400">★</span>
                </span>
              </app-button>
            </div>
            
            <!-- Urgencia Sutil -->
            <div class="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg">
              <p class="text-red-400 text-sm font-semibold flex items-center space-x-2">
                <span>⏰</span>
                <span>Solo quedan 3 espacios disponibles esta semana</span>
              </p>
            </div>
          </div>

          <!-- Social Proof Mejorado -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t" 
               [style.border-color]="'var(--border)'">
            <div class="text-center group">
              <div class="text-4xl font-black mb-1 group-hover:scale-110 transition-transform"
                   [style.color]="'var(--accent)'">500+</div>
              <div class="text-xs font-semibold uppercase tracking-wider"
                   [style.color]="'var(--text-secondary)'">Atletas Transformados</div>
              <div class="text-yellow-400 text-xs mt-1">★★★★★</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl font-black mb-1 group-hover:scale-110 transition-transform"
                   [style.color]="'var(--accent)'">15+</div>
              <div class="text-xs font-semibold uppercase tracking-wider"
                   [style.color]="'var(--text-secondary)'">Años Experiencia</div>
              <div class="text-green-400 text-xs mt-1">✓ Certificado</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl font-black mb-1 group-hover:scale-110 transition-transform"
                   [style.color]="'var(--accent)'">98%</div>
              <div class="text-xs font-semibold uppercase tracking-wider"
                   [style.color]="'var(--text-secondary)'">Éxito Garantizado</div>
              <div class="text-blue-400 text-xs mt-1">🏆 Premium</div>
            </div>
          </div>

          <!-- Testimonial Rápido -->
          <div class="p-4 rounded-r-lg border-l-4"
               [style.background-color]="'rgba(var(--accent-rgb), 0.1)'"
               [style.border-color]="'var(--accent)'">
            <p class="italic text-sm mb-2"
               [style.color]="'var(--text-secondary)'">
              "En 30 días logré lo que no conseguí en 2 años. BIRIBIRI cambió mi vida."
            </p>
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full flex items-center justify-center"
                   [style.background-color]="'var(--accent)'">
                <span class="font-bold text-xs" [style.color]="'var(--text-primary)'">MJ</span>
              </div>
              <div>
                <div class="font-semibold text-sm" [style.color]="'var(--text-primary)'">María José</div>
                <div class="text-xs" [style.color]="'var(--text-secondary)'">Atleta Profesional</div>
              </div>
              <div class="text-yellow-400 text-sm">★★★★★</div>
            </div>
          </div>
        </div>

        <!-- Transformation Showcase -->
        <div class="relative">
          <!-- Programa de Transformación -->
          <div class="relative z-10 p-8 rounded-2xl shadow-card border"
               [style.background]="'linear-gradient(to bottom right, var(--bg-secondary), transparent)'"
               [style.border-color]="'rgba(var(--accent-rgb), 0.2)'">
            <div class="absolute -top-4 -right-4 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg"
                 [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'"
                 [style.color]="'var(--text-primary)'">
              PROGRAMA VIP
            </div>
            
            <!-- Hero Visual -->
            <div class="text-center mb-6">
              <div class="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center relative overflow-hidden"
                   [style.background]="'linear-gradient(to bottom right, rgba(var(--accent-rgb), 0.2), rgba(var(--accent-rgb), 0.05))'">
                <div class="absolute inset-2 rounded-full flex items-center justify-center"
                     [style.background]="'linear-gradient(to bottom right, var(--accent), var(--accent-hover))'">
                  <div class="text-4xl">💪</div>
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                     [style.background-color]="'var(--text-highlight)'">
                  <span class="font-bold text-xs" [style.color]="'var(--bg-primary)'">30</span>
                </div>
              </div>
            </div>
            
            <div class="text-center">
              <h3 class="text-2xl font-black uppercase tracking-wider mb-3"
                  [style.color]="'var(--text-primary)'">
                TRANSFORMACIÓN
                <span class="block text-lg" [style.color]="'var(--accent)'">INTEGRAL 30 DÍAS</span>
              </h3>
              
              <div class="p-4 rounded-lg mb-6"
                   [style.background-color]="'rgba(var(--accent-rgb), 0.1)'">
                <p class="text-sm mb-3 font-semibold"
                   [style.color]="'var(--text-secondary)'">
                  Plan completo que incluye:
                </p>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="flex items-center space-x-1">
                    <span class="text-green-400">✓</span>
                    <span>Fisioterapia</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span class="text-green-400">✓</span>
                    <span>Suplementos</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span class="text-green-400">✓</span>
                    <span>Nutrición</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span class="text-green-400">✓</span>
                    <span>Seguimiento</span>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center justify-center space-x-3 mb-6">
                <div class="text-center">
                  <div class="text-sm line-through" [style.color]="'var(--text-secondary)'">$299</div>
                  <div class="text-3xl font-black" [style.color]="'var(--accent)'">$199</div>
                </div>
                <div class="bg-red-500/20 px-3 py-1 rounded-full">
                  <span class="text-red-400 text-xs font-bold">-33% HOY</span>
                </div>
              </div>
              
              <app-button class="w-full mb-4" routerLink="/contacto">
                <span class="flex items-center justify-center space-x-2">
                  <span>COMENZAR AHORA</span>
                  <span>🚀</span>
                </span>
              </app-button>
              
              <div class="text-xs" [style.color]="'var(--text-secondary)'">
                ⏰ Solo 3 espacios disponibles
              </div>
            </div>
          </div>
          
          <!-- Floating Elements Mejorados -->
          <div class="absolute -top-8 -left-8 w-16 h-16 rounded-full opacity-20 animate-pulse"
               [style.background-color]="'var(--accent)'"></div>
          <div class="absolute -bottom-8 -right-8 w-24 h-24 border-4 rounded-full opacity-30"
               [style.border-color]="'var(--accent)'"></div>
          <div class="absolute top-1/2 -left-4 w-8 h-8 rounded-full opacity-40 animate-bounce delay-500"
               [style.background-color]="'var(--text-highlight)'"></div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroTransformationComponent {
  constructor() {}
}