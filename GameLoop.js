// /Engine/GameLoop.js

/**
 * Módulo GameLoop: Simula a execução principal do motor do jogo.
 * O Game Loop é o coração de qualquer motor, responsável por:
 * 1. Processar a entrada do usuário.
 * 2. Atualizar a lógica do jogo (scripts).
 * 3. Renderizar (desenhar) o quadro na tela.
 */

class GameLoop {
    constructor() {
        this.isRunning = false;
        console.log("GameLoop: Módulo de motor inicializado.");
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.loop();
            console.log("GameLoop: Inciando o ciclo principal de jogo.");
        }
    }

    stop() {
        this.isRunning = false;
        console.log("GameLoop: Ciclo principal de jogo parado.");
    }

    update(deltaTime) {
        // [Implementação futura] 
        // Aqui é onde os Scripts Lua/JS/Python seriam chamados para atualizar a lógica.
        // Processar input, física, e atualizar a posição dos Sprites.
    }

    render() {
        // [Implementação futura] 
        // Chamar o Renderer para desenhar a UI e os Sprites na área de preview.
    }

    loop(timestamp) {
        if (!this.isRunning) return;

        // Simulação do loop (seria requestAnimationFrame() na prática)
        const deltaTime = 0.016; // 60 FPS (aprox.)
        
        // 1. Atualiza a lógica
        this.update(deltaTime);
        
        // 2. Desenha na tela
        this.render();

        // Agendar o próximo quadro
        // setTimeout(() => this.loop(), 16); 
    }
}

// Exporta a classe para que o script.js principal possa usá-la.
// window.GameLoop = GameLoop; 
