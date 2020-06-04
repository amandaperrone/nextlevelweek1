function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    // outro modo de escrever seria:
    // .then( res => res.json() )
    .then( (res) => { return res.json() })
    .then( states => {

        for( const state of states ) {
            // a = a + 2 
            // é o mesmo que
            // a += 2
            ufSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`

    citySelect.innerHTML = "<option value>Selecione a cidade.</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}

document
    .querySelector("select[name=uf]")
    // () => {} arrow function
    .addEventListener("change", getCities )

// Itens de coleta

// Pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target    

    // Adicionar ou remover uma classe
    // Se já tem, remove. Se não tem, adiciona.
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
  
    // Verificar se existem itens selecionados.
    // Se sim, pegar os selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item === itemId // Output: true ou false
        return itemFound
    })

    // Se já estiver selecionado, tirar da seleção
    if(alreadySelected >=0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        
        selectedItems = filteredItems
    
    } else { // Se não tiver selecionado, adicionar à seleção
        selectedItems.push(itemId)
    }
    // Atualizar o campo hidden com os itens selecionados
    collectedItems.value = selectedItems

}