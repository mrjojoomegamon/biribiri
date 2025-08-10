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
              CONOCE AL
              <span class="block text-accent">ESPECIALISTA</span>
            </h1>
            <p class="text-xl text-text-secondary leading-relaxed mb-8">
              Más de 10 años transformando atletas y ayudando a personas a alcanzar 
              su máximo potencial físico. Mi misión es simple: resultados reales 
              respaldados por ciencia.
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
                src="assets/images/profile-photo.jpg" 
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
                🎯 FILOSOFÍA PROFESIONAL
              </h3>
              <p class="text-text-secondary leading-relaxed">
                Creo firmemente que cada atleta es único y merece un enfoque personalizado. 
                Mi metodología combina las últimas evidencias científicas con técnicas 
                probadas para garantizar no solo la recuperación, sino la optimización 
                del rendimiento. No hay atajos hacia la excelencia, pero sí caminos más inteligentes.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-bg-primary p-8 rounded-lg shadow-card">
                <h3 class="text-xl font-bold uppercase tracking-wider text-accent mb-4">
                  📚 FORMACIÓN ACADÉMICA
                </h3>
                <ul class="space-y-3 text-text-secondary">
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>Grado en Fisioterapia - Universidad Complutense de Madrid</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>Máster en Fisioterapia Deportiva - UEM</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>Especialización en Terapia Manual Ortopédica</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>Certificación en Análisis Biomecánico 3D</span>
                  </li>
                </ul>
              </div>

              <div class="bg-bg-primary p-8 rounded-lg shadow-card">
                <h3 class="text-xl font-bold uppercase tracking-wider text-accent mb-4">
                  🏆 EXPERIENCIA PROFESIONAL
                </h3>
                <ul class="space-y-3 text-text-secondary">
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>10+ años en rehabilitación deportiva</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>Fisioterapeuta oficial Real Madrid CF (2018-2020)</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>500+ atletas profesionales tratados</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-accent mt-1">•</span>
                    <span>Consultor para equipos olímpicos españoles</span>
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
              500+
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Atletas Tratados
            </div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Tasa de Éxito
            </div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              15
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Certificaciones
            </div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">
              10+
            </div>
            <div class="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Años Experiencia
            </div>
          </div>
        </div>

        <!-- Awards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-bg-secondary p-8 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-text-highlight rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🏆</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              MEJOR FISIOTERAPEUTA 2023
            </h3>
            <p class="text-text-secondary text-sm">
              Colegio Profesional de Fisioterapeutas de Madrid
            </p>
          </div>

          <div class="bg-bg-secondary p-8 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-text-highlight rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🥇</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              EXCELENCIA EN INNOVACIÓN
            </h3>
            <p class="text-text-secondary text-sm">
              Congreso Nacional de Fisioterapia Deportiva
            </p>
          </div>

          <div class="bg-bg-secondary p-8 rounded-lg shadow-card text-center group hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-text-highlight rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">⭐</span>
            </div>
            <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
              RECONOCIMIENTO UEFA
            </h3>
            <p class="text-text-secondary text-sm">
              Contribución al deporte profesional europeo
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
            ÁREAS DE ESPECIALIZACIÓN
          </h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Técnicas avanzadas para resultados excepcionales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-bg-primary p-6 rounded-lg shadow-card group hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold uppercase tracking-wider text-text-primary mb-2">
                LESIONES DEPORTIVAS
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Especializado en lesiones de fútbol, running, crossfit y deportes de contacto. 
                Protocolos específicos para cada disciplina.
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
                TERAPIA MANUAL
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Técnicas de movilización articular, manipulación vertebral y liberación 
                miofascial para restaurar la función óptima.
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
              "Los resultados hablan por sí solos. Con la metodología y productos de BIRIBIRI, 
              logré la transformación que buscaba. Completamente recomendado."
            </p>
            <div class="flex items-center">
              <div class="flex space-x-2 mr-4">
                <img 
                  src="assets/images/person1-before.jpg" 
                  alt="Antes"
                  class="w-12 h-12 rounded-lg object-cover">
                <img 
                  src="assets/images/person1-after.jpg" 
                  alt="Después"
                  class="w-12 h-12 rounded-lg object-cover">
              </div>
              <div>
                <div class="font-bold text-text-primary">Cliente Transformado</div>
                <div class="text-sm text-text-secondary">Antes y Después</div>
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
              "Increíble transformación en pocos meses. Los suplementos y el plan personalizado 
              realmente funcionan. ¡Estoy muy satisfecha con los resultados!"
            </p>
            <div class="flex items-center">
              <div class="flex space-x-2 mr-4">
                <img 
                  src="assets/images/woman1-before.jpg" 
                  alt="Antes"
                  class="w-12 h-12 rounded-lg object-cover">
                <img 
                  src="assets/images/woman1-after.jpg" 
                  alt="Después"
                  class="w-12 h-12 rounded-lg object-cover">
              </div>
              <div>
                <div class="font-bold text-text-primary">Cliente Satisfecha</div>
                <div class="text-sm text-text-secondary">Transformación Real</div>
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
              "La diferencia es notable. Siguiendo el programa de BIRIBIRI conseguí 
              los cambios que llevaba años buscando. Excelente asesoramiento."
            </p>
            <div class="flex items-center">
              <img 
                src="assets/images/person2-before-after.jpg" 
                alt="Antes y Después"
                class="w-16 h-12 rounded-lg object-cover mr-4">
              <div>
                <div class="font-bold text-text-primary">Resultado Verificado</div>
                <div class="text-sm text-text-secondary">Programa Completo</div>
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