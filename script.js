const properties = []
let option

do {
    option = prompt(
        `Cadastro de Imóveis:\nQuantidade de imóveis cadastrados: ${properties.length}\n\nEscolha uma opção:\n1. Salvar novo imóvel\n2. Listar imóveis salvos\n3. Sair`
    )

    switch (option) {
        case '1':
            const property = {}

            property.owner = prompt("Digite o nome do proprietário:")
            property.bedrooms = parseInt(prompt("Digite a quantidade de quartos:"))
            property.bathrooms = parseInt(prompt("Digite a quantidade de banheiros:"))
            property.garage = confirm("O imóvel tem garagem?")

            const confirmSave = confirm(
                `Deseja salvar este imóvel?\n\nProprietário: ${property.owner}\nQuartos: ${property.bedrooms}\nBanheiros: ${property.bathrooms}\nGaragem: ${property.garage ? "Sim" : "Não"}`
            )

            if (confirmSave) {
                properties.push(property)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Imóvel descartado.")
            }
            break

            case '2':
                if (properties.length === 0) {
                    alert("Nenhum imóvel cadastrado.")
                } else {
                    let propertyList = "Lista de Imóveis Cadastrados:\n\n"
                    for (let i = 0; i < properties.length; i++) {
                        propertyList += `Imóvel ${i + 1}:\nProprietário: ${properties[i].owner}\nQuartos: ${properties[i].bedrooms}\nBanheiros: ${properties[i].bathrooms}\nGaragem: ${properties[i].garage ? "Sim" : "Não"}\n\n`
                    }
                    alert(propertyList)
                }
                break            

        case '3':
            alert("Encerrando o programa...")
            break

        default:
            alert("Opção inválida! Tente novamente.")
            break
    }
} while (option !== '3')
