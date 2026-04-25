// ========================================
// DADOS DOS PRESTADORES DE SERVIÇO
// Agora importados de dados-prestadores.js
// ========================================

// ========================================
// FUNÇÃO PARA RENDERIZAR CARDS
// ========================================
function renderizarCards(dadosFiltrados = prestadores) {
    const grid = document.getElementById('servicos-grid');
    
    if (dadosFiltrados.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--gray-500);">Nenhum prestador encontrado com esses filtros. Tente outras opções.</p>';
        return;
    }
    
    grid.innerHTML = dadosFiltrados.map(prestador => `
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
}

// ========================================
// FUNÇÃO PARA ATUALIZAR BAIRROS
// ========================================
function atualizarBairros() {
    const cidadeSelect = document.getElementById('cidade-select');
    const bairroSelect = document.getElementById('bairro-select');
    const cidadeSelecionada = cidadeSelect.value;
    
    // Limpa os bairros
    bairroSelect.innerHTML = '<option value="">Selecione o bairro</option>';
    
    // Se tem cidade selecionada, adiciona os bairros
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
// FUNÇÃO DE FILTRO
// ========================================
function filtrarPrestadores() {
    const cidade = document.getElementById('cidade-select').value;
    const bairro = document.getElementById('bairro-select').value;
    const servico = document.getElementById('servico-select').value;
    
    let resultados = prestadores;
    
    // Filtra por cidade
    if (cidade) {
        resultados = resultados.filter(p => p.cidade === cidade);
    }
    
    // Filtra por bairro (se não for "todos")
    if (bairro && bairro !== 'todos') {
        resultados = resultados.filter(p => p.bairro === bairro);
    }
    
    // Filtra por tipo de serviço
    if (servico) {
        resultados = resultados.filter(p => p.categoria === servico);
    }
    
    // Renderiza os resultados
    renderizarCards(resultados);
    
    // Scroll suave para os resultados
    document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Renderiza todos os cards inicialmente
    renderizarCards();
    
    // Listener para mudança de cidade
    document.getElementById('cidade-select').addEventListener('change', atualizarBairros);
    
    // Listener para o botão de pesquisa
    document.getElementById('btn-pesquisar').addEventListener('click', filtrarPrestadores);
    
    // Permite filtrar ao pressionar Enter nos selects
    ['cidade-select', 'bairro-select', 'servico-select'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filtrarPrestadores();
            }
        });
    });
});

// ========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
