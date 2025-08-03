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
    // ACEITES ESENCIALES PUROS
    {
      id: '1',
      name: 'ACEITE ESENCIAL CANELA',
      description: 'Propiedades antibacterianas. Antioxidante. Acelera la curación de heridas. Alivia la inflamación. Fortalece el sistema inmunológico.',
      price: 95,
      category: 'oils',
      image: '/assets/images/cinnamon-oil.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 45
    },
    {
      id: '2',
      name: 'ACEITE ESENCIAL PINO',
      description: 'Combate resfriados, bronquitis, asma. Antiséptico. Repelente de insectos. Reduce la ansiedad y el estrés.',
      price: 75,
      category: 'oils',
      image: '/assets/images/pine-oil.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 32
    },
    {
      id: '3',
      name: 'ACEITE ESENCIAL BERGAMOTA',
      description: 'Reduce los niveles de estrés. Crea un ambiente tranquilo y sereno. Alivia la piel irritada. Controla el acné. Analgésico.',
      price: 175,
      category: 'oils',
      image: '/assets/images/bergamot-oil.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 68
    },
    {
      id: '4',
      name: 'ACEITE ESENCIAL ROMERO',
      description: 'Ayuda a limpiar el cabello. Nutre el cuero cabelludo. Antiinflamatorio. Analgésico. Mejora la memoria y la concentración.',
      price: 85,
      category: 'oils',
      image: '/assets/images/rosemary-oil.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 41
    },
    {
      id: '5',
      name: 'ACEITE ESENCIAL POMELO',
      description: 'Eleva el estado de ánimo. Ayuda a perder peso. Desintoxicante del organismo. Mejora la apariencia de la piel.',
      price: 95,
      category: 'oils',
      image: '/assets/images/grapefruit-oil.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 29
    },
    {
      id: '6',
      name: 'ACEITE ESENCIAL ANÍS ESTRELLA',
      description: 'Equilibra el sistema digestivo. Vigorizante. Antiespasmódico. Calma la irritación de la piel.',
      price: 85,
      category: 'oils',
      image: '/assets/images/star-anise-oil.jpg',
      inStock: true,
      rating: 4.4,
      reviews: 26
    },
    {
      id: '7',
      name: 'ACEITE ESENCIAL LIMÓN',
      description: 'Mejora el estado de ánimo. Digestivo. Desintoxicante y purificante. Antiinflamatorio. Combate los estados gripales.',
      price: 105,
      category: 'oils',
      image: '/assets/images/lemon-oil.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 87
    },
    {
      id: '8',
      name: 'ACEITE ESENCIAL LAVANDA',
      description: 'Calma las picaduras de insectos, quemaduras menores y piel seca. Elimina la intranquilidad. Promueve el sueño tranquilo.',
      price: 175,
      category: 'oils',
      image: '/assets/images/lavender-oil.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 156
    },
    {
      id: '9',
      name: 'ACEITE ESENCIAL JENGIBRE',
      description: 'Reduce las náuseas. Antiinflamatorio. Ayuda a problemas digestivos. Da sensación equilibrada.',
      price: 205,
      category: 'oils',
      image: '/assets/images/ginger-oil.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 73
    },
    {
      id: '10',
      name: 'ACEITE ESENCIAL MENTA',
      description: 'Respaldo para el bienestar estomacal y digestivos. Preserva el bienestar bucal. Alivia el estrés y fomenta la paz interior.',
      price: 100,
      category: 'oils',
      image: '/assets/images/mint-oil.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 94
    },
    {
      id: '11',
      name: 'ACEITE ESENCIAL CLAVO',
      description: 'Elimina gases. Evita infecciones. Antiinflamatorio. Combate el malestar físico bucal.',
      price: 80,
      category: 'oils',
      image: '/assets/images/clove-oil.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 38
    },
    {
      id: '12',
      name: 'ACEITE ESENCIAL EUCALIPTO',
      description: 'Alivia la congestión. Abre las vías respiratorias. Limpiadora y desinfectante. Promueve la relajación.',
      price: 65,
      category: 'oils',
      image: '/assets/images/eucalyptus-oil.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 62
    },
    {
      id: '13',
      name: 'ACEITE ESENCIAL NARANJA',
      description: 'Mejora estado de ánimo. Promueve sentimiento de felicidad y optimismo. Antioxidante. Favorece la digestión.',
      price: 60,
      category: 'oils',
      image: '/assets/images/orange-oil.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 52
    },
    {
      id: '14',
      name: 'ACEITE ESENCIAL SÁNDALO',
      description: 'Alivia la ansiedad y el estrés. Calma la mente. Tonifica y limpia la piel. Aumenta la confianza en uno mismo.',
      price: 150,
      category: 'oils',
      image: '/assets/images/sandalwood-oil.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 41
    },
    {
      id: '15',
      name: 'ACEITE ESENCIAL TOMILLO',
      description: 'Apoya al sistema inmune. Combate amenazas ambientales. Alivia la tensión muscular. Mejora la concentración.',
      price: 80,
      category: 'oils',
      image: '/assets/images/thyme-oil.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 33
    },
    {
      id: '16',
      name: 'ACEITE ESENCIAL ÁRBOL DEL TÉ',
      description: 'Alivia la picazón e irritación. Ayuda al sistema inmune. Previene malestares general del cuerpo. Mantiene el pelo en óptimas condiciones.',
      price: 85,
      category: 'oils',
      image: '/assets/images/tea-tree-oil.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: '17',
      name: 'ACEITE ESENCIAL HIERBABUENA',
      description: 'Propiedades relajantes. Ayuda a aliviar las tensiones musculares. Equilibra el sistema digestivo. Promueve sensación de calma.',
      price: 95,
      category: 'oils',
      image: '/assets/images/spearmint-oil.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 42
    },
    {
      id: '18',
      name: 'ACEITE PARA LA TOS Y GRIPE',
      description: 'Alivia las molestias de las vías respiratorias. Reduce la tos y la flema. Despeja las vías respiratorias.',
      price: 175,
      category: 'oils',
      image: '/assets/images/cough-oil.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 67
    },
    {
      id: '19',
      name: 'ACEITE PARA LA RELAJACIÓN Y EL ESTRÉS',
      description: 'Combate el estrés y el cansancio. Ayuda a dormir. Te relaja.',
      price: 175,
      category: 'oils',
      image: '/assets/images/relaxation-oil.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 89
    },
    {
      id: '20',
      name: 'ACEITE PARA LA CAÍDA DEL PELO',
      description: 'Engrosa el cabello. Elimina la caspa. Estimula el flujo sanguíneo.',
      price: 175,
      category: 'oils',
      image: '/assets/images/hair-oil.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 56
    },
    
    // CÁPSULAS
    {
      id: '21',
      name: 'GLUCOSAMINA Y DOLOPIAN',
      description: 'Forma y repara el cartílago. Proporciona elasticidad al cartílago. Disminuye el dolor articular. Antiinflamatorio. Contiene: Glucosamina, Condroitina, Harpagofito, Colágeno.',
      price: 250,
      category: 'capsules',
      image: '/assets/images/glucosamine.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 78
    },
    {
      id: '22',
      name: 'MELENA LEÓN, CORDYCEPS, REISHI, CÚRCUMA',
      description: 'Control de estrés. Brinda energía. Nootrópico. Sueño reparador. Claridad mental. Mayor concentración, rendimiento y resistencia.',
      price: 190,
      category: 'capsules',
      image: '/assets/images/mushroom-complex.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 123
    },
    {
      id: '23',
      name: 'HÍGADO Y VESÍCULA',
      description: 'Ayuda en la desintoxicación del hígado. Repara y regenera el hígado. Ayuda a la digestión de las grasas. Combate piedras y lodo en la vesícula. Contiene: Cardo Mariano, Alcachofa, Diente de León.',
      price: 195,
      category: 'capsules',
      image: '/assets/images/liver-support.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 65
    },
    {
      id: '24',
      name: 'ALIVGAST CÁPSULAS',
      description: 'Alivia la gastritis y las úlceras gástricas. Combate el reflujo y la inflamación abdominal. Disminuye el ardor en la boca del estómago. Contiene: Fenogreco, Cuachalalate, Hinojo, Manzanilla.',
      price: 165,
      category: 'capsules',
      image: '/assets/images/stomach-support.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 89
    },
    {
      id: '25',
      name: 'MELENA DE LEÓN',
      description: 'Claridad mental. Combate el Alzheimer. Evita la ansiedad y la depresión. Combate la demencia senil.',
      price: 250,
      category: 'capsules',
      image: '/assets/images/lions-mane.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 145
    },
    {
      id: '26',
      name: 'CHOLESTEROL DECREASE',
      description: 'Auxiliar en la desintoxicación del hígado y la sangre. Disminuye el colesterol malo y los triglicéridos. Ayuda a la salud cardiovascular. Contiene: Reishi, Moringa, Cardo Mariano, Boldo.',
      price: 150,
      category: 'capsules',
      image: '/assets/images/cholesterol.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 67
    },
    {
      id: '27',
      name: 'VITEX AND MACA',
      description: 'Alternativa natural para la menopausia. Aporta energía. Combate los bochornos. Mejora densidad ósea. Contiene: Vitamina C, Coenzima Q10, Ginseng, Vitex, Maca.',
      price: 195,
      category: 'capsules',
      image: '/assets/images/womens-health.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 92
    },
    {
      id: '28',
      name: 'AJO NEGRO',
      description: 'Previene diferentes tipos de cáncer. Previene la hipertensión. Ayuda a los estados de estrés, cansancio, fatiga, nerviosismo. Aliado contra el Parkinson. Es un antioxidante depurativo.',
      price: 220,
      category: 'capsules',
      image: '/assets/images/black-garlic.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 76
    },
    {
      id: '29',
      name: 'ÁCIDO ÚRICO',
      description: 'Alivia la gota y disminuye el exceso de ácido úrico. Auxiliar en el dolor pulsátil, rigidez en las articulaciones, enrojecimiento y la hinchazón. Contiene: Moringa, Diente de León, Cúrcuma.',
      price: 185,
      category: 'capsules',
      image: '/assets/images/uric-acid.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 54
    },
    {
      id: '30',
      name: 'BAIXAR PES',
      description: 'Ayuda a quemar la grasa en el cuerpo. Reduce el apetito. Ideal para personas con sobrepeso. Incrementa la quema calórica. Contiene: Raíz de Tejocote, Reishi, Jengibre, Moringa.',
      price: 200,
      category: 'capsules',
      image: '/assets/images/weight-loss.jpg',
      inStock: true,
      rating: 4.4,
      reviews: 112
    },
    {
      id: '31',
      name: 'CORDYCEPS',
      description: 'Ayuda a tener mayor rendimiento y energía. Es un potente antienvejecimiento. Vigorizante sexual. Estimula el sistema inmune. Favorece el control del azúcar en sangre.',
      price: 220,
      category: 'capsules',
      image: '/assets/images/cordyceps.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 98
    },
    {
      id: '32',
      name: 'CONTDIABET',
      description: 'Reduce la glucosa en sangre. Aumenta los niveles de insulina. Contiene: Moringa, Canela, Picolinato de Cromo, Reishi.',
      price: 165,
      category: 'capsules',
      image: '/assets/images/diabetes-support.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 87
    },
    {
      id: '33',
      name: 'REISHI',
      description: 'Reforzar el sistema inmunológico. Tratar la fatiga. Reduce el colesterol elevado y la presión arterial. Aumenta la fuerza y la resistencia. Previene o trata el cáncer.',
      price: 200,
      category: 'capsules',
      image: '/assets/images/reishi.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 134
    },
    {
      id: '34',
      name: 'LADOCAN',
      description: 'Combate la anemia. Desintoxica la sangre. Elimina radicales libres. Ayuda a eliminar problemas digestivos. Pérdida de peso involuntaria. Contiene: Zarzaparrilla, Muicle, Sanguinaria.',
      price: 155,
      category: 'capsules',
      image: '/assets/images/blood-detox.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 43
    },
    {
      id: '35',
      name: 'CARE KIDNEYS',
      description: 'Ayuda a eliminar el líquido retenido. Combate la inflamación de los riñones. Elimina los cálculos renales y de la vejiga. Contiene: Rompepiedras, Rábano Negro, Cola de Caballo, Palo Azul.',
      price: 175,
      category: 'capsules',
      image: '/assets/images/kidney-support.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 71
    },
    {
      id: '36',
      name: 'CITRATO DE MAGNESIO',
      description: 'Trata el estreñimiento a corto plazo. Ayuda en la relajación y a dormir. Controla la presión arterial. Regula los niveles de azúcar en sangre. Favorece la salud de los huesos y los músculos.',
      price: 250,
      category: 'capsules',
      image: '/assets/images/magnesium.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 156
    },
    {
      id: '37',
      name: 'CÚRCUMA + PIMIENTA NEGRA',
      description: 'Antiinflamatorio. Ayuda en la pérdida de peso. Antioxidante. La pimienta negra ayuda a una absorción más rápida de la cúrcuma.',
      price: 190,
      category: 'capsules',
      image: '/assets/images/turmeric-pepper.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    
    // LÍQUIDOS
    {
      id: '38',
      name: 'ALIVGAST LÍQUIDO',
      description: 'Alivia la gastritis y las úlceras gástricas. Combate el reflujo y la inflamación abdominal. Disminuye el ardor en la boca del estómago. Contiene: Albahaca, Regaliz, Bicarbonato de Sodio, Hoja Sen. 250ml.',
      price: 140,
      category: 'liquids',
      image: '/assets/images/alivgast-liquid.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 67
    },
    {
      id: '39',
      name: 'CIRCUVARIC',
      description: 'Mejoran las varices, la sensación de pesadez, cansancio y dolor en las piernas. Favorece la circulación sanguínea. Combate las hemorroides. Contiene: Castaño de Indias, Hamamelis, Romero. 60ml.',
      price: 110,
      category: 'liquids',
      image: '/assets/images/circuvaric.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 45
    },
    {
      id: '40',
      name: 'RELAKSIM',
      description: 'Elimina el estrés, ayuda a dormir, combate la ansiedad y el nerviosismo. Contiene: Ginseng, Pasiflora, Flor de Manita, Valeriana. 60ml.',
      price: 70,
      category: 'liquids',
      image: '/assets/images/relaksim.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 78
    },
    {
      id: '41',
      name: 'DOLOPIAN',
      description: 'Alivia el dolor. Desinflama los músculos. Actúa sobre las fibras nerviosas del cuerpo. Contiene: Lidocaína, Árnica, Hoja Santa, Menta. 60ml. Uso tópico.',
      price: 70,
      category: 'liquids',
      image: '/assets/images/dolopian.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 94
    },
    
    // CREMAS
    {
      id: '42',
      name: 'CREMA ANTIARRUGAS',
      description: 'Reduce líneas de expresión y arrugas. Hidrata profundamente la piel. Estimula la producción de colágeno. 50g.',
      price: 150,
      category: 'creams',
      image: '/assets/images/anti-aging-cream.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 67
    },
    {
      id: '43',
      name: 'GEL REAFIRMANTE REDUCTOR',
      description: 'Reafirma y tonifica la piel. Reduce medidas y celulitis. Mejora la elasticidad cutánea. 250ml.',
      price: 170,
      category: 'creams',
      image: '/assets/images/reducing-gel.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 89
    },
    {
      id: '44',
      name: 'SÉRUM LIBRE DE ACEITE PARA EL ACNÉ',
      description: 'Controla la producción de grasa. Reduce inflamación del acné. Previene nuevos brotes. 60ml.',
      price: 110,
      category: 'creams',
      image: '/assets/images/acne-serum.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 123
    },
    {
      id: '45',
      name: 'PEELING QUÍMICO',
      description: 'Exfolia la piel profundamente. Renueva células muertas. Mejora textura y luminosidad. 30ml.',
      price: 150,
      category: 'creams',
      image: '/assets/images/chemical-peeling.jpg',
      inStock: true,
      rating: 4.4,
      reviews: 34
    },
    {
      id: '46',
      name: 'CREMA DESPIGMENTADORA',
      description: 'Reduce manchas y hiperpigmentación. Unifica el tono de la piel. Previene nuevas manchas. 50ml.',
      price: 150,
      category: 'creams',
      image: '/assets/images/depigmenting-cream.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 78
    },
    {
      id: '47',
      name: 'CONTORNO DE OJOS',
      description: 'Reduce ojeras y bolsas. Previene líneas de expresión. Hidrata la zona delicada del contorno. 10ml.',
      price: 110,
      category: 'creams',
      image: '/assets/images/eye-contour.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 156
    },
    
    // JABONES ARTESANALES
    {
      id: '48',
      name: 'JABÓN DE ROMERO',
      description: 'Antiinflamatorio. Exfoliante. Antiacné. Hidratante. Antiarruga. Contiene: Extracto de Romero, Aceite de Romero.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/rosemary-soap.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 67
    },
    {
      id: '49',
      name: 'JABÓN ANTICAÍDA DEL PELO',
      description: 'Mejora la circulación. Rehidrata el cuero cabelludo. Elimina el exceso de grasa en el pelo. Da fortaleza al cabello. Contiene: Extractos de Ortiga, Romero, Aloe, Aceites de Romero y Manzanilla.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/hair-loss-soap.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 89
    },
    {
      id: '50',
      name: 'JABÓN DE AVENA Y MIEL',
      description: 'Para la piel sensible y seca. Hidratante. Calmante. Antiséptica. Piel con psoriasis. Contiene: Avena, Miel, Aceite de Jojoba.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/oatmeal-honey-soap.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 123
    },
    {
      id: '51',
      name: 'JABÓN DE CARBÓN ACTIVADO',
      description: 'Limpia de manera profunda. Da luminosidad a la piel. Elimina la grasa. No más espinillas ni puntos negros. Contiene: Carbón Activado, Alantoína, Aceite de Lavanda, Aceite de Árbol del Té.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/charcoal-soap.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 145
    },
    {
      id: '52',
      name: 'JABÓN DE NARANJA Y CAFÉ',
      description: 'Mejora la circulación. Antioxidante. Hidratante. Reafirmante. Elimina la celulitis. Contiene: Café, Manteca de Cacao, Cáscara de Naranja, Miel.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/orange-coffee-soap.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 78
    },
    {
      id: '53',
      name: 'JABÓN DE ARROZ',
      description: 'Rejuvenece la piel. Hidrata. Combate el envejecimiento. Despigmenta la piel. Contiene: Aceite de Coco, Arroz, Vitamina E, Gel de Aloe.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/rice-soap.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 92
    },
    {
      id: '54',
      name: 'JABÓN DE LAVANDA',
      description: 'Relajante. Antiséptico. Antiinflamatorio. Contra las quemaduras y afecciones cutáneas. Contiene: Extracto de Lavanda, Aceite de Romero, Aceite de Lavanda.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/lavender-soap.jpg',
      inStock: true,
      rating: 4.9,
      reviews: 167
    },
    {
      id: '55',
      name: 'JABÓN DE AZUFRE',
      description: 'Combate el acné y pieles grasas. Antiinflamatorio. Contra la rosácea. Contiene: Aceite de Árbol del Té, Azufre.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/sulfur-soap.jpg',
      inStock: true,
      rating: 4.4,
      reviews: 56
    },
    {
      id: '56',
      name: 'JABÓN DE PEREJIL, AVENA Y MIEL',
      description: 'Aclarante. Elimina las manchas de la piel. Mejora la circulación. Antiinflamatorio. Contiene: Extracto de Té Verde y Perejil, Leche en Polvo, Avena, Miel.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/parsley-soap.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: '57',
      name: 'JABÓN REDUCTOR',
      description: 'Incrementa el gasto energético. Disminuye tejido graso. Da firmeza a la piel. Evita flacidez. Elimina celulitis. Contiene: Algas Marinas, Extracto de Hiedra, Avena, Café, Aceite de Coco.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/reducing-soap.jpg',
      inStock: true,
      rating: 4.3,
      reviews: 34
    },
    {
      id: '58',
      name: 'JABÓN DE ARCILLA Y ÁRBOL DEL TÉ',
      description: 'Combate el exceso de grasa en piel y cabello. Elimina toxinas y células muertas. Antiséptico. Contiene: Arcilla, Aceite de Árbol del Té.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/clay-soap.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 123
    },
    {
      id: '59',
      name: 'JABÓN DE CALÉNDULA',
      description: 'Antiinflamatorio. Forma nuevos tejidos. Cicatrizante. Combate la rosácea, psoriasis, piel atópica y sensible. Contiene: Extracto de Caléndula y Manzanilla, Aceite de Caléndula y Manzanilla.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/calendula-soap.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 145
    },
    {
      id: '60',
      name: 'JABÓN DE ALGAS MARINAS',
      description: 'Remineralizante. Limpiador. Exfoliante. Extrae el exceso de líquido. Antiinflamatorio. Contiene: Manteca de Cacao, Algas Marinas, Aceite de Romero.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/seaweed-soap.jpg',
      inStock: true,
      rating: 4.5,
      reviews: 67
    },
    {
      id: '61',
      name: 'JABÓN DE RUDA',
      description: 'Antiséptico. Antibacteriano. Disminuye la sensación de piernas cansadas. Aporta suavidad y frescura. Contiene: Extracto de Ruda.',
      price: 20,
      category: 'soaps',
      image: '/assets/images/rue-soap.jpg',
      inStock: true,
      rating: 4.4,
      reviews: 78
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