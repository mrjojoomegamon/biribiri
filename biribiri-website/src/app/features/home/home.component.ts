import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroBootcampComponent } from '../../shared/components/hero-bootcamp/hero-bootcamp.component';
import { AboutSectionComponent } from '../../shared/components/about-section/about-section.component';
import { DataService } from '../../core/services/data.service';
import { Service, Supplement } from '../../core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, HeroBootcampComponent, AboutSectionComponent],
  template: `
    <!-- Hero Bootcamp Section -->
    <app-hero-bootcamp></app-hero-bootcamp>

    <!-- Services Preview Optimizada -->
    <section class="py-20 relative overflow-hidden" 
             [style.background-color]="'var(--bg-secondary)'">
      <!-- Background Effect -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
             [style.background-color]="'var(--accent)'"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
             [style.background-color]="'var(--text-highlight)'"></div>
      </div>

      <div class="max-w-container mx-auto px-4 relative z-10">
        <!-- Header Mejorado -->
        <div class="text-center mb-16">
          <!-- Authority Badge -->
          <div class="inline-block px-6 py-3 rounded-full mb-6 shadow-lg"
               [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'">
            <span class="text-sm font-black uppercase tracking-wider" 
                  [style.color]="'var(--text-primary)'">
              🇨🇺 WORKOUT BIRI BIRI • ENTRENADOR CUBANO PROFESIONAL
            </span>
          </div>

          <h2 class="text-subtitle font-black uppercase tracking-wider mb-6"
              [style.color]="'var(--text-primary)'">
            <span class="relative">
              RECUPERA TU
              <div class="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                   [style.background-color]="'var(--accent)'"></div>
            </span>
            <span class="block" [style.color]="'var(--accent)'">MEJOR VERSIÓN</span>
          </h2>

          <div class="max-w-3xl mx-auto mb-8">
            <p class="text-xl font-semibold mb-4" [style.color]="'var(--text-primary)'">
              Metodología cubana + ciencia deportiva con <span class="font-black" [style.color]="'var(--accent)'">carisma y energía latina</span> que transforma vidas
            </p>
            <div class="flex items-center justify-center space-x-8 text-sm" [style.color]="'var(--text-secondary)'">
              <div class="flex items-center space-x-2">
                <span class="text-green-400">✓</span>
                <span>Metodología científica</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-green-400">✓</span>
                <span>Resultados garantizados</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-green-400">✓</span>
                <span>Certificación internacional</span>
              </div>
            </div>
          </div>

          <!-- Social Proof Rápido -->
          <div class="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg inline-block mb-8">
            <p class="text-green-400 font-semibold text-sm flex items-center space-x-2">
              <span>⚡</span>
              <span>Últimas 48h: 12 atletas han reservado sesiones</span>
            </p>
          </div>
        </div>

        <!-- Services Grid Optimizada -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div 
            *ngFor="let service of featuredServices; let i = index" 
            class="group relative p-8 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-transparent hover:border-accent/30 overflow-hidden"
            [style.background]="'linear-gradient(to bottom right, var(--bg-primary), var(--bg-secondary))'">
            
            <!-- Popularity Badge -->
            <div *ngIf="i === 0" class="absolute -top-3 -right-3 z-20">
              <div class="px-4 py-2 rounded-full shadow-lg"
                   [style.background]="'linear-gradient(to right, var(--text-highlight), #ffa500)'">
                <span class="text-xs font-black uppercase tracking-wider text-black">
                  🔥 MÁS POPULAR
                </span>
              </div>
            </div>

            <!-- Premium Badge -->
            <div *ngIf="i === 1" class="absolute -top-3 -right-3 z-20">
              <div class="bg-purple-600 px-4 py-2 rounded-full shadow-lg">
                <span class="text-xs font-black uppercase tracking-wider text-white">
                  💎 PREMIUM
                </span>
              </div>
            </div>

            <!-- Best Value Badge -->
            <div *ngIf="i === 2" class="absolute -top-3 -right-3 z-20">
              <div class="bg-green-600 px-4 py-2 rounded-full shadow-lg">
                <span class="text-xs font-black uppercase tracking-wider text-white">
                  💰 MEJOR VALOR
                </span>
              </div>
            </div>

            <!-- Shine Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            
            <div class="relative z-10">
              <!-- Icon & Service Info -->
              <div class="mb-6">
                <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"
                     [style.background]="'linear-gradient(to bottom right, var(--accent), var(--accent-hover))'">
                  <div class="text-3xl">{{ getServiceIcon(i) }}</div>
                </div>
                
                <h3 class="text-xl font-black uppercase tracking-wider mb-3 group-hover:text-accent transition-colors"
                    [style.color]="'var(--text-primary)'">
                  {{ service.name }}
                </h3>
                
                <p class="mb-6 leading-relaxed" [style.color]="'var(--text-secondary)'">
                  {{ service.description }}
                </p>

                <!-- Benefits List -->
                <div class="mb-6 space-y-2">
                  <div *ngFor="let benefit of getServiceBenefits(i)" 
                       class="flex items-center space-x-2 text-sm">
                    <span class="text-green-400">✓</span>
                    <span [style.color]="'var(--text-secondary)'">{{ benefit }}</span>
                  </div>
                </div>
              </div>

              <!-- Pricing Section -->
              <div class="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-xl mb-6 border"
                   [style.border-color]="'var(--accent)'">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <div class="text-sm line-through" [style.color]="'var(--text-secondary)'">\${{ (service.price * 1.4).toFixed(0) }}</div>
                    <div class="text-3xl font-black" [style.color]="'var(--accent)'">\${{ service.price }}</div>
                  </div>
                  <div class="text-right">
                    <div class="bg-red-500/20 px-2 py-1 rounded-full mb-1">
                      <span class="text-red-400 text-xs font-bold">-30% HOY</span>
                    </div>
                    <div class="text-sm" [style.color]="'var(--text-secondary)'">{{ service.duration }} minutos</div>
                  </div>
                </div>

                <!-- Urgency Element -->
                <div class="bg-yellow-500/10 border border-yellow-500/20 px-3 py-2 rounded-lg mb-4">
                  <p class="text-yellow-400 text-xs font-semibold flex items-center space-x-2">
                    <span>⏰</span>
                    <span>Solo {{ 5 - i }} espacios disponibles esta semana</span>
                  </p>
                </div>

                <!-- Rating & Reviews -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-1">
                    <div class="text-yellow-400">★★★★★</div>
                    <span class="text-sm" [style.color]="'var(--text-secondary)'">(4.9)</span>
                  </div>
                  <span class="text-xs" [style.color]="'var(--text-secondary)'">{{ 45 + (i * 23) }} reseñas</span>
                </div>
              </div>

              <!-- CTA Button -->
              <app-button class="w-full mb-4 group-hover:scale-105 transition-transform">
                <span class="flex items-center justify-center space-x-2">
                  <span>RESERVAR AHORA</span>
                  <span>🚀</span>
                </span>
              </app-button>

              <!-- Trust Indicators -->
              <div class="flex items-center justify-center space-x-4 text-xs" [style.color]="'var(--text-secondary)'">
                <span class="flex items-center space-x-1">
                  <span>💳</span>
                  <span>Pago seguro</span>
                </span>
                <span class="flex items-center space-x-1">
                  <span>📅</span>
                  <span>Reagenda gratis</span>
                </span>
                <span class="flex items-center space-x-1">
                  <span>✅</span>
                  <span>Garantizado</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA Mejorado -->
        <div class="text-center">
          <div class="p-8 rounded-2xl border mb-8"
               [style.background]="'linear-gradient(to right, var(--accent), transparent)'"
               [style.border-color]="'var(--accent)'">
            <h3 class="text-2xl font-black mb-4" [style.color]="'var(--text-primary)'">
              ¿No estás seguro cuál elegir?
            </h3>
            <p class="mb-6 max-w-2xl mx-auto" [style.color]="'var(--text-secondary)'">
              Agenda una <span class="font-bold" [style.color]="'var(--text-highlight)'">consulta GRATUITA de 15 minutos</span> 
              y te ayudo a encontrar el plan perfecto para tus objetivos específicos.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <app-button size="lg" routerLink="/contacto" class="group">
                <span class="flex items-center space-x-2">
                  <span>CONSULTA GRATUITA</span>
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </app-button>
              <app-button variant="secondary" size="lg" routerLink="/servicios">
                VER TODOS LOS SERVICIOS
              </app-button>
            </div>
            
            <!-- Final Trust Element -->
            <div class="mt-6 text-sm" [style.color]="'var(--text-secondary)'">
              <span class="font-semibold" [style.color]="'var(--text-highlight)'">Garantía de satisfacción 100%</span> 
              • Si no estás satisfecho, devolvemos tu dinero
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Richard Carmona Section -->
    <app-about-section></app-about-section>

    <!-- Supplements Showcase -->
    <section class="py-20 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <!-- Badge de oferta especial -->
          <div class="inline-block bg-gradient-to-r from-text-highlight to-accent px-6 py-2 rounded-full mb-6 animate-pulse">
            <span class="text-sm font-black uppercase tracking-wider text-bg-primary">
              ⚡ OFERTA ESPECIAL - 30% DESCUENTO
            </span>
          </div>
          
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            <span class="bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent">
              SUPLEMENTOS PREMIUM
            </span>
          </h2>
          
          <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            🧬 Fórmulas seleccionadas por Richard Carmona para máximo rendimiento
            <br>
            <span class="text-accent font-bold">La pasión cubana aplicada a la nutrición deportiva</span>
          </p>

          <!-- Indicadores de confianza -->
          <div class="flex items-center justify-center space-x-8 text-sm text-text-secondary">
            <div class="flex items-center space-x-2">
              <span class="text-green-400">✓</span>
              <span>Certificación FDA</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-green-400">✓</span>
              <span>100% Natural</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-green-400">✓</span>
              <span>Resultados garantizados</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let supplement of featuredSupplements; let i = index" 
            class="group relative bg-gradient-to-br from-bg-secondary to-bg-primary p-6 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border hover:border-accent/30 overflow-hidden">
            
            <!-- Indicador de popularidad -->
            <div *ngIf="i < 3" class="absolute -top-2 -right-2 z-20">
              <div class="bg-gradient-to-r from-text-highlight to-accent px-3 py-1 rounded-full shadow-lg">
                <span class="text-xs font-black text-bg-primary uppercase tracking-wider">
                  {{ i === 0 ? '🏆 #1 MÁS VENDIDO' : i === 1 ? '🔥 POPULAR' : '⭐ TOP 3' }}
                </span>
              </div>
            </div>

            <!-- Efecto de brillo -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            
            <div class="relative mb-6">
              <div class="relative overflow-hidden rounded-xl">
                <img 
                  [src]="getSupplementImage(supplement.id)" 
                  [alt]="supplement.name"
                  class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <!-- Badge de descuento visual -->
              <div class="absolute -bottom-3 left-4 bg-accent text-bg-primary px-3 py-1 rounded-full shadow-lg">
                <span class="text-xs font-bold">💊 PREMIUM</span>
              </div>
              
              <div 
                *ngIf="!supplement.inStock"
                class="absolute inset-0 bg-black/75 flex items-center justify-center rounded-xl backdrop-blur-sm">
                <span class="text-text-primary font-bold uppercase tracking-wider bg-red-600 px-4 py-2 rounded-full">AGOTADO</span>
              </div>
            </div>
            
            <!-- Rating destacado -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                <span class="text-yellow-400 text-lg">★</span>
                <span class="text-sm font-bold text-yellow-400">{{ supplement.rating }}</span>
                <span class="text-xs text-text-secondary">({{ supplement.reviews }})</span>
              </div>
              <div class="bg-green-500/20 px-2 py-1 rounded-full">
                <span class="text-green-400 text-xs font-bold">✓ EN STOCK</span>
              </div>
            </div>
            
            <h3 class="text-lg font-black uppercase tracking-wider text-text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
              {{ supplement.name }}
            </h3>
            
            <!-- Descripción con fade effect -->
            <div class="relative mb-4">
              <p class="text-text-secondary text-sm leading-relaxed line-clamp-3">
                {{ supplement.description }}
              </p>
              <div class="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-bg-secondary to-transparent"></div>
            </div>
            
            <!-- Precio con efecto de urgencia -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-2">
                <span class="text-3xl font-black text-accent">\${{ supplement.price }}</span>
                <div class="flex flex-col">
                  <span class="text-xs text-text-secondary line-through">\${{ (supplement.price * 1.3).toFixed(0) }}</span>
                  <span class="text-xs text-green-400 font-bold">AHORRA 30%</span>
                </div>
              </div>
            </div>
            
            <!-- Botón con efecto hover mejorado -->
            <app-button 
              class="w-full group-hover:scale-105 transition-transform duration-300"
              [disabled]="!supplement.inStock">
              <span class="flex items-center justify-center space-x-2">
                <span>{{ supplement.inStock ? 'COMPRAR AHORA' : 'AGOTADO' }}</span>
                <span *ngIf="supplement.inStock" class="text-lg">🛒</span>
              </span>
            </app-button>

            <!-- Indicador de confianza -->
            <div class="mt-3 flex items-center justify-center space-x-4 text-xs text-text-secondary">
              <span class="flex items-center space-x-1">
                <span>🚚</span>
                <span>Envío gratis</span>
              </span>
              <span class="flex items-center space-x-1">
                <span>🔒</span>
                <span>Pago seguro</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Call to Action mejorado -->
        <div class="text-center mt-16">
          <div class="bg-gradient-to-r from-accent/10 to-text-highlight/10 p-8 rounded-2xl border border-accent/20 mb-8">
            <div class="mb-4">
              <span class="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
                🎯 MÁS DE 60 PRODUCTOS DISPONIBLES
              </span>
            </div>
            
            <h3 class="text-2xl font-black text-text-primary mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            
            <p class="text-text-secondary mb-6 max-w-2xl mx-auto">
              Descubre nuestro catálogo completo con aceites esenciales, cápsulas naturales, 
              cremas especializadas y jabones artesanales. Todos con la calidad WORKOUT BIRI BIRI.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <app-button size="lg" routerLink="/suplementos" class="group">
                <span class="flex items-center space-x-2">
                  <span>VER CATÁLOGO COMPLETO</span>
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </app-button>
              
              <app-button variant="secondary" size="lg" routerLink="/contacto">
                <span class="flex items-center space-x-2">
                  <span>💬</span>
                  <span>CONSULTAR ESPECIALISTA</span>
                </span>
              </app-button>
            </div>

            <!-- Urgencia sutil -->
            <div class="mt-6 text-sm text-text-secondary">
              <span class="text-accent font-bold">⏰ Oferta limitada</span> • Solo hasta fin de mes
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section Optimizada -->
    <section class="py-24 relative overflow-hidden"
             [style.background]="'linear-gradient(135deg, var(--accent), var(--accent-hover))'">
      
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full mix-blend-overlay filter blur-2xl animate-pulse delay-1000"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
      </div>

      <div class="max-w-container mx-auto px-4 text-center relative z-10">
        
        <!-- Urgency Badge -->
        <div class="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-2xl border border-white/30">
          <span class="text-sm font-black uppercase tracking-wider" 
                [style.color]="'var(--text-primary)'">
            ⚡ OFERTA ESPECIAL • TIEMPO LIMITADO
          </span>
        </div>

        <!-- Main Headline -->
        <h2 class="text-title font-black uppercase tracking-wider mb-6"
            [style.color]="'var(--text-primary)'">
          <span class="block">TU MOMENTO</span>
          <span class="block text-6xl lg:text-8xl" 
                [style.color]="'var(--text-highlight)'">ES AHORA</span>
        </h2>

        <!-- Emotional Copy -->
        <div class="max-w-4xl mx-auto mb-12">
          <p class="text-2xl font-bold mb-6" [style.color]="'var(--text-primary)'">
            No dejes que otro año pase sin lograr la transformación que mereces
          </p>
          <p class="text-xl mb-8 leading-relaxed" [style.color]="'rgba(255, 255, 255, 0.9)'">
            Con la <span class="font-black" [style.color]="'var(--text-highlight)'">energía cubana de Richard</span> y más de 500 atletas transformados. 
            <span class="font-bold">¿Listo para el cambio?</span>
          </p>

          <!-- Fear of Missing Out -->
          <div class="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-3xl font-black mb-2" [style.color]="'var(--text-highlight)'">72h</div>
                <div class="text-sm font-semibold" [style.color]="'var(--text-primary)'">Para aprovechar el descuento</div>
              </div>
              <div>
                <div class="text-3xl font-black mb-2" [style.color]="'var(--text-highlight)'">3</div>
                <div class="text-sm font-semibold" [style.color]="'var(--text-primary)'">Espacios disponibles</div>
              </div>
              <div>
                <div class="text-3xl font-black mb-2" [style.color]="'var(--text-highlight)'">30%</div>
                <div class="text-sm font-semibold" [style.color]="'var(--text-primary)'">Descuento exclusivo</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof Testimonial -->
        <div class="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/30 mb-12 max-w-3xl mx-auto">
          <div class="flex items-center justify-center mb-4">
            <div class="flex">
              <span class="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>
          <blockquote class="text-xl italic mb-6" [style.color]="'var(--text-primary)'">
            "La energía de Richard es contagiosa. Su método cubano + ciencia me devolvió la confianza. 
            En 30 días logré más progreso que en los últimos 2 años."
          </blockquote>
          <div class="flex items-center justify-center space-x-4">
            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                 [style.background-color]="'var(--text-highlight)'">
              <span class="font-bold text-black">AF</span>
            </div>
            <div class="text-left">
              <div class="font-bold" [style.color]="'var(--text-primary)'">Alejandro Fernández</div>
              <div class="text-sm" [style.color]="'rgba(255, 255, 255, 0.8)'">Atleta Profesional • CrossFit</div>
            </div>
          </div>
        </div>

        <!-- CTAs with Risk Reversal -->
        <div class="space-y-8">
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <app-button size="lg" variant="secondary" routerLink="/contacto" 
                       class="group relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-4">
              <span class="relative z-10 flex items-center justify-center space-x-3">
                <span class="text-xl">🎯</span>
                <span class="font-black text-lg">RESERVAR EVALUACIÓN GRATUITA</span>
                <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </app-button>
            
            <app-button size="lg" variant="secondary" routerLink="/sobre-mi"
                       class="border-2 border-white/50 hover:border-white/80 transform hover:scale-105 transition-all duration-300 px-8 py-4">
              <span class="flex items-center space-x-2">
                <span class="text-lg">👨‍⚕️</span>
                <span class="text-lg">CONOCE AL ESPECIALISTA</span>
              </span>
            </app-button>
          </div>

          <!-- Risk Reversal & Guarantees -->
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div class="flex items-center space-x-2">
                <span class="text-green-400 text-xl">✅</span>
                <span class="font-semibold" [style.color]="'var(--text-primary)'">100% Garantía de satisfacción</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-green-400 text-xl">🔒</span>
                <span class="font-semibold" [style.color]="'var(--text-primary)'">Pago 100% seguro</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-green-400 text-xl">📞</span>
                <span class="font-semibold" [style.color]="'var(--text-primary)'">Soporte 24/7</span>
              </div>
            </div>

            <p class="text-sm" [style.color]="'rgba(255, 255, 255, 0.8)'">
              <span class="font-bold" [style.color]="'var(--text-highlight)'">Sin riesgo:</span> 
              Si en los primeros 7 días no estás completamente satisfecho, te devolvemos el 100% de tu dinero
            </p>
          </div>

          <!-- Final Urgency -->
          <div class="bg-red-500/20 border border-red-500/50 p-4 rounded-lg inline-block">
            <p class="text-red-300 font-bold flex items-center space-x-2">
              <span>🚨</span>
              <span>¡Últimas horas! Esta oferta expira a medianoche</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Merchandise Section Optimizada -->
    <section class="py-24 relative overflow-hidden" 
             [style.background-color]="'var(--bg-secondary)'">
      
      <!-- Background Effects -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 right-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
             [style.background-color]="'var(--accent)'"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
             [style.background-color]="'var(--text-highlight)'"></div>
      </div>

      <div class="max-w-container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Content Optimizado -->
          <div class="animate-fade-up">
            <!-- Exclusivity Badge -->
            <div class="flex items-center space-x-4 mb-6">
              <div class="inline-block px-6 py-3 rounded-full shadow-lg"
                   [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'">
                <span class="text-sm font-black uppercase tracking-wider" 
                      [style.color]="'var(--text-primary)'">
                  👕 WORKOUT BIRI BIRI • COLECCIÓN CUBANA EXCLUSIVA
                </span>
              </div>
              <div class="bg-purple-600/20 px-3 py-1 rounded-full">
                <span class="text-purple-400 text-xs font-bold">PREMIUM</span>
              </div>
            </div>

            <!-- Lifestyle Headline -->
            <h2 class="text-subtitle font-black uppercase tracking-wider mb-6"
                [style.color]="'var(--text-primary)'">
              <span class="relative">
                VÍSTETE COMO
                <div class="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                     [style.background-color]="'var(--accent)'"></div>
              </span>
              <span class="block" [style.color]="'var(--accent)'">UN CAMPEÓN</span>
            </h2>

            <!-- Emotional Value Proposition -->
            <div class="p-6 rounded-2xl border mb-8"
                 [style.background]="'linear-gradient(to right, var(--accent), transparent)'"
                 [style.border-color]="'var(--accent)'">
              <p class="text-xl font-bold mb-4" [style.color]="'var(--text-primary)'">
                Cada pieza cuenta tu historia de <span class="font-black" [style.color]="'var(--text-highlight)'">determinación y éxito</span>
              </p>
              <p class="leading-relaxed" [style.color]="'rgba(255, 255, 255, 0.9)'">
                No es solo ropa. Es llevar el <span class="font-bold">espíritu cubano y la pasión de Richard</span> contigo. 
                Diseñada para guerreros que <span class="font-bold">nunca se rinden</span>.
              </p>
            </div>

            <!-- Social Proof de Lifestyle -->
            <div class="bg-black/30 p-6 rounded-2xl border border-white/10 mb-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="flex -space-x-2">
                  <div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                       [style.background-color]="'var(--accent)'">JM</div>
                  <div class="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AR</div>
                  <div class="w-10 h-10 bg-green-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">LC</div>
                  <div class="w-10 h-10 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">+47</div>
                </div>
                <div>
                  <p class="font-bold text-sm" [style.color]="'var(--text-primary)'">50+ atletas profesionales</p>
                  <p class="text-xs" [style.color]="'var(--text-secondary)'">ya forman parte del equipo WORKOUT BIRI BIRI</p>
                </div>
              </div>
              <p class="italic text-sm" [style.color]="'var(--text-secondary)'">
                "Cuando me pongo mi hoodie WORKOUT BIRI BIRI, siento que pertenezco a algo más grande. Es mi identidad de campeón."
              </p>
            </div>

            <!-- Product Benefits Premium -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-white text-xs">💎</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Material Premium</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Algodón orgánico + tecnología moisture-wicking</div>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-white text-xs">🎨</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Diseño Exclusivo</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Edición limitada • Solo 100 piezas</div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-white text-xs">🏆</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Lifestyle Champion</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Perfecta para gym, calle y competencias</div>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-white text-xs">✨</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Durabilidad Extrema</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Garantía de por vida contra defectos</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pricing & Scarcity -->
            <div class="bg-gradient-to-r from-red-500/20 to-transparent p-6 rounded-2xl border border-red-500/30 mb-8">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <div class="text-sm line-through" [style.color]="'var(--text-secondary)'">$89</div>
                  <div class="text-3xl font-black" [style.color]="'var(--accent)'">$65</div>
                  <div class="text-sm font-bold" [style.color]="'var(--text-primary)'">Precio de lanzamiento</div>
                </div>
                <div class="text-center">
                  <div class="bg-red-500/30 px-3 py-2 rounded-full mb-2">
                    <span class="text-red-300 text-sm font-bold">SOLO QUEDAN 23</span>
                  </div>
                  <div class="text-xs" [style.color]="'var(--text-secondary)'">de 100 piezas originales</div>
                </div>
              </div>
              
              <div class="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div class="bg-red-500 h-2 rounded-full" style="width: 77%"></div>
              </div>
              
              <p class="text-center text-sm font-bold text-red-300">
                ⚡ ¡77% vendido! La demanda supera nuestras expectativas
              </p>
            </div>

            <!-- CTAs Mejorados -->
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row gap-4">
                <app-button size="lg" routerLink="/contacto" 
                           class="group relative overflow-hidden">
                  <span class="relative z-10 flex items-center justify-center space-x-2">
                    <span>👕</span>
                    <span class="font-black">RESERVAR MI HOODIE</span>
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </app-button>
                <app-button variant="secondary" size="lg" routerLink="/contacto">
                  <span class="flex items-center space-x-2">
                    <span>📱</span>
                    <span>VER CATÁLOGO COMPLETO</span>
                  </span>
                </app-button>
              </div>
              
              <!-- Trust & Guarantee -->
              <div class="flex items-center justify-center space-x-6 text-sm" [style.color]="'var(--text-secondary)'">
                <span class="flex items-center space-x-1">
                  <span>🚚</span>
                  <span>Envío express gratis</span>
                </span>
                <span class="flex items-center space-x-1">
                  <span>↩️</span>
                  <span>30 días devolución</span>
                </span>
                <span class="flex items-center space-x-1">
                  <span>✅</span>
                  <span>Garantía de por vida</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Product Showcase Mejorado -->
          <div class="relative">
            <!-- Main Product Image -->
            <div class="relative z-10 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="assets/images/merchandise-hoodie.jpg" 
                  alt="WORKOUT BIRI BIRI Hoodie Premium - Edición Limitada"
                  class="w-full max-w-xl mx-auto group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Floating Price Tag -->
                <div class="absolute top-6 left-6 px-4 py-2 rounded-full shadow-lg"
                     [style.background]="'linear-gradient(to right, var(--text-highlight), #ffa500)'">
                  <span class="text-black font-black text-sm">EDICIÓN LIMITADA</span>
                </div>
              </div>
            </div>
            
            <!-- Floating Elements Decorativos -->
            <div class="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-20 animate-pulse"
                 [style.background-color]="'var(--accent)'"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 border-4 rounded-full opacity-30 animate-pulse delay-1000"
                 [style.border-color]="'var(--accent)'"></div>
            <div class="absolute top-1/2 -right-4 w-12 h-12 rounded-full opacity-40 animate-bounce delay-500"
                 [style.background-color]="'var(--text-highlight)'"></div>

            <!-- Product Features Overlay -->
            <div class="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-lg font-black" [style.color]="'var(--text-highlight)'">100%</div>
                  <div class="text-xs" [style.color]="'var(--text-primary)'">Algodón Premium</div>
                </div>
                <div>
                  <div class="text-lg font-black" [style.color]="'var(--text-highlight)'">∞</div>
                  <div class="text-xs" [style.color]="'var(--text-primary)'">Garantía de Vida</div>
                </div>
                <div>
                  <div class="text-lg font-black" [style.color]="'var(--text-highlight)'">23</div>
                  <div class="text-xs" [style.color]="'var(--text-primary)'">Quedan Disponibles</div>
                </div>
              </div>
            </div>
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
      this.featuredServices = services.slice(0, 3);
    });

    this.dataService.getSupplements().subscribe(supplements => {
      this.featuredSupplements = this.selectBestSellingProducts(supplements);
    });
  }

  private selectBestSellingProducts(supplements: Supplement[]): Supplement[] {
    return supplements
      .filter(supplement => supplement.inStock)
      .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
      .slice(0, 6);
  }

  getSupplementImage(id: string): string {
    const images: { [key: string]: string } = {
      '1': 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      '2': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      '3': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    };
    return images[id] || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80';
  }

  getServiceIcon(index: number): string {
    const icons = ['🏃‍♂️', '💪', '🧘‍♂️'];
    return icons[index] || '⚡';
  }

  getServiceBenefits(index: number): string[] {
    const benefits = [
      [
        'Evaluación biomecánica completa',
        'Plan personalizado de ejercicios',
        'Seguimiento semanal',
        'Acceso a app exclusiva'
      ],
      [
        'Técnicas de recuperación avanzadas',
        'Terapia manual especializada',
        'Programa de fortalecimiento',
        'Monitoreo de progreso'
      ],
      [
        'Enfoque preventivo integral',
        'Rutinas de mantenimiento',
        'Consejos nutricionales',
        'Sesiones de seguimiento'
      ]
    ];
    return benefits[index] || [];
  }
}