import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <!-- About Richard Carmona Section -->
    <section class="py-24 relative overflow-hidden" 
             [style.background-color]="'var(--bg-primary)'">
      
      <!-- Background Effects -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 left-1/4 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
             [style.background-color]="'var(--accent)'"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
             [style.background-color]="'var(--text-highlight)'"></div>
      </div>

      <div class="max-w-container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Content Principal -->
          <div class="space-y-8">
            
            <!-- Cuban Heritage Badge -->
            <div class="flex items-center space-x-4 mb-6">
              <div class="inline-block px-6 py-3 rounded-full shadow-lg"
                   [style.background]="'linear-gradient(to right, var(--accent), var(--accent-hover))'">
                <span class="text-sm font-black uppercase tracking-wider" 
                      [style.color]="'var(--text-primary)'">
                  🇨🇺 ENTRENADOR CUBANO • PROFESIONAL CERTIFICADO
                </span>
              </div>
              <div class="bg-green-500/20 px-3 py-1 rounded-full">
                <span class="text-green-400 text-xs font-bold">✓ 15+ AÑOS</span>
              </div>
            </div>

            <!-- Hero Introduction -->
            <div class="space-y-6">
              <h2 class="text-subtitle font-black uppercase tracking-wider"
                  [style.color]="'var(--text-primary)'">
                <span class="relative">
                  CONOCE A
                  <div class="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                       [style.background-color]="'var(--accent)'"></div>
                </span>
                <span class="block mt-2" [style.color]="'var(--accent)'">RICHARD CARMONA</span>
                <span class="block text-lg font-bold mt-2" 
                      [style.color]="'var(--text-secondary)'">
                  Tu guía hacia la transformación total
                </span>
              </h2>

              <!-- Personality Showcase -->
              <div class="p-6 rounded-2xl border"
                   [style.background]="'linear-gradient(to right, var(--bg-secondary), transparent)'"
                   [style.border-color]="'var(--accent)'">
                <p class="text-xl font-bold mb-4" [style.color]="'var(--text-primary)'">
                  Cubano simpático y carismático que combina <span class="font-black" [style.color]="'var(--accent)'">pasión latina</span> 
                  con ciencia deportiva
                </p>
                <p class="leading-relaxed mb-4" [style.color]="'rgba(255, 255, 255, 0.9)'">
                  Mi filosofía es simple: <span class="font-bold">cada cuerpo tiene potencial ilimitado</span>. 
                  Como cubano, traigo la energía y el carisma de mi tierra, combinado con 
                  años de estudio y experiencia profesional en el deporte y la salud.
                </p>
                <div class="flex items-center space-x-2">
                  <span class="text-lg">🎯</span>
                  <span class="font-semibold italic" [style.color]="'var(--text-highlight)'">
                    "No hay límites, solo excusas que vencer"
                  </span>
                </div>
              </div>
            </div>

            <!-- Brand Archetypes Grid -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Hero Archetype -->
              <div class="p-6 rounded-xl border group hover:scale-105 transition-transform"
                   [style.background]="'rgba(var(--accent-rgb), 0.1)'"
                   [style.border-color]="'var(--accent)'">
                <div class="text-3xl mb-3">🏆</div>
                <h4 class="font-black text-lg mb-2" [style.color]="'var(--text-primary)'">HÉROE</h4>
                <p class="text-sm" [style.color]="'var(--text-secondary)'">
                  Motivación, esfuerzo, disciplina y triunfo en cada sesión
                </p>
              </div>

              <!-- Explorer Archetype -->
              <div class="p-6 rounded-xl border group hover:scale-105 transition-transform"
                   [style.background]="'rgba(var(--text-highlight-rgb), 0.1)'"
                   [style.border-color]="'var(--text-highlight)'">
                <div class="text-3xl mb-3">🗺️</div>
                <h4 class="font-black text-lg mb-2" [style.color]="'var(--text-primary)'">EXPLORADOR</h4>
                <p class="text-sm" [style.color]="'var(--text-secondary)'">
                  Libertad, valentía y ambición para superar cualquier desafío
                </p>
              </div>

              <!-- Sage Archetype -->
              <div class="p-6 rounded-xl border group hover:scale-105 transition-transform"
                   [style.background]="'rgba(0, 191, 243, 0.1)'"
                   [style.border-color]="'#00bff3'">
                <div class="text-3xl mb-3">🧠</div>
                <h4 class="font-black text-lg mb-2" [style.color]="'var(--text-primary)'">SABIO</h4>
                <p class="text-sm" [style.color]="'var(--text-secondary)'">
                  Conocimiento científico aplicado para resultados reales
                </p>
              </div>

              <!-- Dreamer Archetype -->
              <div class="p-6 rounded-xl border group hover:scale-105 transition-transform"
                   [style.background]="'rgba(147, 51, 234, 0.1)'"
                   [style.border-color]="'#9333ea'">
                <div class="text-3xl mb-3">✨</div>
                <h4 class="font-black text-lg mb-2" [style.color]="'var(--text-primary)'">SOÑADOR</h4>
                <p class="text-sm" [style.color]="'var(--text-secondary)'">
                  Emocional e inspirador, te ayudo a alcanzar tus sueños
                </p>
              </div>
            </div>

            <!-- Personality Traits -->
            <div class="space-y-4">
              <h3 class="text-2xl font-black uppercase" [style.color]="'var(--text-primary)'">
                Mi <span [style.color]="'var(--accent)'">Personalidad</span>
              </h3>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center space-x-3 bg-black/30 p-4 rounded-lg border"
                     [style.border-color]="'var(--accent)'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-xl">💚</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Sinceridad</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Saludable, alegre, honesto</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 bg-black/30 p-4 rounded-lg border"
                     [style.border-color]="'var(--text-highlight)'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       [style.background-color]="'var(--text-highlight)'">
                    <span class="text-xl text-black">⚡</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Emocionalidad</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Enérgico, atrevido</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 bg-black/30 p-4 rounded-lg border"
                     [style.border-color]="'#00bff3'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       style="background-color: #00bff3;">
                    <span class="text-xl">🎯</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Competencia</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Confiable, profesional</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 bg-black/30 p-4 rounded-lg border"
                     [style.border-color]="'#9333ea'">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center"
                       style="background-color: #9333ea;">
                    <span class="text-xl">🏔️</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm" [style.color]="'var(--text-primary)'">Rudeza</div>
                    <div class="text-xs" [style.color]="'var(--text-secondary)'">Aventurero, determinado</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row gap-4">
                <app-button size="lg" routerLink="/sobre-mi" 
                           class="group relative overflow-hidden">
                  <span class="relative z-10 flex items-center justify-center space-x-2">
                    <span>📖</span>
                    <span class="font-black">CONOCE MI HISTORIA</span>
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </app-button>
                <app-button variant="secondary" size="lg" routerLink="/contacto">
                  <span class="flex items-center space-x-2">
                    <span>💬</span>
                    <span>HABLEMOS DIRECTO</span>
                  </span>
                </app-button>
              </div>
              
              <!-- Trust Element -->
              <div class="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg">
                <p class="text-green-400 text-sm font-semibold flex items-center space-x-2">
                  <span>🇨🇺</span>
                  <span>Auténtico carisma cubano + Ciencia deportiva profesional</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Visual Showcase -->
          <div class="relative">
            
            <!-- Main Profile Images -->
            <div class="relative z-10 space-y-6">
              
              <!-- Primary Profile -->
              <div class="relative group">
                <div class="absolute -top-4 -right-4 z-20">
                  <div class="px-4 py-2 rounded-full shadow-lg"
                       [style.background]="'linear-gradient(to right, var(--text-highlight), #ffa500)'">
                    <span class="text-black font-black text-sm uppercase tracking-wider">
                      🏆 RICHARD CARMONA
                    </span>
                  </div>
                </div>
                
                <div class="relative overflow-hidden rounded-2xl shadow-2xl border-4 group-hover:scale-105 transition-transform duration-700"
                     [style.border-color]="'var(--accent)'">
                  <img 
                    src="assets/images/profile-photo.jpg" 
                    alt="Richard Carmona - Entrenador Profesional WORKOUT BIRI BIRI"
                    class="w-full max-w-lg mx-auto">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  <!-- Floating Stats -->
                  <div class="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm p-4 rounded-lg">
                    <div class="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div class="text-lg font-black" [style.color]="'var(--accent)'">15+</div>
                        <div class="text-xs" [style.color]="'var(--text-primary)'">Años Experiencia</div>
                      </div>
                      <div>
                        <div class="text-lg font-black" [style.color]="'var(--text-highlight)'">500+</div>
                        <div class="text-xs" [style.color]="'var(--text-primary)'">Atletas Entrenados</div>
                      </div>
                      <div>
                        <div class="text-lg font-black" [style.color]="'var(--accent)'">🇨🇺</div>
                        <div class="text-xs" [style.color]="'var(--text-primary)'">Origen Cubano</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Shot -->
              <div class="relative group">
                <div class="relative overflow-hidden rounded-xl shadow-xl border-2"
                     [style.border-color]="'var(--text-highlight)'">
                  <img 
                    src="assets/images/Sobre-mi.png" 
                    alt="Richard Carmona en acción - Entrenamiento profesional"
                    class="w-full h-[40rem] object-cover group-hover:scale-110 transition-transform duration-700">
                  <div class="absolute inset-0 bg-black/20"></div>
                  
                  <!-- Action Badge -->
                  <div class="absolute top-4 left-4 px-3 py-1 rounded-full"
                       [style.background-color]="'var(--accent)'">
                    <span class="text-white font-bold text-sm">EN ACCIÓN</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Decorative Elements -->
            <div class="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-20 animate-pulse"
                 [style.background-color]="'var(--accent)'"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 border-4 rounded-full opacity-30 animate-pulse delay-1000"
                 [style.border-color]="'var(--accent)'"></div>
            <div class="absolute top-1/2 -left-4 w-12 h-12 rounded-full opacity-40 animate-bounce delay-500"
                 [style.background-color]="'var(--text-highlight)'"></div>
          </div>
        </div>

        <!-- Bottom Quote Section -->
        <div class="mt-20 text-center">
          <div class="bg-gradient-to-r from-accent/10 to-transparent p-8 rounded-2xl border border-accent/20 max-w-4xl mx-auto">
            <div class="mb-6">
              <span class="text-6xl" [style.color]="'var(--accent)'">🇨🇺</span>
            </div>
            <blockquote class="text-2xl font-bold italic mb-6" [style.color]="'var(--text-primary)'">
              "El deporte no solo transforma tu cuerpo, transforma tu alma. 
              Como cubano, llevo esa pasión en la sangre y la comparto contigo en cada entrenamiento."
            </blockquote>
            <div class="flex items-center justify-center space-x-4">
              <div class="w-16 h-16 rounded-full flex items-center justify-center"
                   [style.background-color]="'var(--accent)'">
                <span class="font-bold text-white text-lg">RC</span>
              </div>
              <div class="text-left">
                <div class="font-black text-xl" [style.color]="'var(--text-primary)'">Richard Carmona</div>
                <div class="font-semibold" [style.color]="'var(--text-secondary)'">Fundador WORKOUT BIRI BIRI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutSectionComponent {
  constructor() {}
}