// --- Funções de Navegação (Hub <-> Editor) ---

// Função para abrir a caixa de diálogo "OPEN EDITOR?"
function openEditor() {
    const dialog = document.getElementById('open-editor-dialog');
    dialog.style.display = 'block';
}

// Função para fechar a caixa de diálogo
function closeDialog() {
    const dialog = document.getElementById('open-editor-dialog');
    dialog.style.display = 'none';
}

// Função para entrar na tela do Editor (clicando em YES no diálogo)
function enterEditor() {
    const hub = document.getElementById('hub-screen');
    const editor = document.getElementById('editor-screen');
    const dialog = document.getElementById('open-editor-dialog');

    // Esconde o Hub
    hub.classList.remove('active');
    // Mostra o Editor
    editor.classList.add('active');
    // Fecha o diálogo
    dialog.style.display = 'none';

    console.log("Abrindo o Cube Studio 2D Editor para Cube Dash...");
}

// Função para voltar para o Hub
function returnToHub() {
    const hub = document.getElementById('hub-screen');
    const editor = document.getElementById('editor-screen');

    // Mostra o Hub
    hub.classList.add('active');
    // Esconde o Editor
    editor.classList.remove('active');

    console.log("Retornando ao Hub.");
}

// --- Funções do Workspace (Botão '+') ---

// Função para mostrar/esconder o menu de adição
function toggleAddMenu() {
    const menu = document.getElementById('add-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Função principal para adicionar o elemento na lista (Workspace)
function addElement(type) {
    const hierarchy = document.getElementById('hierarchy-tree');
    let newItem = document.createElement('li');
    let elementClass = ''; 
    let elementName = '';

    // Define a classe e o nome baseado no tipo
    switch (type) {
        case 'SPRITE':
            elementClass = 'item-folder';
            elementName = 'New_Sprite';
            break;
        case 'SCREENUI':
            elementClass = 'item-ui'; 
            elementName = 'ScreenUI_New';
            console.warn("Elemento SCREENUI deve ser colocado dentro da pasta StarterUI.");
            break;
        case 'SCRIPT.lua':
            elementClass = 'item-script';
            elementName = 'New_Script.lua';
            break;
        case 'FOLDER':
            elementClass = 'item-folder';
            elementName = 'New_Folder';
            break;
        case 'TEXTUI':
            elementClass = 'item-ui';
            elementName = 'TextUI';
            break;
        case 'TOUCHUI':
            elementClass = 'item-ui';
            elementName = 'TouchUI';
            break;
        case 'IMAGEUI':
            elementClass = 'item-ui';
            elementName = 'ImageUI';
            break;
        default:
            elementClass = 'item-default';
            elementName = type;
    }
    
    // Constrói o elemento da lista
    newItem.className = elementClass;
    newItem.innerHTML = `<span>${elementName}</span>`; 

    // Adiciona o novo item ao final da lista
    hierarchy.appendChild(newItem);
    
    // Fecha o menu após a criação
    toggleAddMenu();

    console.log(`Novo elemento criado: ${type}`);
}

// --- Inicialização ---

// Garante que o diálogo está escondido e o Hub está visível ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a navegação
    closeDialog();
    document.getElementById('hub-screen').classList.add('active');
    document.getElementById('editor-screen').classList.remove('active');

    // Opcional: Fechar o menu '+' se o usuário clicar fora dele
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('add-menu');
        const btn = document.getElementById('add-element-btn');

        if (menu && menu.style.display === 'block' && event.target !== btn && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});
