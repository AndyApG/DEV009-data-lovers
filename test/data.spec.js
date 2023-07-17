import {filterData,sortData,change, mean} from '../src/data.js';

const data =[ 
  {
    "num": "151",
    "name": "mew",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "mythic",
    "type": [
      "psychic"
    ],
    "quick-move": [
      {
        "name": "pound",
        "type": "normal",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      }],
    "eps" : 10.0,
    "dps" : 11.7,

  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
    "quick-move": [
      {
        "name": "ember",
        "type": "fire",
        "base-damage": "10",
        "energy": "10",
        "move-duration-seg": "1"
      },
      {
        "name": "scratch",
        "type": "normal",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      }
    ],
    "eps" : 9.0,
    "dps" : 11.0,
  },
  {
    "num": "007",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "water"
    ],
    "quick-move": [
      {
        "name": "bubble",
        "type": "water",
        "base-damage": "12",
        "energy": "14",
        "move-duration-seg": "1.2"
      },
      {
        "name": "tackle",
        "type": "normal",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      }
    ],
    "eps" : 10.8,
    "dps" : 10.0,
  }

];

describe('filterData',() => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('filtra correctamente si la propiedad en un objeto', () => {
    const received = filterData(data,'water','type');
    const expected = Array(Object ({
      "num": "007",
      "name": "squirtle",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "pokemon-rarity": "normal",
      "type": [
        "water"
      ],
      "quick-move": [
        {
          "name": "bubble",
          "type": "water",
          "base-damage": "12",
          "energy": "14",
          "move-duration-seg": "1.2"
        },
        {
          "name": "tackle",
          "type": "normal",
          "base-damage": "5",
          "energy": "5",
          "move-duration-seg": "0.5"
        }
      ],
      "eps" : 10.8,
      "dps" : 10.0,
    }));
    expect(received).toEqual(expected);
  });
  it('filtra correctamente si la propiedad es un string',() => {
    const received = filterData(data,'normal','pokemon-rarity');
    const expected = Array(Object({ 
      "num": "004",
      "name": "charmander",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "pokemon-rarity": "normal",
      "type": [
        "fire"
      ],
      "quick-move": [
        {
          "name": "ember",
          "type": "fire",
          "base-damage": "10",
          "energy": "10",
          "move-duration-seg": "1"
        },
        {
          "name": "scratch",
          "type": "normal",
          "base-damage": "6",
          "energy": "4",
          "move-duration-seg": "0.5"
        }
      ],
      "eps" : 9.0,
      "dps" : 11.0,
    }),
    Object({
      "num": "007",
      "name": "squirtle",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "pokemon-rarity": "normal",
      "type": [
        "water"
      ],
      "quick-move": [
        {
          "name": "bubble",
          "type": "water",
          "base-damage": "12",
          "energy": "14",
          "move-duration-seg": "1.2"
        },
        {
          "name": "tackle",
          "type": "normal",
          "base-damage": "5",
          "energy": "5",
          "move-duration-seg": "0.5"
        }
      ],
      "eps" : 10.8,
      "dps" : 10.0,

    }));
    expect(received).toEqual(expected);
  });
});

describe('sortData',() => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('ordena correctamente de forma ascendente strings al seleccionar una propiedad', () => {
    const received = sortData(data,'name','ascendente');
    const expected = Array(Object (
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "quick-move": [
          {
            "name": "ember",
            "type": "fire",
            "base-damage": "10",
            "energy": "10",
            "move-duration-seg": "1"
          },
          {
            "name": "scratch",
            "type": "normal",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 9.0,
        "dps" : 11.0,
      }
    ),Object(
      {
        "num": "151",
        "name": "mew",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic"
        ],
        "quick-move": [
          {
            "name": "pound",
            "type": "normal",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          }],
        "eps" : 10.0,
        "dps" : 11.7,
    
      }
    ),Object(
      {
        "num": "007",
        "name": "squirtle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "water"
        ],
        "quick-move": [
          {
            "name": "bubble",
            "type": "water",
            "base-damage": "12",
            "energy": "14",
            "move-duration-seg": "1.2"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 10.8,
        "dps" : 10.0,
      }
    ));
    expect(received).toEqual(expected);
  });
  it('ordena correctamente de forma descendente strings al seleccionar una propiedad',() => {
    const received = sortData(data,'name','descendente');
    const expected = Array(Object(
      {
        "num": "007",
        "name": "squirtle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "water"
        ],
        "quick-move": [
          {
            "name": "bubble",
            "type": "water",
            "base-damage": "12",
            "energy": "14",
            "move-duration-seg": "1.2"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 10.8,
        "dps" : 10.0,
      }
    ),
    Object(
      {
        "num": "151",
        "name": "mew",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic"
        ],
        "quick-move": [
          {
            "name": "pound",
            "type": "normal",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          }],
        "eps" : 10.0,
        "dps" : 11.7,
    
      }
    ),
    Object (
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "quick-move": [
          {
            "name": "ember",
            "type": "fire",
            "base-damage": "10",
            "energy": "10",
            "move-duration-seg": "1"
          },
          {
            "name": "scratch",
            "type": "normal",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 9.0,
        "dps" : 11.0,
      }
    ));
    expect(received).toEqual(expected);
  });
  it('ordena correctamente de forma ascendente numeros al seleccionar una propiedad',() => {
    const received = sortData(data,'eps','ascendente');
    const expected = Array(Object (
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "quick-move": [
          {
            "name": "ember",
            "type": "fire",
            "base-damage": "10",
            "energy": "10",
            "move-duration-seg": "1"
          },
          {
            "name": "scratch",
            "type": "normal",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 9.0,
        "dps" : 11.0,
      }
    ),Object(
      {
        "num": "151",
        "name": "mew",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic"
        ],
        "quick-move": [
          {
            "name": "pound",
            "type": "normal",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          }],
        "eps" : 10.0,
        "dps" : 11.7,
    
      }
    ),Object(
      {
        "num": "007",
        "name": "squirtle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "water"
        ],
        "quick-move": [
          {
            "name": "bubble",
            "type": "water",
            "base-damage": "12",
            "energy": "14",
            "move-duration-seg": "1.2"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 10.8,
        "dps" : 10.0,
      }
    ));
    expect(received).toEqual(expected);
  });
  it('ordena correctamente de forma descendente numeros al seleccionar una propiedad',() => {
    const received = sortData(data,'eps','descendente');
    const expected = Array(Object(
      {
        "num": "007",
        "name": "squirtle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "water"
        ],
        "quick-move": [
          {
            "name": "bubble",
            "type": "water",
            "base-damage": "12",
            "energy": "14",
            "move-duration-seg": "1.2"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 10.8,
        "dps" : 10.0,
      }
    ),
    Object(
      {
        "num": "151",
        "name": "mew",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "mythic",
        "type": [
          "psychic"
        ],
        "quick-move": [
          {
            "name": "pound",
            "type": "normal",
            "base-damage": "7",
            "energy": "6",
            "move-duration-seg": "0.6"
          }],
        "eps" : 10.0,
        "dps" : 11.7,
    
      }
    ),
    Object (
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "quick-move": [
          {
            "name": "ember",
            "type": "fire",
            "base-damage": "10",
            "energy": "10",
            "move-duration-seg": "1"
          },
          {
            "name": "scratch",
            "type": "normal",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          }
        ],
        "eps" : 9.0,
        "dps" : 11.0,
      }
    ));
    expect(received).toEqual(expected);
  });
});

describe('change',()=>{
  it('is a function',() => {
    expect(typeof change).toBe('function');
  });
  it('calcula el eps correctamente',() => {
    const received = change(data[2]["quick-move"][0],"energy","move-duration-seg");
    const expected = "11.7";
    expect(received).toEqual(expected);

  });
});

describe('mean',()=>{
  it('is a function',() => {
    expect(typeof mean).toBe('function');
  });
  it('calcula el promedio de un array de numeros', () => {
    const received = mean([15.0,10.5,5.4]);
    const expected = 10.3;
    expect(received).toEqual(expected);

  });
});