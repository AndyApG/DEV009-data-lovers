/* eslint-disable no-case-declarations */
import { filterData,sortData,mean,change} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
const seccionShowAll = document.getElementById('showAll');
const menuOption = document.getElementById('mostrar');
const menuOrdenar = document.getElementById('ordenar');
const menuGeneration = document.getElementById('generation');

const vecEps = [];
const vecDps = [];

const pokemonCopy = pokemonList.map(x => x);

pokemonCopy.map(function(pokemon){

  vecEps.push(pokemon['quick-move'].map(attack =>change(attack,"energy","move-duration-seg")));
  vecDps.push(pokemon['quick-move'].map(attack =>change(attack,"base-damage","move-duration-seg")));

}) 
const vecMeansEps = vecEps.map(function(energies){
  return mean(energies);
})
const vecMeansDps = vecDps .map(function(damage){
  return mean(damage);
})
let i=0;
for (const pokemon of pokemonCopy){
  pokemon.eps = vecMeansEps[i];
  pokemon.dps = vecMeansDps[i];
  i++;
}

const display = (pokemonData)=>{
  
  const cardPokemon = document.createElement('div');
  cardPokemon.classList.add(`pokemon-card`);
  cardPokemon.classList.add(`${pokemonData.type[0]}`);
  const namePokemon = document.createElement('p');
  namePokemon.textContent = pokemonData.name;
  const numPokemon = document.createElement('p');
  numPokemon.textContent = pokemonData.num;
  const imgPokemon = document.createElement('img');
  imgPokemon.setAttribute('src',pokemonData.img);
  
  
  const epsdpsPokemon = document.createElement('p');
  epsdpsPokemon.textContent = `EPS : ${pokemonData.eps}, DPS : ${pokemonData.dps}`
  
  const typePokemon = document.createElement('p');
  typePokemon.textContent = `${pokemonData.type.join(',')}`;
   
  cardPokemon.appendChild(namePokemon);
  cardPokemon.appendChild(numPokemon);
  cardPokemon.appendChild(imgPokemon);
  cardPokemon.appendChild(typePokemon);
  cardPokemon.appendChild(epsdpsPokemon);
  seccionShowAll.appendChild(cardPokemon);

};
const cleanShowAll = () =>{
  while (seccionShowAll.hasChildNodes()){
    seccionShowAll.removeChild(seccionShowAll.firstChild);
  }

};

menuGeneration.addEventListener('change', () => {
  const choice = menuGeneration.options[menuGeneration.selectedIndex].value;
  location.href = '#mostrarPokemon';
  cleanShowAll();
  if (choice === "todos"){
    pokemonList.forEach(function(pokemon){
      display(pokemon);
    });
    menuOrdenar.addEventListener('change', ()=>{
      const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
      cleanShowAll();
      switch(ordenar){
      case 'ascendenteaz':
        sortData(pokemonList,'name','ascendente').forEach(function(pokemon){
          display(pokemon);
        });
        break;
      case 'descendenteza':
        sortData(pokemonList,'name','descendente').forEach(function(pokemon){
          display(pokemon);
        });
        break;
      case 'ascendenteeps':
        sortData(pokemonList,'eps','ascendente').forEach(function(pokemon){
          display(pokemon);
        });
        break;
      case 'descendenteeps':
        sortData(pokemonList,'eps','descendente').forEach(function(pokemon){
          display(pokemon);
        });
        break;
      case 'ascendentedps':
        sortData(pokemonList,'dps','ascendente').forEach(function(pokemon){
          display(pokemon);
        });
        break;
      case 'descendentedps':
        sortData(pokemonList,'dps','descendente').forEach(function(pokemon){
          display(pokemon);
        });
        break;
  
      default:
        pokemonList.forEach(function(pokemon){
          display(pokemon);
        });
  
      }
    });

    menuOption.addEventListener('change',
      function(){
        const selectedOption =menuOption.options[menuOption.selectedIndex].value;
        location.href = '#mostrarPokemon';
    
        cleanShowAll();
    
        switch(selectedOption){
           
        case 'mythic':

          const mythic = filterData(pokemonList,'mythic','pokemon-rarity')
       
          mythic.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(mythic,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(mythic,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(mythic,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(mythic,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(mythic,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(mythic,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;

            default:
              mythic.forEach(function(pokemon){
                display(pokemon);
              });

            }
            
      
        
          });
      
          break;
         
    
        case 'legendary':

          const legendary = filterData(pokemonList,'legendary','pokemon-rarity');
          legendary.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(legendary,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(legendary,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(legendary,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(legendary,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(legendary,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(legendary,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              legendary.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
      
          break;

        case 'normal':  
          const normal = filterData(pokemonList,'normal','pokemon-rarity');
          normal.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(normal,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(normal,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(normal,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(normal,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(normal,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(normal,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              normal.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
          break;

        default:  
          pokemonList.forEach(function(pokemon){
            display(pokemon);
          });
      
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(pokemonList,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(pokemonList,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(pokemonList,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(pokemonList,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(pokemonList,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(pokemonList,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              pokemonList.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
          break;
        
        }
    
      }
    );


  }else if(choice === "generation i"){

    const generationi = pokemonList.filter(i => i.generation.num === "generation i");
    generationi.forEach(function(pokemon){
      display(pokemon);
    });
    menuOption.addEventListener('change',
      function(){
        const selectedOption =menuOption.options[menuOption.selectedIndex].value;
        location.href = '#mostrarPokemon';
    
        cleanShowAll();
    
        switch(selectedOption){
           
        case 'mythic':

          const mythic = filterData(generationi,'mythic','pokemon-rarity')
       
          mythic.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(mythic,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(mythic,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(mythic,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(mythic,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(mythic,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(mythic,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;

            default:
              mythic.forEach(function(pokemon){
                display(pokemon);
              });

            }
            
      
        
          });
      
          break;
         
    
        case 'legendary':

          const legendary = filterData(generationi,'legendary','pokemon-rarity');
          legendary.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(legendary,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(legendary,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(legendary,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(legendary,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(legendary,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(legendary,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              legendary.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
      
          break;

        case 'normal':  
          const normal = filterData(generationi,'normal','pokemon-rarity');
          normal.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(normal,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(normal,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(normal,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(normal,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(normal,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(normal,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              normal.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
          break;

        default:  
          generationi.forEach(function(pokemon){
            display(pokemon);
          });
      
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(generationi,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(generationi,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(generationi,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(generationi,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(generationi,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(generationi,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              generationi.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
          break;
        
        }
    
      }
    );

  }else{
    const generationii = pokemonList.filter(i => i.generation.num === "generation ii");
    generationii.forEach(function(pokemon){
      display(pokemon);
    });
    menuOption.addEventListener('change',
      function(){
        const selectedOption =menuOption.options[menuOption.selectedIndex].value;
        location.href = '#mostrarPokemon';
    
        cleanShowAll();
    
        switch(selectedOption){
           
        case 'mythic':

          const mythic = filterData(generationii,'mythic','pokemon-rarity')
       
          mythic.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(mythic,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(mythic,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(mythic,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(mythic,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(mythic,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(mythic,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;

            default:
              mythic.forEach(function(pokemon){
                display(pokemon);
              });

            }
            
      
        
          });
      
          break;
         
    
        case 'legendary':

          const legendary = filterData(generationii,'legendary','pokemon-rarity');
          legendary.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(legendary,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(legendary,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(legendary,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(legendary,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(legendary,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(legendary,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              legendary.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
      
          break;

        case 'normal':  
          const normal = filterData(generationii,'normal','pokemon-rarity');
          normal.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(normal,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(normal,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(normal,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(normal,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(normal,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(normal,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              normal.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
          break;

        default:  
          generationii.forEach(function(pokemon){
            display(pokemon);
          });
      
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            switch(ordenar){
            case 'ascendenteaz':
              sortData(generationii,'name','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteza':
              sortData(generationii,'name','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendenteeps':
              sortData(generationii,'eps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendenteeps':
              sortData(generationii,'eps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'ascendentedps':
              sortData(generationii,'dps','ascendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
            case 'descendentedps':
              sortData(generationii,'dps','descendente').forEach(function(pokemon){
                display(pokemon);
              });
              break;
  
            default:
              generationii.forEach(function(pokemon){
                display(pokemon);
              });
  
            }
      
        
          });
          break;
        
        }
    
      }
    );
  }
}
);
