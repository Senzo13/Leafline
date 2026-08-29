export const datas = {
  code: 200,
  data: {
    user: {
      id: 1,
      username: 'iamara',
      email: 'iliam.amara@epitech.eu',
      password: '$2b$10$aplfGQZHJ4hBXwMCe8hqZes1dDQnbmXAyu7jTmJR/dpmVMVJnD.xO',
      phone: '0123556787',
      address: '1 rue de la paix',
      city: 'Paris',
      country: 'France',
      postalCode: '75000',
      refreshToken:
        '98401b9b5ca85b6e5065867dd75ce661dc0ece2b55c78dec51d65ee118989b8c11d5d107325bf9bed785400a2cad92861a5607d94aa17b51ba25060fc4391938',
      roleID: 1,
      companyID: null,
      sensorID: 1,
      googleID: null,
    },
    fields: [
      {
        id: 1,
        color: '#fedaf5',
        geolocation: {
          latitude: -77.3119,
          longitude: -67.8555,
        },
        name: 'plantes légumières',
        sensor: 1,
        plots: [
          {
            id: 1,
            name: 'tubercules',
            geolocation: {
              latitude: 82.1262,
              longitude: 127.5973,
            },
            color: '#c3b23a',
            variety: [
              {
                id: 1,
                name: 'pommes de terre',
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
                          value: 4,
                          dangerous: 'high',
                          timestamp: 1715665663120,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 80,
                      max: 100,
                      data: [
                        {
                          value: 3,
                          dangerous: 'high',
                          timestamp: 1715665663096,
                        },
                      ],
                    },
                    luminosity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 2,
                          dangerous: 'high',
                          timestamp: 1715665663048,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 1,
                          dangerous: 'high',
                          timestamp: 1715665663076,
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
                          value: 4,
                          dangerous: 'high',
                          timestamp: 1715665663120,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 3,
                          dangerous: 'high',
                          timestamp: 1715665663096,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 60,
                      data: [
                        {
                          value: 2,
                          dangerous: 'high',
                          timestamp: 1715665663048,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 25,
                      data: [
                        {
                          value: 1,
                          dangerous: 'high',
                          timestamp: 1715665663076,
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
                          value: 4,
                          dangerous: 'high',
                          timestamp: 1715665663120,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 60,
                      max: 90,
                      data: [
                        {
                          value: 3,
                          dangerous: 'high',
                          timestamp: 1715665663096,
                        },
                      ],
                    },
                    luminosity: {
                      min: 40,
                      max: 70,
                      data: [
                        {
                          value: 2,
                          dangerous: 'high',
                          timestamp: 1715665663048,
                        },
                      ],
                    },
                    temperature: {
                      min: 10,
                      max: 25,
                      data: [
                        {
                          value: 1,
                          dangerous: 'high',
                          timestamp: 1715665663076,
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
                          value: 4,
                          dangerous: 'high',
                          timestamp: 1715665663120,
                        },
                      ],
                    },
                    airHumidity: {
                      min: 50,
                      max: 70,
                      data: [
                        {
                          value: 3,
                          dangerous: 'high',
                          timestamp: 1715665663096,
                        },
                      ],
                    },
                    luminosity: {
                      min: 10,
                      max: 30,
                      data: [
                        {
                          value: 2,
                          dangerous: 'high',
                          timestamp: 1715665663048,
                        },
                      ],
                    },
                    temperature: {
                      min: 15,
                      max: 30,
                      data: [
                        {
                          value: 1,
                          dangerous: 'high',
                          timestamp: 1715665663076,
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
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  message:
    'Comparison sensor data for diseases in user fields retrieved successfully for this userID: 1',
};
