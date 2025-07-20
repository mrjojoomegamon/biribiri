import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Content -->
          <div class="animate-fade-up">
            <h1 class="text-title font-black uppercase tracking-wider text-text-primary mb-6">
              RICHARD BIRIBIRI
              <span class="block text-accent">CARMONA</span>
            </h1>
            <p class="text-xl text-text-secondary leading-relaxed mb-8">
              Del tatami al laboratorio: Más de 15 años perfeccionando técnicas de elite 
              que transforman no solo tu físico, sino tu mente y rendimiento integral. 
              Porque el verdadero poder viene de la optimización científica.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <app-button size="lg" routerLink="/contacto">
                AGENDA TU CONSULTA
              </app-button>
              <app-button variant="secondary" size="lg" routerLink="/servicios">
                VER ESPECIALIDADES
              </app-button>
            </div>
          </div>

          <!-- Professional Photo -->
          <div class="relative">
            <div class="relative z-10">
              <img 
src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Fisioterapeuta especialista"
                class="w-full max-w-md mx-auto rounded-lg shadow-card">
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -top-8 -left-8 w-24 h-24 bg-accent rounded-full opacity-20"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-accent rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Biography Section -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
              MI HISTORIA
            </h2>
            <p class="text-text-secondary max-w-2xl mx-auto">
              Un camino dedicado a la excelencia en rehabilitación deportiva
            </p>
          </div>

          <div class="space-y-8">
            <div class="bg-bg-primary p-8 rounded-lg shadow-card">
              <h3 class="text-xl font-bold uppercase tracking-wider text-accent mb-4">
                🎯 FILOSOFÍA: OPTIMIZACIÓN INTEGRAL
              </h3>
              <p class="text-text-secondary leading-relaxed">
                No entreno cuerpos, transformo sistemas completos. Mi metodología combina 
                técnicas de combate de elite con ciencia deportiva avanzada para optimizar 
                tu respiración, concentración y postura. El resultado: no solo músculos más fuertes, 
                sino mejor rendimiento cognitivo, digestión mejorada, performance sexual optimizada 
                y salud articular de por vida. Cada sesión es una inversión en tu longevidad atlética.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-bg-primary p-8 rounded-lg shadow-card">
                <h3 class="text-xl font-bold uppercase tracking-wider text-accent mb-4">
                  📚 FORMACIÓN CIENTÍFICA
                </h3>
                <ul class="space-y-3 text-text-secondary">
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🥋</span>
                    <span><strong>Cinturón Negro Jiu-Jitsu</strong> - Técnicas de combate aplicadas</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🏋️</span>
                    <span><strong>Certificación en Musculación y Entrenamiento con Pesas</strong></span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🧬</span>
                    <span><strong>Diplomado en Nutrición y Dietética</strong></span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">⚡</span>
                    <span><strong>Diplomado en Asistencia a la Nutrición Deportiva</strong></span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🎓</span>
                    <span><strong>En formación:</strong> Fisioterapia Deportiva Avanzada</span>
                  </li>
                </ul>
              </div>

              <div class="bg-bg-primary p-8 rounded-lg shadow-card">
                <h3 class="text-xl font-bold uppercase tracking-wider text-accent mb-4">
                  🏆 EXPERIENCIA MULTIDISCIPLINARIA
                </h3>
                <ul class="space-y-3 text-text-secondary">
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🥊</span>
                    <span><strong>Halterofilia & Jiu-Jitsu:</strong> Competencia profesional de elite</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🏃</span>
                    <span><strong>Parkour, Calistenia & Street Workout:</strong> Dominio del peso corporal</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🚴</span>
                    <span><strong>Ciclismo de Alto Rendimiento:</strong> Resistencia y técnica</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">⚡</span>
                    <span><strong>15+ años</strong> perfeccionando técnicas de movimiento</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">🧠</span>
                    <span><strong>Especialista en optimización</strong> cognitiva a través del ejercicio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements & Stats -->
    <section class="py-20 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            LOGROS Y RECONOCIMIENTOS
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Resultados que hablan por sí mismos
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              6+
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Disciplinas Dominadas
            </div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              4+
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Títulos Científicos
            </div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Años de Elite
            </div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Enfoque Integral
            </div>
          </div>
        </div>

        <!-- Awards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-bg-secondary p-8 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-text-highlight rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🥋</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              CINTURÓN NEGRO JIU-JITSU
            </h3>
            <p class="text-text-secondary text-sm">
              Técnicas de combate aplicadas al entrenamiento
            </p>
          </div>

          <div class="bg-bg-secondary p-8 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-text-highlight rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🧬</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              METODOLOGÍA CIENTÍFICA
            </h3>
            <p class="text-text-secondary text-sm">
              Análisis biomecánico y optimización del movimiento
            </p>
          </div>

          <div class="bg-bg-secondary p-8 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-text-highlight rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">⚡</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              OPTIMIZACIÓN INTEGRAL
            </h3>
            <p class="text-text-secondary text-sm">
              Rendimiento físico, mental y sexual
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specializations -->
    <section class="py-20 bg-bg-secondary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            TÉCNICAS DE ELITE
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Metodologías exclusivas que combinan ciencia deportiva con artes marciales 
            para optimización integral del rendimiento
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span class="text-xl">🥋</span>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                TÉCNICAS DE COMBATE APLICADAS
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Metodología única que combina jiu-jitsu y halterofilia para desarrollar 
                fuerza funcional, resistencia mental y técnica impecable.
              </p>
            </div>
          </div>

          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                OPTIMIZACIÓN COGNITIVA
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Técnicas específicas de respiración y concentración que mejoran el 
                rendimiento mental, la digestión y la función cognitiva.
              </p>
            </div>
          </div>

          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                ANÁLISIS BIOMECÁNICO
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Evaluación del movimiento con tecnología 3D para optimizar 
                técnica deportiva y prevenir lesiones.
              </p>
            </div>
          </div>

          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                RECUPERACIÓN POST-LESIÓN
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Protocolos personalizados de rehabilitación para el retorno 
                seguro y efectivo a la actividad deportiva.
              </p>
            </div>
          </div>

          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                OPTIMIZACIÓN RENDIMIENTO
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Programas de acondicionamiento específicos para maximizar 
                el potencial atlético y prevenir lesiones.
              </p>
            </div>
          </div>

          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                EDUCACIÓN & PREVENCIÓN
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Programas educativos para atletas y entrenadores sobre 
                prevención de lesiones y autocuidado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-bg-primary">
      <div class="max-w-container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-subtitle font-black uppercase tracking-wider text-text-primary mb-4">
            LO QUE DICEN MIS PACIENTES
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Testimonios reales de atletas que han transformado su rendimiento
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-bg-secondary p-8 rounded-lg shadow-card">
            <div class="flex items-center mb-4">
              <div class="flex text-text-highlight mr-3">
                <span>★★★★★</span>
              </div>
              <span class="text-text-secondary text-sm">5.0/5</span>
            </div>
            <p class="text-text-secondary mb-6 italic leading-relaxed">
              "Las técnicas de respiración y concentración de Richard no solo mejoraron 
              mi fuerza, sino también mi enfoque mental en competencias. Un enfoque único."
            </p>
            <div class="flex items-center">
              <img 
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                alt="Miguel Torres"
                class="w-12 h-12 rounded-full mr-4">
              <div>
                <div class="font-bold text-text-primary">Miguel Torres</div>
                <div class="text-sm text-text-secondary">Atleta de Halterofilia</div>
              </div>
            </div>
          </div>

          <div class="bg-bg-secondary p-8 rounded-lg shadow-card">
            <div class="flex items-center mb-4">
              <div class="flex text-text-highlight mr-3">
                <span>★★★★★</span>
              </div>
              <span class="text-text-secondary text-sm">5.0/5</span>
            </div>
            <p class="text-text-secondary mb-6 italic leading-relaxed">
              "El análisis biomecánico de Richard revolucionó mi entrenamiento. Ahora cada 
              movimiento tiene propósito y mis PRs no paran de subir. Increíble."
            </p>
            <div class="flex items-center">
              <img 
src="https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                alt="Ana Ruiz"
                class="w-12 h-12 rounded-full mr-4">
              <div>
                <div class="font-bold text-text-primary">Ana Ruiz</div>
                <div class="text-sm text-text-secondary">Crossfit Competidora</div>
              </div>
            </div>
          </div>

          <div class="bg-bg-secondary p-8 rounded-lg shadow-card">
            <div class="flex items-center mb-4">
              <div class="flex text-text-highlight mr-3">
                <span>★★★★★</span>
              </div>
              <span class="text-text-secondary text-sm">5.0/5</span>
            </div>
            <p class="text-text-secondary mb-6 italic leading-relaxed">
              "Como practicante de jiu-jitsu, las técnicas de Richard me dieron una ventaja 
              competitiva increíble. Su conocimiento del combate es excepcional."
            </p>
            <div class="flex items-center">
              <img 
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                alt="Carlos Mendoza"
                class="w-12 h-12 rounded-full mr-4">
              <div>
                <div class="font-bold text-text-primary">Carlos Mendoza</div>
                <div class="text-sm text-text-secondary">Cinturón Púrpura BJJ</div>
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
          ¿LISTO PARA ALCANZAR TU MÁXIMO POTENCIAL?
        </h2>
        <p class="text-xl text-text-primary mb-8 max-w-2xl mx-auto">
          Únete a cientos de atletas que han transformado su rendimiento y alcanzado sus objetivos
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <app-button variant="secondary" size="lg" routerLink="/contacto">
            AGENDAR CONSULTA GRATUITA
          </app-button>
          <app-button variant="secondary" size="lg" routerLink="/servicios">
            VER SERVICIOS ESPECIALIZADOS
          </app-button>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}