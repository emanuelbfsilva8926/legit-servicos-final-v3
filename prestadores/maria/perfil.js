// ========================================
// DADOS DO PRESTADOR - MARIA
// ========================================
const prestadorAtual = {
    nome: "Maria",
    whatsapp: "5513997654321", // MUDE AQUI PRO NÚMERO REAL
    mensagemPadrao: "Olá Maria! Vi seu perfil no Legit Serviços e gostaria de solicitar um orçamento para limpeza."
};

// ========================================
// FUNÇÃO PARA ABRIR WHATSAPP
// ======================================== 
function abrirWhatsApp() {
    const numero = prestadorAtual.whatsapp;
    const mensagem = encodeURIComponent(prestadorAtual.mensagemPadrao);
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    
    window.open(url, '_blank');
    
    console.log('WhatsApp aberto:', {
        prestador: prestadorAtual.nome,
        numero: numero,
        timestamp: new Date().toISOString()
    });
}

// ========================================
// GALERIA - LIGHTBOX SIMPLES
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const galeriaItems = document.querySelectorAll('.galeria-item img');
    
    galeriaItems.forEach((img, index) => {
        img.addEventListener('click', function() {
            abrirLightbox(this.src, index);
        });
    });
});

function abrirLightbox(imagemSrc, index) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-container">
            <button class="lightbox-close" onclick="fecharLightbox()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${imagemSrc}" alt="Trabalho ${index + 1}">
            <div class="lightbox-info">
                <p>Foto ${index + 1} de ${document.querySelectorAll('.galeria-item').length}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    const style = document.createElement('style');
    style.textContent = `
        .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .lightbox-container {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-container img {
            max-width: 100%;
            max-height: 85vh;
            border-radius: 0.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .lightbox-close {
            position: absolute;
            top: -50px;
            right: 0;
            background: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            color: #1E293B;
            transition: all 0.3s ease;
        }
        
        .lightbox-close:hover {
            background: #F1F5F9;
            transform: scale(1.1);
        }
        
        .lightbox-info {
            text-align: center;
            color: white;
            margin-top: 1rem;
            font-size: 0.875rem;
        }
    `;
    
    if (!document.querySelector('#lightbox-styles')) {
        style.id = 'lightbox-styles';
        document.head.appendChild(style);
    }
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            fecharLightbox();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharLightbox();
        }
    });
}

function fecharLightbox() {
    const lightbox = document.querySelector('.lightbox-overlay');
    if (lightbox) {
        lightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            lightbox.remove();
        }, 300);
    }
}

const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);

// ========================================
// BOTÃO "VER TUDO" DA GALERIA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const btnVerTudo = document.querySelector('.btn-ver-tudo');
    
    if (btnVerTudo) {
        btnVerTudo.addEventListener('click', function() {
            alert('Funcionalidade de galeria completa em desenvolvimento!');
        });
    }
});

// ========================================
// SMOOTH SCROLL
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

// ========================================
// ANIMAÇÃO DE SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.perfil-section-box, .sidebar-card');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
});
