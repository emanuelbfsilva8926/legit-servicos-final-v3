// ========================================
// DADOS IMPORTADOS DE dados-prestadores.js
// ========================================

// ========================================
// CONFIGURAÇÕES DE PAGINAÇÃO
// ========================================
const CARDS_POR_PAGINA = 5;
let paginaAtual = 1;
let prestadoresFiltrados = [...prestadores]; // Mostra TODOS por padrão

// ========================================
// FUNÇÃO PARA RENDERIZAR CARDS
// USA O MESMO LAYOUT DO SCRIPT.JS (HOME)
// ========================================
function renderizarProfissionais() {
    const grid = document.getElementById('profissionais-grid');
    
    // Calcula início e fim
    const inicio = (paginaAtual - 1) * CARDS_POR_PAGINA;
    const fim = inicio + CARDS_POR_PAGINA;
    const prestadoresPagina = prestadoresFiltrados.slice(inicio, fim);
    
    if (prestadoresFiltrados.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray-500); font-size: 1.125rem;">Nenhum profissional encontrado com esses filtros. Tente outras opções.</p>';
        return;
    }
    
    // USA O MESMO HTML DOS CARDS DA HOME
    let cardsHTML = prestadoresPagina.map(prestador => `
        <div class="servico-card">
            <div class="card-header">
                <img src="${prestador.imagem}" alt="${prestador.nome}">
                ${prestador.disponivel ? '<div class="disponivel-badge">Disponível Agora</div>' : ''}
            </div>
            <div class="card-body">
                <h3 class="card-title">${prestador.nome}</h3>
                <div class="card-rating">
                    <span class="rating-stars">★</span>
                    <span class="rating-value">${prestador.rating}</span>
                    <span style="color: var(--gray-400);">♡</span>
                </div>
                <p class="card-description">${prestador.descricao}</p>
                <div class="card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${prestador.cidadeNome}</span>
                </div>
                <div class="card-badges">
                    ${prestador.verificado ? '<span class="badge badge-verificado"><i class="fas fa-check-circle"></i> Verificado</span>' : ''}
                    ${prestador.garantia ? '<span class="badge badge-garantia"><i class="fas fa-shield-alt"></i> Garantia</span>' : ''}
                    ${prestador.precoMedio ? '<span class="badge badge-preco"><i class="fas fa-dollar-sign"></i> Preço Médio</span>' : ''}
                </div>
                <button class="card-action" onclick="window.location.href='${prestador.urlPage}'">Ver profissional</button>
            </div>
        </div>
    `).join('');
    
    // Card CTA na última página
    const totalPaginas = Math.ceil(prestadoresFiltrados.length / CARDS_POR_PAGINA);
    if (paginaAtual === totalPaginas && prestadoresPagina.length < CARDS_POR_PAGINA) {
        cardsHTML += `
            <div class="card-cta">
                <h3>Seja um Profissional</h3>
                <p>Aumente sua renda e conquiste novos clientes agora mesmo.</p>
                <button class="btn-cadastrar" onclick="alert('Funcionalidade de cadastro em breve!')">Cadastrar meu Perfil</button>
            </div>
        `;
    }
    
    grid.innerHTML = cardsHTML;
    renderizarPaginacao();
    
    // Scroll suave pro topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// RENDERIZAR PAGINAÇÃO
// ========================================
function renderizarPaginacao() {
    const paginacaoDiv = document.getElementById('paginacao');
    const totalPaginas = Math.ceil(prestadoresFiltrados.length / CARDS_POR_PAGINA);
    
    if (totalPaginas <= 1) {
        paginacaoDiv.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Botão anterior
    html += `<button class="paginacao-btn" onclick="mudarPagina(${paginaAtual - 1})" ${paginaAtual === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;
    
    // Páginas
    if (totalPaginas <= 7) {
        for (let i = 1; i <= totalPaginas; i++) {
            html += `<button class="paginacao-btn ${i === paginaAtual ? 'active' : ''}" onclick="mudarPagina(${i})">${i}</button>`;
        }
    } else {
        html += `<button class="paginacao-btn ${1 === paginaAtual ? 'active' : ''}" onclick="mudarPagina(1)">1</button>`;
        html += `<button class="paginacao-btn ${2 === paginaAtual ? 'active' : ''}" onclick="mudarPagina(2)">2</button>`;
        html += `<button class="paginacao-btn ${3 === paginaAtual ? 'active' : ''}" onclick="mudarPagina(3)">3</button>`;
        html += '<span class="paginacao-dots">...</span>';
        html += `<button class="paginacao-btn ${totalPaginas === paginaAtual ? 'active' : ''}" onclick="mudarPagina(${totalPaginas})">12</button>`;
    }
    
    // Botão próximo
    html += `<button class="paginacao-btn" onclick="mudarPagina(${paginaAtual + 1})" ${paginaAtual === totalPaginas ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;
    
    paginacaoDiv.innerHTML = html;
}

// ========================================
// MUDAR PÁGINA
// ========================================
function mudarPagina(novaPagina) {
    const totalPaginas = Math.ceil(prestadoresFiltrados.length / CARDS_POR_PAGINA);
    
    if (novaPagina < 1 || novaPagina > totalPaginas) return;
    
    paginaAtual = novaPagina;
    renderizarProfissionais();
}

// ========================================
// ATUALIZAR BAIRROS
// ========================================
function atualizarBairros() {
    const cidadeSelect = document.getElementById('cidade-select');
    const bairroSelect = document.getElementById('bairro-select');
    const cidadeSelecionada = cidadeSelect.value;
    
    bairroSelect.innerHTML = '<option value="">Selecione o bairro</option>';
    
    if (cidadeSelecionada && bairrosPorCidade[cidadeSelecionada]) {
        bairrosPorCidade[cidadeSelecionada].forEach(bairro => {
            const option = document.createElement('option');
            option.value = bairro.toLowerCase().replace(/ /g, '-');
            option.textContent = bairro;
            bairroSelect.appendChild(option);
        });
    }
}

// ========================================
// FILTRAR PRESTADORES
// ========================================
function filtrarPrestadores() {
    const cidade = document.getElementById('cidade-select').value;
    const bairro = document.getElementById('bairro-select').value;
    const servico = document.getElementById('servico-select').value;
    
    // Se nenhum filtro, mostra TODOS
    if (!cidade && !bairro && !servico) {
        prestadoresFiltrados = [...prestadores];
    } else {
        prestadoresFiltrados = prestadores.filter(p => {
            let match = true;
            
            if (cidade) match = match && p.cidade === cidade;
            if (bairro && bairro !== 'todos') match = match && p.bairro === bairro;
            if (servico) match = match && p.categoria === servico;
            
            return match;
        });
    }
    
    paginaAtual = 1;
    renderizarProfissionais();
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Renderiza TODOS por padrão
    renderizarProfissionais();
    
    document.getElementById('cidade-select').addEventListener('change', atualizarBairros);
    document.getElementById('btn-pesquisar').addEventListener('click', filtrarPrestadores);
    
    ['cidade-select', 'bairro-select', 'servico-select'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') filtrarPrestadores();
        });
    });
});
