export const data = {
  code: 200,
  data: {
    user: {
      id: 8,
      username: 'ihadjal',
      email: 'issam.hadjal@epitech.eu',
      password: '$2b$10$fxPpKjvJjxDNu/Vws0p13erPdgFp.WHx3rjlk2jUQwC/ErDhhTkBG',
      phone: '0669730732',
      address: '46 rue Sainte Sophie',
      city: 'Marseille',
      country: 'France',
      postalCode: '13004',
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJpaGFkamFsIiwiaWF0IjoxNzE1ODI0MzkwLCJleHAiOjM0NjMxODQ3ODB9.DkzDPObjtVWMTjObovUQW0zDAzGLbauLEMIoVL7hlQU',
      roleID: 1,
      companyID: null,
      sensorID: 8,
      googleID: null,
    },
    fields: [
      {
        id: 15,
        color: '#30a9a9',
        geolocation: {
          latitude: 72.0208,
          longitude: 68.8347,
        },
        name: 'plantes fruitières',
        sensor: 8,
        plots: [
          {
            id: 24,
            name: 'agrumes',
            geolocation: {
              latitude: 64.0914,
              longitude: 81.7841,
            },
            color: '#4ea1de',
            variety: [
              {
                id: 43,
                name: 'citronniers',
                diseases: [
                  {
                    name: 'necroses',
                    description:
                      'Zones mortes sur les tissus végétaux, souvent causées par des infections fongiques ou bactériennes.',
                    symptom:
                      'Taches brunes ou noires sur les feuilles, les tiges ou les fruits.',
                    treatment:
                      'Élimination des parties infectées, utilisation de fongicides ou de bactéricides appropriés.',
                    image: 'assets/images/diseases/necroses.jpg',
                    soilMoisture: {
                      min: 80,
                      max: 90,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'champignons',
                      description:
                        'Les champignons sont des organismes eucaryotes pluricellulaires ou unicellulaires. Ils se reproduisent par des spores et sont dépourvus de chlorophylle. Ils se nourrissent de matière organique en décomposition.',
                      image: 'assets/images/organisms/champignons.jpg',
                      probableDiseases: 'nécroses, mildiou, oïdium, rouille',
                    },
                  },
                  {
                    name: 'chancres',
                    description:
                      'Infections localisées sur les tiges, les branches ou le tronc causées par des champignons ou des bactéries.',
                    symptom:
                      'Lésions creusées ou fissurées, suintement de sève, mort des branches affectées.',
                    treatment:
                      'Taille des parties infectées, application de fongicides ou de bactéricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/chancres.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cicadelles',
                      description:
                        'Insectes sauteurs de petite taille, souvent verts ou bruns, qui sucent la sève des plantes.',
                      image: 'assets/images/organisms/cicadelles.jpg',
                      probableDiseases:
                        'chancres, flavescence dorée, jaunisse, brûlures',
                    },
                  },
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'mildiou',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou pourpre sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou pourpres, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/mildiou.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 95,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 22,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'aleurodes',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/aleurodes.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'phytoplasmes',
                    description:
                      'Bactéries sans paroi cellulaire affectant les plantes.',
                    symptom:
                      'Décoloration, déformation des feuilles et des tiges, retard de croissance.',
                    treatment:
                      'Contrôle des vecteurs (insectes), élimination des plantes infectées, utilisation de variétés résistantes.',
                    image: 'assets/images/diseases/phytoplasmes.jpg',
                    soilMoisture: {
                      min: 55,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_de_deuil',
                      description: 'Insectes diptères noirs et blancs.',
                      image: 'assets/images/organisms/mouches_de_deuil.jpg',
                      probableDiseases:
                        'nécroses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                  {
                    name: 'pourrissement',
                    description:
                      'Décomposition des tissus végétaux causée par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Tissus mous, noirs ou bruns, odeur de pourriture, déformation des tissus.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides. Amélioration du drainage',
                    image: 'assets/images/diseases/pourrissement.jpg',
                    soilMoisture: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 20,
                      max: 40,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pyrales',
                      description:
                        'Petits insectes lépidoptères souvent appelés papillons de nuit dont les larves se nourrissent de plantes.',
                      image: 'assets/images/organisms/pyrales.jpg',
                      probableDiseases:
                        'pourrissement, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
              {
                id: 44,
                name: 'clémentiniers',
                diseases: [
                  {
                    name: 'brulures',
                    description:
                      'Décoloration ou nécrose des tissus végétaux causée par des températures élevées, des brûlures chimiques ou des maladies.',
                    symptom:
                      'Feuilles jaunies ou brunes, taches sèches ou brûlées, déformation des feuilles.',
                    treatment:
                      'Arrosage régulier, ombrage des plantes, application de produits anti-chlorose ou anti-brûlure.',
                    image: 'assets/images/diseases/brulures.jpg',
                    soilMoisture: {
                      min: 10,
                      max: 40,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'moderate',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'safe',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'safe',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 30,
                      max: 45,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'high',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tylenchidae',
                      description:
                        'Les tylenchidae sont des nématodes. Ils se nourrissent des racines des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tylenchidae.jpg',
                      probableDiseases:
                        'brûlures, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'taches_foliaires',
                    description:
                      'Taches circulaires ou angulaires sur les feuilles causées par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Taches brunes, noires, jaunes ou blanches sur les feuilles, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides.',
                    image: 'assets/images/diseases/taches_foliaires.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'trichodoridae',
                      description:
                        'Les trichodoridae sont des nématodes. Ils se nourrissent des racines des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/trichodoridae.jpg',
                      probableDiseases:
                        'tâches folliaires, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'mildiou',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou pourpre sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou pourpres, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/mildiou.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 95,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 22,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'aleurodes',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/aleurodes.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'tavelure',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur noire ou grise sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches noires ou grises, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tavelure.jpg',
                    soilMoisture: {
                      min: 60,
                      max: 85,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 75,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 5,
                      max: 18,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'thrips',
                      description:
                        'Petits insectes allongés qui se nourrissent de la sève des plantes',
                      image: 'assets/images/organisms/thrips.jpg',
                      probableDiseases:
                        'rouille, tavelure, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'septoriose',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou noire sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou noires, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/septoriose.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_blanches',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/mouches_blanches.jpg',
                      probableDiseases:
                        'septiorose, tavelure, fermentation, mildiou',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 25,
            name: 'fruits à noyaux',
            geolocation: {
              latitude: -20.0773,
              longitude: -23.1673,
            },
            color: '#3dacce',
            variety: [
              {
                id: 45,
                name: 'cerisiers',
                diseases: [
                  {
                    name: 'galles',
                    description:
                      'Boursouflures ou excroissances anormales sur les feuilles, les tiges ou les racines causées par des insectes ou des acariens.',
                    symptom:
                      'Boursouflures vertes, rouges ou brunes, déformation des tissus végétaux, ralentissement de la croissance.',
                    treatment:
                      'Élimination des galles, utiliser un insecticide ou acaricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/galles.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'araignees_rouges',
                      description:
                        'Les araignées rouges sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/araignees_rouges.jpg',
                      probableDiseases:
                        'galles, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'tumeurs',
                    description:
                      'Croissances anormales sur les tiges, les branches ou les racines causées par des infections bactériennes ou virales.',
                    symptom:
                      'Boursouflures ou excroissances anormales, déformation des tissus, ralentissement de la croissance.',
                    treatment:
                      'Taille des parties infectées, application de bactéricides ou de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tumeurs.jpg',
                    soilMoisture: {
                      min: 20,
                      max: 50,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'chenilles',
                      description:
                        'Les chenilles sont des larves de papillons. Elles se nourrissent des feuilles et tiges des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/chenilles.jpg',
                      probableDiseases:
                        'tumeurs, pourriture, défoliation, croissance retardée',
                    },
                  },
                  {
                    name: 'phytovirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/phytovirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles',
                      description:
                        'Petits insectes au corps recouvert de cire, suceurs de sève.',
                      image: 'assets/images/organisms/cochenilles.jpg',
                      probableDiseases:
                        'fumagines, pourriture, défoliation, phytovirus',
                    },
                  },
                  {
                    name: 'tobravirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tobravirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pucerons',
                      description:
                        'Petits insectes suceurs de sève. Souvent verts, noirs ou bruns.',
                      image: 'assets/images/organisms/pucerons.jpg',
                      probableDiseases:
                        'fumagine, pourriture, tobravirus, phytovirus',
                    },
                  },
                  {
                    name: 'fusariose',
                    description:
                      'Infections fongiques des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Flétrissement, jaunissement, pourriture, nécrose des tissus végétaux.',
                    treatment:
                      'Utilisation de variétés résistantes, application de fongicides spécifiques, rotation des cultures.',
                    image: 'assets/images/diseases/fusariose.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'doppler',
                      description:
                        'Petit organisme qui se nourrit de la sève des plantes.',
                      image: null,
                      probableDiseases:
                        'fusariose, tavelure, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'eutypiose',
                    description:
                      'Maladie fongique des plantes causant le flétrissement, le dessèchement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nécroses des rameaux, déformation des feuilles, mort des rameaux.',
                    treatment:
                      'Taille des parties infectées, application de fongicides spécifiques, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/eutypiose.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'limaces',
                      description:
                        'Mollusques terrestres sans coquille qui se nourrissent de plantes.',
                      image: 'assets/images/organisms/limaces.jpg',
                      probableDiseases:
                        'eutypiose, défoliation, trous, mildiou',
                    },
                  },
                ],
              },
              {
                id: 46,
                name: 'pêchers',
                diseases: [
                  {
                    name: 'mosaiques',
                    description:
                      'Décoloration ou mosaïque de la surface des feuilles causée par des virus ou des carences nutritives.',
                    symptom:
                      'Mosaïque de couleurs claires et foncées, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, utilisation de virucides, employer un engrais équilibrés.',
                    image: 'assets/images/diseases/mosaiques.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'papillons',
                      description:
                        'Les papillons sont des insectes volants. Ils se nourrissent des feuilles et tiges des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/papillons.jpg',
                      probableDiseases:
                        'mosaïque, pourriture, défoliation, croissance retardée',
                    },
                  },
                  {
                    name: 'phytovirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/phytovirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles',
                      description:
                        'Petits insectes au corps recouvert de cire, suceurs de sève.',
                      image: 'assets/images/organisms/cochenilles.jpg',
                      probableDiseases:
                        'fumagines, pourriture, défoliation, phytovirus',
                    },
                  },
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'nematodes',
                    description:
                      'Vers microscopiques parasites des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nodules sur les racines, retard de croissance, flétrissement.',
                    treatment:
                      'Utilisation de variétés résistantes, application de nématicides, rotation des cultures.',
                    image: 'assets/images/diseases/nematodes.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'charancons',
                      description: 'Insectes coléoptères avec un long rostre.',
                      image: 'assets/images/organisms/charancons.jpg',
                      probableDiseases:
                        'nématodes, défoliation, trous, mildiou',
                    },
                  },
                  {
                    name: 'phytoplasmes',
                    description:
                      'Bactéries sans paroi cellulaire affectant les plantes.',
                    symptom:
                      'Décoloration, déformation des feuilles et des tiges, retard de croissance.',
                    treatment:
                      'Contrôle des vecteurs (insectes), élimination des plantes infectées, utilisation de variétés résistantes.',
                    image: 'assets/images/diseases/phytoplasmes.jpg',
                    soilMoisture: {
                      min: 55,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_de_deuil',
                      description: 'Insectes diptères noirs et blancs.',
                      image: 'assets/images/organisms/mouches_de_deuil.jpg',
                      probableDiseases:
                        'nécroses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                  {
                    name: 'pourrissement',
                    description:
                      'Décomposition des tissus végétaux causée par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Tissus mous, noirs ou bruns, odeur de pourriture, déformation des tissus.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides. Amélioration du drainage',
                    image: 'assets/images/diseases/pourrissement.jpg',
                    soilMoisture: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 20,
                      max: 40,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pyrales',
                      description:
                        'Petits insectes lépidoptères souvent appelés papillons de nuit dont les larves se nourrissent de plantes.',
                      image: 'assets/images/organisms/pyrales.jpg',
                      probableDiseases:
                        'pourrissement, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
              {
                id: 47,
                name: 'oliviers',
                diseases: [
                  {
                    name: 'necroses',
                    description:
                      'Zones mortes sur les tissus végétaux, souvent causées par des infections fongiques ou bactériennes.',
                    symptom:
                      'Taches brunes ou noires sur les feuilles, les tiges ou les fruits.',
                    treatment:
                      'Élimination des parties infectées, utilisation de fongicides ou de bactéricides appropriés.',
                    image: 'assets/images/diseases/necroses.jpg',
                    soilMoisture: {
                      min: 80,
                      max: 90,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'champignons',
                      description:
                        'Les champignons sont des organismes eucaryotes pluricellulaires ou unicellulaires. Ils se reproduisent par des spores et sont dépourvus de chlorophylle. Ils se nourrissent de matière organique en décomposition.',
                      image: 'assets/images/organisms/champignons.jpg',
                      probableDiseases: 'nécroses, mildiou, oïdium, rouille',
                    },
                  },
                  {
                    name: 'chancres',
                    description:
                      'Infections localisées sur les tiges, les branches ou le tronc causées par des champignons ou des bactéries.',
                    symptom:
                      'Lésions creusées ou fissurées, suintement de sève, mort des branches affectées.',
                    treatment:
                      'Taille des parties infectées, application de fongicides ou de bactéricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/chancres.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cicadelles',
                      description:
                        'Insectes sauteurs de petite taille, souvent verts ou bruns, qui sucent la sève des plantes.',
                      image: 'assets/images/organisms/cicadelles.jpg',
                      probableDiseases:
                        'chancres, flavescence dorée, jaunisse, brûlures',
                    },
                  },
                  {
                    name: 'tobravirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tobravirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pucerons',
                      description:
                        'Petits insectes suceurs de sève. Souvent verts, noirs ou bruns.',
                      image: 'assets/images/organisms/pucerons.jpg',
                      probableDiseases:
                        'fumagine, pourriture, tobravirus, phytovirus',
                    },
                  },
                  {
                    name: 'rouille',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur rouille sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches de couleur rouille, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/rouille.jpg',
                    soilMoisture: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'moucherons_fongiques',
                      description:
                        'Petits insectes volants dont les larves se nourrissent de matière organique en décomposition.',
                      image: 'assets/images/organisms/moucherons_fongiques.jpg',
                      probableDiseases:
                        'rouille, décomposition, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'taches_huileuses',
                    description:
                      'Infections fongiques ou bactériennes causant des taches semblant grasses sur les feuilles.',
                    symptom:
                      'Tâches sombres et brillantes, souvent entourées avec halo jaune.',
                    treatment:
                      'Application de fongicides ou de bactéricides appropriés, élimination des feuilles infectées.',
                    image: 'assets/images/diseases/taches_huileuses.jpg',
                    soilMoisture: {
                      min: 45,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'moderate',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 55,
                      max: 75,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 35,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles_a_bouclier',
                      description:
                        'Insectes suceurs de sève recouverts avec un bouclier protecteur.',
                      image:
                        'assets/images/organisms/cochenilles_a_bouclier.jpg',
                      probableDiseases:
                        'tâches huileuses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                  {
                    name: 'pourrissement',
                    description:
                      'Décomposition des tissus végétaux causée par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Tissus mous, noirs ou bruns, odeur de pourriture, déformation des tissus.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides. Amélioration du drainage',
                    image: 'assets/images/diseases/pourrissement.jpg',
                    soilMoisture: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 20,
                      max: 40,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pyrales',
                      description:
                        'Petits insectes lépidoptères souvent appelés papillons de nuit dont les larves se nourrissent de plantes.',
                      image: 'assets/images/organisms/pyrales.jpg',
                      probableDiseases:
                        'pourrissement, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 26,
            name: 'fruits à baies',
            geolocation: {
              latitude: 50.9033,
              longitude: -3.4387,
            },
            color: '#aaae6d',
            variety: [
              {
                id: 48,
                name: 'fraisiers',
                diseases: [
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'mildiou',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou pourpre sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou pourpres, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/mildiou.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 95,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 22,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'aleurodes',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/aleurodes.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, mildiou',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 16,
        color: '#63b701',
        geolocation: {
          latitude: -60.6746,
          longitude: 31.3228,
        },
        name: 'plantes légumières',
        sensor: 8,
        plots: [
          {
            id: 27,
            name: 'légumes à bulbes',
            geolocation: {
              latitude: 80.5624,
              longitude: -45.4643,
            },
            color: '#b60adb',
            variety: [
              {
                id: 49,
                name: 'ail',
                diseases: [
                  {
                    name: 'brulures',
                    description:
                      'Décoloration ou nécrose des tissus végétaux causée par des températures élevées, des brûlures chimiques ou des maladies.',
                    symptom:
                      'Feuilles jaunies ou brunes, taches sèches ou brûlées, déformation des feuilles.',
                    treatment:
                      'Arrosage régulier, ombrage des plantes, application de produits anti-chlorose ou anti-brûlure.',
                    image: 'assets/images/diseases/brulures.jpg',
                    soilMoisture: {
                      min: 10,
                      max: 40,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'moderate',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'safe',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'safe',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 30,
                      max: 45,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'high',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tylenchidae',
                      description:
                        'Les tylenchidae sont des nématodes. Ils se nourrissent des racines des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tylenchidae.jpg',
                      probableDiseases:
                        'brûlures, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'taches_foliaires',
                    description:
                      'Taches circulaires ou angulaires sur les feuilles causées par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Taches brunes, noires, jaunes ou blanches sur les feuilles, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides.',
                    image: 'assets/images/diseases/taches_foliaires.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'trichodoridae',
                      description:
                        'Les trichodoridae sont des nématodes. Ils se nourrissent des racines des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/trichodoridae.jpg',
                      probableDiseases:
                        'tâches folliaires, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'mildiou',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou pourpre sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou pourpres, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/mildiou.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 95,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 22,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'aleurodes',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/aleurodes.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'tavelure',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur noire ou grise sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches noires ou grises, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tavelure.jpg',
                    soilMoisture: {
                      min: 60,
                      max: 85,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 75,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 5,
                      max: 18,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'thrips',
                      description:
                        'Petits insectes allongés qui se nourrissent de la sève des plantes',
                      image: 'assets/images/organisms/thrips.jpg',
                      probableDiseases:
                        'rouille, tavelure, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'septoriose',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou noire sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou noires, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/septoriose.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_blanches',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/mouches_blanches.jpg',
                      probableDiseases:
                        'septiorose, tavelure, fermentation, mildiou',
                    },
                  },
                ],
              },
              {
                id: 50,
                name: 'échalotes',
                diseases: [
                  {
                    name: 'galles',
                    description:
                      'Boursouflures ou excroissances anormales sur les feuilles, les tiges ou les racines causées par des insectes ou des acariens.',
                    symptom:
                      'Boursouflures vertes, rouges ou brunes, déformation des tissus végétaux, ralentissement de la croissance.',
                    treatment:
                      'Élimination des galles, utiliser un insecticide ou acaricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/galles.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'araignees_rouges',
                      description:
                        'Les araignées rouges sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/araignees_rouges.jpg',
                      probableDiseases:
                        'galles, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'tumeurs',
                    description:
                      'Croissances anormales sur les tiges, les branches ou les racines causées par des infections bactériennes ou virales.',
                    symptom:
                      'Boursouflures ou excroissances anormales, déformation des tissus, ralentissement de la croissance.',
                    treatment:
                      'Taille des parties infectées, application de bactéricides ou de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tumeurs.jpg',
                    soilMoisture: {
                      min: 20,
                      max: 50,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'chenilles',
                      description:
                        'Les chenilles sont des larves de papillons. Elles se nourrissent des feuilles et tiges des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/chenilles.jpg',
                      probableDiseases:
                        'tumeurs, pourriture, défoliation, croissance retardée',
                    },
                  },
                  {
                    name: 'mosaiques',
                    description:
                      'Décoloration ou mosaïque de la surface des feuilles causée par des virus ou des carences nutritives.',
                    symptom:
                      'Mosaïque de couleurs claires et foncées, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, utilisation de virucides, employer un engrais équilibrés.',
                    image: 'assets/images/diseases/mosaiques.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'papillons',
                      description:
                        'Les papillons sont des insectes volants. Ils se nourrissent des feuilles et tiges des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/papillons.jpg',
                      probableDiseases:
                        'mosaïque, pourriture, défoliation, croissance retardée',
                    },
                  },
                  {
                    name: 'phytovirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/phytovirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles',
                      description:
                        'Petits insectes au corps recouvert de cire, suceurs de sève.',
                      image: 'assets/images/organisms/cochenilles.jpg',
                      probableDiseases:
                        'fumagines, pourriture, défoliation, phytovirus',
                    },
                  },
                  {
                    name: 'fusariose',
                    description:
                      'Infections fongiques des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Flétrissement, jaunissement, pourriture, nécrose des tissus végétaux.',
                    treatment:
                      'Utilisation de variétés résistantes, application de fongicides spécifiques, rotation des cultures.',
                    image: 'assets/images/diseases/fusariose.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'doppler',
                      description:
                        'Petit organisme qui se nourrit de la sève des plantes.',
                      image: null,
                      probableDiseases:
                        'fusariose, tavelure, fermentation, mildiou',
                    },
                  },
                  {
                    name: 'eutypiose',
                    description:
                      'Maladie fongique des plantes causant le flétrissement, le dessèchement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nécroses des rameaux, déformation des feuilles, mort des rameaux.',
                    treatment:
                      'Taille des parties infectées, application de fongicides spécifiques, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/eutypiose.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'limaces',
                      description:
                        'Mollusques terrestres sans coquille qui se nourrissent de plantes.',
                      image: 'assets/images/organisms/limaces.jpg',
                      probableDiseases:
                        'eutypiose, défoliation, trous, mildiou',
                    },
                  },
                  {
                    name: 'nematodes',
                    description:
                      'Vers microscopiques parasites des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nodules sur les racines, retard de croissance, flétrissement.',
                    treatment:
                      'Utilisation de variétés résistantes, application de nématicides, rotation des cultures.',
                    image: 'assets/images/diseases/nematodes.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'charancons',
                      description: 'Insectes coléoptères avec un long rostre.',
                      image: 'assets/images/organisms/charancons.jpg',
                      probableDiseases:
                        'nématodes, défoliation, trous, mildiou',
                    },
                  },
                  {
                    name: 'taches_huileuses',
                    description:
                      'Infections fongiques ou bactériennes causant des taches semblant grasses sur les feuilles.',
                    symptom:
                      'Tâches sombres et brillantes, souvent entourées avec halo jaune.',
                    treatment:
                      'Application de fongicides ou de bactéricides appropriés, élimination des feuilles infectées.',
                    image: 'assets/images/diseases/taches_huileuses.jpg',
                    soilMoisture: {
                      min: 45,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'moderate',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 55,
                      max: 75,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 35,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles_a_bouclier',
                      description:
                        'Insectes suceurs de sève recouverts avec un bouclier protecteur.',
                      image:
                        'assets/images/organisms/cochenilles_a_bouclier.jpg',
                      probableDiseases:
                        'tâches huileuses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
              {
                id: 51,
                name: 'oignons',
                diseases: [
                  {
                    name: 'nematodes',
                    description:
                      'Vers microscopiques parasites des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nodules sur les racines, retard de croissance, flétrissement.',
                    treatment:
                      'Utilisation de variétés résistantes, application de nématicides, rotation des cultures.',
                    image: 'assets/images/diseases/nematodes.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'charancons',
                      description: 'Insectes coléoptères avec un long rostre.',
                      image: 'assets/images/organisms/charancons.jpg',
                      probableDiseases:
                        'nématodes, défoliation, trous, mildiou',
                    },
                  },
                  {
                    name: 'phytoplasmes',
                    description:
                      'Bactéries sans paroi cellulaire affectant les plantes.',
                    symptom:
                      'Décoloration, déformation des feuilles et des tiges, retard de croissance.',
                    treatment:
                      'Contrôle des vecteurs (insectes), élimination des plantes infectées, utilisation de variétés résistantes.',
                    image: 'assets/images/diseases/phytoplasmes.jpg',
                    soilMoisture: {
                      min: 55,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_de_deuil',
                      description: 'Insectes diptères noirs et blancs.',
                      image: 'assets/images/organisms/mouches_de_deuil.jpg',
                      probableDiseases:
                        'nécroses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 17,
        color: '#d464d5',
        geolocation: {
          latitude: 11.1087,
          longitude: 126.3093,
        },
        name: 'plantes aromatiques',
        sensor: 8,
        plots: [
          {
            id: 28,
            name: 'herbes fines',
            geolocation: {
              latitude: -81.9617,
              longitude: -110.0028,
            },
            color: '#898e49',
            variety: [
              {
                id: 52,
                name: 'ciboulettes',
                diseases: [
                  {
                    name: 'necroses',
                    description:
                      'Zones mortes sur les tissus végétaux, souvent causées par des infections fongiques ou bactériennes.',
                    symptom:
                      'Taches brunes ou noires sur les feuilles, les tiges ou les fruits.',
                    treatment:
                      'Élimination des parties infectées, utilisation de fongicides ou de bactéricides appropriés.',
                    image: 'assets/images/diseases/necroses.jpg',
                    soilMoisture: {
                      min: 80,
                      max: 90,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'champignons',
                      description:
                        'Les champignons sont des organismes eucaryotes pluricellulaires ou unicellulaires. Ils se reproduisent par des spores et sont dépourvus de chlorophylle. Ils se nourrissent de matière organique en décomposition.',
                      image: 'assets/images/organisms/champignons.jpg',
                      probableDiseases: 'nécroses, mildiou, oïdium, rouille',
                    },
                  },
                  {
                    name: 'chancres',
                    description:
                      'Infections localisées sur les tiges, les branches ou le tronc causées par des champignons ou des bactéries.',
                    symptom:
                      'Lésions creusées ou fissurées, suintement de sève, mort des branches affectées.',
                    treatment:
                      'Taille des parties infectées, application de fongicides ou de bactéricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/chancres.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cicadelles',
                      description:
                        'Insectes sauteurs de petite taille, souvent verts ou bruns, qui sucent la sève des plantes.',
                      image: 'assets/images/organisms/cicadelles.jpg',
                      probableDiseases:
                        'chancres, flavescence dorée, jaunisse, brûlures',
                    },
                  },
                  {
                    name: 'tobravirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tobravirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pucerons',
                      description:
                        'Petits insectes suceurs de sève. Souvent verts, noirs ou bruns.',
                      image: 'assets/images/organisms/pucerons.jpg',
                      probableDiseases:
                        'fumagine, pourriture, tobravirus, phytovirus',
                    },
                  },
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'taches_huileuses',
                    description:
                      'Infections fongiques ou bactériennes causant des taches semblant grasses sur les feuilles.',
                    symptom:
                      'Tâches sombres et brillantes, souvent entourées avec halo jaune.',
                    treatment:
                      'Application de fongicides ou de bactéricides appropriés, élimination des feuilles infectées.',
                    image: 'assets/images/diseases/taches_huileuses.jpg',
                    soilMoisture: {
                      min: 45,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'moderate',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 55,
                      max: 75,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 35,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles_a_bouclier',
                      description:
                        'Insectes suceurs de sève recouverts avec un bouclier protecteur.',
                      image:
                        'assets/images/organisms/cochenilles_a_bouclier.jpg',
                      probableDiseases:
                        'tâches huileuses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                  {
                    name: 'pourrissement',
                    description:
                      'Décomposition des tissus végétaux causée par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Tissus mous, noirs ou bruns, odeur de pourriture, déformation des tissus.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides. Amélioration du drainage',
                    image: 'assets/images/diseases/pourrissement.jpg',
                    soilMoisture: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 20,
                      max: 40,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pyrales',
                      description:
                        'Petits insectes lépidoptères souvent appelés papillons de nuit dont les larves se nourrissent de plantes.',
                      image: 'assets/images/organisms/pyrales.jpg',
                      probableDiseases:
                        'pourrissement, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
              {
                id: 53,
                name: 'basilics',
                diseases: [
                  {
                    name: 'necroses',
                    description:
                      'Zones mortes sur les tissus végétaux, souvent causées par des infections fongiques ou bactériennes.',
                    symptom:
                      'Taches brunes ou noires sur les feuilles, les tiges ou les fruits.',
                    treatment:
                      'Élimination des parties infectées, utilisation de fongicides ou de bactéricides appropriés.',
                    image: 'assets/images/diseases/necroses.jpg',
                    soilMoisture: {
                      min: 80,
                      max: 90,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'champignons',
                      description:
                        'Les champignons sont des organismes eucaryotes pluricellulaires ou unicellulaires. Ils se reproduisent par des spores et sont dépourvus de chlorophylle. Ils se nourrissent de matière organique en décomposition.',
                      image: 'assets/images/organisms/champignons.jpg',
                      probableDiseases: 'nécroses, mildiou, oïdium, rouille',
                    },
                  },
                  {
                    name: 'chancres',
                    description:
                      'Infections localisées sur les tiges, les branches ou le tronc causées par des champignons ou des bactéries.',
                    symptom:
                      'Lésions creusées ou fissurées, suintement de sève, mort des branches affectées.',
                    treatment:
                      'Taille des parties infectées, application de fongicides ou de bactéricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/chancres.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cicadelles',
                      description:
                        'Insectes sauteurs de petite taille, souvent verts ou bruns, qui sucent la sève des plantes.',
                      image: 'assets/images/organisms/cicadelles.jpg',
                      probableDiseases:
                        'chancres, flavescence dorée, jaunisse, brûlures',
                    },
                  },
                  {
                    name: 'taches_foliaires',
                    description:
                      'Taches circulaires ou angulaires sur les feuilles causées par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Taches brunes, noires, jaunes ou blanches sur les feuilles, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides.',
                    image: 'assets/images/diseases/taches_foliaires.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'trichodoridae',
                      description:
                        'Les trichodoridae sont des nématodes. Ils se nourrissent des racines des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/trichodoridae.jpg',
                      probableDiseases:
                        'tâches folliaires, pourriture, flétrissement, nécroses',
                    },
                  },
                  {
                    name: 'tobravirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tobravirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pucerons',
                      description:
                        'Petits insectes suceurs de sève. Souvent verts, noirs ou bruns.',
                      image: 'assets/images/organisms/pucerons.jpg',
                      probableDiseases:
                        'fumagine, pourriture, tobravirus, phytovirus',
                    },
                  },
                  {
                    name: 'taches_huileuses',
                    description:
                      'Infections fongiques ou bactériennes causant des taches semblant grasses sur les feuilles.',
                    symptom:
                      'Tâches sombres et brillantes, souvent entourées avec halo jaune.',
                    treatment:
                      'Application de fongicides ou de bactéricides appropriés, élimination des feuilles infectées.',
                    image: 'assets/images/diseases/taches_huileuses.jpg',
                    soilMoisture: {
                      min: 45,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'moderate',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 55,
                      max: 75,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 20,
                      max: 35,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles_a_bouclier',
                      description:
                        'Insectes suceurs de sève recouverts avec un bouclier protecteur.',
                      image:
                        'assets/images/organisms/cochenilles_a_bouclier.jpg',
                      probableDiseases:
                        'tâches huileuses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                  {
                    name: 'pourrissement',
                    description:
                      'Décomposition des tissus végétaux causée par des champignons, des bactéries ou des virus.',
                    symptom:
                      'Tissus mous, noirs ou bruns, odeur de pourriture, déformation des tissus.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, de bactéricides ou de virucides. Amélioration du drainage',
                    image: 'assets/images/diseases/pourrissement.jpg',
                    soilMoisture: {
                      min: 70,
                      max: 100,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 20,
                      max: 40,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'pyrales',
                      description:
                        'Petits insectes lépidoptères souvent appelés papillons de nuit dont les larves se nourrissent de plantes.',
                      image: 'assets/images/organisms/pyrales.jpg',
                      probableDiseases:
                        'pourrissement, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 29,
            name: 'herbes ligneuses',
            geolocation: {
              latitude: -39.9214,
              longitude: 109.8564,
            },
            color: '#ded0f8',
            variety: [
              {
                id: 54,
                name: 'thym',
                diseases: [
                  {
                    name: 'phytovirus',
                    description:
                      'Infections virales des plantes causant des symptômes variés selon le type de virus.',
                    symptom:
                      'Mosaïque, décoloration, déformation, nécrose, flétrissement, croissance retardée.',
                    treatment:
                      'Élimination des plantes infectées, utilisation de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/phytovirus.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 60,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cochenilles',
                      description:
                        'Petits insectes au corps recouvert de cire, suceurs de sève.',
                      image: 'assets/images/organisms/cochenilles.jpg',
                      probableDiseases:
                        'fumagines, pourriture, défoliation, phytovirus',
                    },
                  },
                  {
                    name: 'nematodes',
                    description:
                      'Vers microscopiques parasites des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nodules sur les racines, retard de croissance, flétrissement.',
                    treatment:
                      'Utilisation de variétés résistantes, application de nématicides, rotation des cultures.',
                    image: 'assets/images/diseases/nematodes.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'charancons',
                      description: 'Insectes coléoptères avec un long rostre.',
                      image: 'assets/images/organisms/charancons.jpg',
                      probableDiseases:
                        'nématodes, défoliation, trous, mildiou',
                    },
                  },
                  {
                    name: 'phytoplasmes',
                    description:
                      'Bactéries sans paroi cellulaire affectant les plantes.',
                    symptom:
                      'Décoloration, déformation des feuilles et des tiges, retard de croissance.',
                    treatment:
                      'Contrôle des vecteurs (insectes), élimination des plantes infectées, utilisation de variétés résistantes.',
                    image: 'assets/images/diseases/phytoplasmes.jpg',
                    soilMoisture: {
                      min: 55,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_de_deuil',
                      description: 'Insectes diptères noirs et blancs.',
                      image: 'assets/images/organisms/mouches_de_deuil.jpg',
                      probableDiseases:
                        'nécroses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
              {
                id: 55,
                name: 'romarins',
                diseases: [
                  {
                    name: 'chancres',
                    description:
                      'Infections localisées sur les tiges, les branches ou le tronc causées par des champignons ou des bactéries.',
                    symptom:
                      'Lésions creusées ou fissurées, suintement de sève, mort des branches affectées.',
                    treatment:
                      'Taille des parties infectées, application de fongicides ou de bactéricides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/chancres.jpg',
                    soilMoisture: {
                      min: 30,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'cicadelles',
                      description:
                        'Insectes sauteurs de petite taille, souvent verts ou bruns, qui sucent la sève des plantes.',
                      image: 'assets/images/organisms/cicadelles.jpg',
                      probableDiseases:
                        'chancres, flavescence dorée, jaunisse, brûlures',
                    },
                  },
                  {
                    name: 'tumeurs',
                    description:
                      'Croissances anormales sur les tiges, les branches ou les racines causées par des infections bactériennes ou virales.',
                    symptom:
                      'Boursouflures ou excroissances anormales, déformation des tissus, ralentissement de la croissance.',
                    treatment:
                      'Taille des parties infectées, application de bactéricides ou de virucides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/tumeurs.jpg',
                    soilMoisture: {
                      min: 20,
                      max: 50,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 20,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'moderate',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'chenilles',
                      description:
                        'Les chenilles sont des larves de papillons. Elles se nourrissent des feuilles et tiges des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/chenilles.jpg',
                      probableDiseases:
                        'tumeurs, pourriture, défoliation, croissance retardée',
                    },
                  },
                  {
                    name: 'mosaiques',
                    description:
                      'Décoloration ou mosaïque de la surface des feuilles causée par des virus ou des carences nutritives.',
                    symptom:
                      'Mosaïque de couleurs claires et foncées, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, utilisation de virucides, employer un engrais équilibrés.',
                    image: 'assets/images/diseases/mosaiques.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'moderate',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'papillons',
                      description:
                        'Les papillons sont des insectes volants. Ils se nourrissent des feuilles et tiges des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/papillons.jpg',
                      probableDiseases:
                        'mosaïque, pourriture, défoliation, croissance retardée',
                    },
                  },
                ],
              },
              {
                id: 56,
                name: 'sauge',
                diseases: [
                  {
                    name: 'oidium',
                    description:
                      'Infections fongiques des plantes causant un feutrage blanc ou gris sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Feutrage blanc ou gris, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/oidium.jpg',
                    soilMoisture: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'safe',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'tetranyques',
                      description:
                        'Les tétranyques sont des acariens. Ils se nourrissent de la sève des plantes et sont vecteurs de maladies.',
                      image: 'assets/images/organisms/tetranyques.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, nécroses',
                    },
                  },
                  {
                    name: 'mildiou',
                    description:
                      'Infections fongiques des plantes causant des taches de couleur brune ou pourpre sur les feuilles, les tiges ou les fruits.',
                    symptom:
                      'Taches brunes ou pourpres, décoloration des tissus, déformation des feuilles.',
                    treatment:
                      'Élimination des parties infectées, application de fongicides, amélioration des conditions de culture.',
                    image: 'assets/images/diseases/mildiou.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 70,
                      max: 95,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 22,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'aleurodes',
                      description:
                        'Petits insectes volants qui se nourrissent de la sève des plantes.',
                      image: 'assets/images/organisms/aleurodes.jpg',
                      probableDiseases:
                        'rouille, oïdium, fermentation, mildiou',
                    },
                  },
                ],
              },
              {
                id: 57,
                name: 'menthes',
                diseases: [
                  {
                    name: 'nematodes',
                    description:
                      'Vers microscopiques parasites des plantes causant le flétrissement, le jaunissement ou la pourriture des tissus végétaux nottament les racines.',
                    symptom:
                      'Nodules sur les racines, retard de croissance, flétrissement.',
                    treatment:
                      'Utilisation de variétés résistantes, application de nématicides, rotation des cultures.',
                    image: 'assets/images/diseases/nematodes.jpg',
                    soilMoisture: {
                      min: 50,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'charancons',
                      description: 'Insectes coléoptères avec un long rostre.',
                      image: 'assets/images/organisms/charancons.jpg',
                      probableDiseases:
                        'nématodes, défoliation, trous, mildiou',
                    },
                  },
                  {
                    name: 'phytoplasmes',
                    description:
                      'Bactéries sans paroi cellulaire affectant les plantes.',
                    symptom:
                      'Décoloration, déformation des feuilles et des tiges, retard de croissance.',
                    treatment:
                      'Contrôle des vecteurs (insectes), élimination des plantes infectées, utilisation de variétés résistantes.',
                    image: 'assets/images/diseases/phytoplasmes.jpg',
                    soilMoisture: {
                      min: 55,
                      max: 80,
                      data: [
                        {
                          value: 40.305177924324866,
                          dangerous: 'high',
                          timestamp: 1715634970250,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 65,
                      max: 85,
                      data: [
                        {
                          value: 15.114221221947123,
                          dangerous: 'high',
                          timestamp: 1715634970131,
                        },
                      ],
                    },
                    luminosity: {
                      min: 30,
                      max: 50,
                      data: [
                        {
                          value: 85.4035778066555,
                          dangerous: 'high',
                          timestamp: 1715634970416,
                        },
                      ],
                    },
                    temperature: {
                      min: 18,
                      max: 28,
                      data: [
                        {
                          value: 20.32877614840578,
                          dangerous: 'safe',
                          timestamp: 1715634970337,
                        },
                      ],
                    },
                    organism: {
                      name: 'mouches_de_deuil',
                      description: 'Insectes diptères noirs et blancs.',
                      image: 'assets/images/organisms/mouches_de_deuil.jpg',
                      probableDiseases:
                        'nécroses, défoliation, phytoplasmes, mildiou',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  message:
    'Comparison sensor data for diseases in user fields retrieved successfully for this userID: 8',
};
