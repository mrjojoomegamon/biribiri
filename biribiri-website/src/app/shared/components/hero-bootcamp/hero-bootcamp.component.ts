import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero-bootcamp',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <!-- Hero Bootcamp Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden" 
             [style.background]="'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(https://blog.institutoisaf.es/wp-content/uploads/2023/05/entrenamiento-funcional-boot-camp-1024x683.jpg)'">
      
      <!-- Overlay Pattern -->
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/3 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
             [style.background-color]="'var(--accent)'"></div>
        <div class="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"
             [style.background-color]="'var(--text-highlight)'"></div>
      </div>

      <div class="max-w-container mx-auto px-4 py-20 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Content Principal -->
          <div class="space-y-8 animate-fade-up">
            
            <!-- Intensity Badge -->
            <div class="flex items-center space-x-4">
              <div class="inline-block px-6 py-3 rounded-full shadow-2xl border-2"
                   [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'"
                   [style.border-color]="'var(--text-highlight)'">
                <span class="text-sm font-black uppercase tracking-wider"
                      [style.color]="'var(--text-primary)'">
                  🔥 BOOTCAMP DE ELITE • ALTA INTENSIDAD
                </span>
              </div>
              <div class="bg-orange-500/30 px-3 py-1 rounded-full border border-orange-500">
                <span class="text-orange-300 text-xs font-bold">EXTREMO</span>
              </div>
            </div>

            <!-- Aggressive Headline -->
            <div class="space-y-4">
              <h1 class="text-6xl lg:text-8xl font-black uppercase leading-none"
                  [style.color]="'var(--text-primary)'">
                <span class="relative">
                  DESTRUYE
                  <div class="absolute -bottom-3 left-0 w-full h-2 rounded-full animate-pulse"
                       [style.background-color]="'var(--accent)'"></div>
                </span>
                <span class="block" [style.color]="'var(--accent)'">TUS LÍMITES</span>
              </h1>
              <p class="text-2xl font-bold leading-tight" [style.color]="'var(--text-highlight)'">
                El bootcamp más intenso que transformará tu cuerpo en una máquina de guerra
              </p>
            </div>

            <!-- Challenge Stats -->
            <div class="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border-2 shadow-2xl"
                 [style.border-color]="'var(--accent)'">
              <div class="grid grid-cols-2 gap-6 mb-6">
                <div class="text-center">
                  <div class="text-4xl font-black mb-2" [style.color]="'var(--accent)'">6</div>
                  <div class="text-sm font-bold uppercase tracking-wider" [style.color]="'var(--text-primary)'">Semanas Intensivas</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black mb-2" [style.color]="'var(--accent)'">500+</div>
                  <div class="text-sm font-bold uppercase tracking-wider" [style.color]="'var(--text-primary)'">Calorías/Sesión</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black mb-2" [style.color]="'var(--accent)'">90%</div>
                  <div class="text-sm font-bold uppercase tracking-wider" [style.color]="'var(--text-primary)'">Tasa de Éxito</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black mb-2" [style.color]="'var(--accent)'">MAX</div>
                  <div class="text-sm font-bold uppercase tracking-wider" [style.color]="'var(--text-primary)'">Intensidad</div>
                </div>
              </div>
              
              <div class="border-t pt-6" [style.border-color]="'var(--accent)'">
                <p class="text-center font-bold text-lg" [style.color]="'var(--text-primary)'">
                  "No es para todos. Solo para guerreros."
                </p>
              </div>
            </div>

            <!-- What You'll Conquer -->
            <div class="space-y-6">
              <h3 class="text-2xl font-black uppercase" [style.color]="'var(--text-primary)'">
                Lo que vas a <span [style.color]="'var(--accent)'">CONQUISTAR:</span>
              </h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center space-x-3 bg-black/40 p-4 rounded-lg border"
                     [style.border-color]="'var(--accent)'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-xl">💀</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Resistencia Extrema</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Aguanta lo que otros no pueden</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 bg-black/40 p-4 rounded-lg border"
                     [style.border-color]="'var(--accent)'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-xl">⚡</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Explosividad</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Poder en cada movimiento</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 bg-black/40 p-4 rounded-lg border"
                     [style.border-color]="'var(--accent)'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-xl">🔥</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Quema de Grasa</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Definición en tiempo récord</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 bg-black/40 p-4 rounded-lg border"
                     [style.border-color]="'var(--accent)'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-xl">🧠</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Mentalidad Invencible</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Fortaleza mental inquebrantable</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Challenge Accept -->
            <div class="bg-gradient-to-r from-red-600/30 to-orange-600/30 p-6 rounded-2xl border-2 border-red-500">
              <div class="text-center mb-6">
                <h4 class="text-2xl font-black mb-2" [style.color]="'var(--text-primary)'">
                  ¿ACEPTAS EL DESAFÍO?
                </h4>
                <p class="text-lg font-bold text-red-300">
                  Solo 8 espacios disponibles • Próximo inicio: Lunes
                </p>
              </div>

              <!-- Urgency Countdown -->
              <div class="bg-black/50 p-4 rounded-lg mb-6">
                <div class="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-black" [style.color]="'var(--text-highlight)'">05</div>
                    <div class="text-xs font-bold" [style.color]="'var(--text-primary)'">DÍAS</div>
                  </div>
                  <div>
                    <div class="text-2xl font-black" [style.color]="'var(--text-highlight)'">14</div>
                    <div class="text-xs font-bold" [style.color]="'var(--text-primary)'">HORAS</div>
                  </div>
                  <div>
                    <div class="text-2xl font-black" [style.color]="'var(--text-highlight)'">23</div>
                    <div class="text-xs font-bold" [style.color]="'var(--text-primary)'">MIN</div>
                  </div>
                  <div>
                    <div class="text-2xl font-black" [style.color]="'var(--text-highlight)'">42</div>
                    <div class="text-xs font-bold" [style.color]="'var(--text-primary)'">SEG</div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <app-button size="lg" routerLink="/contacto" 
                           class="group relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 border-0">
                  <span class="relative z-10 flex items-center justify-center space-x-2">
                    <span class="text-xl">⚔️</span>
                    <span class="font-black">ACEPTO EL DESAFÍO</span>
                    <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </app-button>
                <app-button variant="secondary" size="lg" routerLink="/contacto"
                           class="border-2 border-white/50 hover:border-white">
                  <span class="flex items-center space-x-2">
                    <span>📹</span>
                    <span>VER ENTRENAMIENTOS</span>
                  </span>
                </app-button>
              </div>
            </div>

          </div>

          <!-- Training Showcase -->
          <div class="relative">
            
            <!-- Warrior Badge -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div class="px-6 py-3 rounded-full shadow-2xl border-2"
                   [style.background]="'linear-gradient(to right, var(--text-highlight), #ffa500)'"
                   [style.border-color]="'var(--accent)'">
                <span class="text-black font-black text-sm uppercase tracking-wider">
                  🏆 BOOTCAMP WARRIOR
                </span>
              </div>
            </div>

            <!-- Training Preview -->
            <div class="relative z-10 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl border-4"
                   [style.border-color]="'var(--accent)'">
                <!-- Training Image -->
                <img 
                  src="https://blog.institutoisaf.es/wp-content/uploads/2022/06/entrenamiento-funcional-boot-camp-isaf-805x415.jpg"
                  alt="Entrenamiento Funcional Boot Camp - BIRIBIRI"
                  class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700">
                
                <!-- Dark Overlay for Text Visibility -->
                <div class="absolute inset-0 bg-black/40"></div>
                
                <!-- Content Overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="text-center text-white">
                    <div class="text-2xl font-black mb-2">BOOTCAMP EXTREMO</div>
                    <div class="text-sm font-bold">Entrenamiento Funcional de Elite</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Combat Stats -->
            <div class="absolute -bottom-4 -left-4 bg-black/90 backdrop-blur-sm p-4 rounded-lg border-2 shadow-xl"
                 [style.border-color]="'var(--accent)'">
              <div class="text-center">
                <div class="text-lg font-black" [style.color]="'var(--accent)'">NIVEL</div>
                <div class="text-2xl font-black" [style.color]="'var(--text-highlight)'">EXTREMO</div>
              </div>
            </div>

            <div class="absolute -top-4 -right-4 bg-black/90 backdrop-blur-sm p-4 rounded-lg border-2 shadow-xl"
                 [style.border-color]="'var(--text-highlight)'">
              <div class="text-center">
                <div class="text-lg font-black" [style.color]="'var(--text-highlight)'">DURACIÓN</div>
                <div class="text-2xl font-black" [style.color]="'var(--accent)'">60 MIN</div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute top-1/4 -left-8 w-16 h-16 rounded-full opacity-30 animate-pulse"
                 [style.background-color]="'var(--accent)'"></div>
            <div class="absolute bottom-1/4 -right-8 w-20 h-20 border-4 rounded-full opacity-40 animate-pulse delay-1000"
                 [style.border-color]="'var(--text-highlight)'"></div>
          </div>

        </div>

        <!-- Bottom Warning -->
        <div class="mt-16 text-center">
          <div class="inline-block bg-red-600/20 border-2 border-red-500 px-8 py-4 rounded-lg">
            <p class="text-red-300 font-bold flex items-center justify-center space-x-2">
              <span>⚠️</span>
              <span>ADVERTENCIA: Este bootcamp no es para principiantes. Requiere compromiso total.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
  `]
})
export class HeroBootcampComponent {
  constructor() {}
}