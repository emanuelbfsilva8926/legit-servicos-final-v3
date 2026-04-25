# 🚀 Legit Serviços - MVP v2.0

Marketplace de prestadores de serviço para Baixada Santista

## 📁 Estrutura do Projeto

```
legit-servicos/
├── index.html              # Página inicial (home)
├── styles.css              # Estilos globais
├── script.js               # Lógica da home + filtros
└── prestadores/            # 📂 Pasta de prestadores
    ├── carlos/
    │   ├── index.html      # Perfil do Carlos
    │   ├── perfil.css      # Estilos do perfil
    │   └── perfil.js       # WhatsApp + Galeria
    ├── maria/
    │   ├── index.html      # Perfil da Maria
    │   ├── perfil.css
    │   └── perfil.js
    └── joao/
        ├── index.html      # Perfil do João
        ├── perfil.css
        └── perfil.js
```

## ✨ Funcionalidades Implementadas

### ✅ FASE 1 - MVP Básico (COMPLETO!)

**Home Page:**
- Hero section com imagem e badge de verificação
- Proposta de valor clara
- Sistema de Filtro Triplo (Cidade + Bairro + Serviço)
- Cards de prestadores com link para perfis individuais
- Design 100% responsivo

**Páginas de Perfil:**
- Header com foto, badges (Verificado, Premium, Garantia)
- Rating e número de reviews
- Seção "Sobre o Profissional"
- Galeria de trabalhos (6 fotos com lightbox)
- Serviços prestados
- Avaliações de clientes
- **Botões WhatsApp funcionais** (2 botões por perfil)
- Informações (atendimento, horário, preço)
- Formas de pagamento

## 🎯 Prestadores Cadastrados

1. **Carlos** - Pintor
   - WhatsApp: 5513991234567
   - Local: São Paulo, SP
   - Rating: 4.9 ⭐

2. **Maria** - Faxineira/Limpeza
   - WhatsApp: 5513997654321
   - Local: Santos, SP
   - Rating: 4.8 ⭐

3. **João** - Pedreiro
   - WhatsApp: 5513998765432
   - Local: Praia Grande, SP
   - Rating: 5.0 ⭐

## 🚀 Como Usar

### 1. Abrir o projeto

Abra o arquivo `index.html` na raiz em qualquer navegador moderno.

### 2. Testar a navegação

- Na home, clique em **"Ver profissional"** em qualquer card
- Você será redirecionado para a pasta do prestador
- Teste os **botões WhatsApp** (abre com mensagem pré-formatada)
- Clique nas fotos da galeria (abre lightbox)

### 3. Adicionar novo prestador

**Passo a passo:**

#### 3.1. Crie a pasta
```bash
cd prestadores
mkdir nome-prestador
```

#### 3.2. Copie os arquivos de um prestador existente
```bash
cp carlos/* nome-prestador/
```

#### 3.3. Edite o `index.html`
- Mude o `<title>`
- Mude o `<h1>` com o nome
- Mude a foto (URL do Unsplash ou sua foto)
- Mude rating, reviews, localização
- Mude texto "Sobre o Profissional"
- Mude serviços prestados

#### 3.4. Edite o `perfil.js`
```javascript
const prestadorAtual = {
    nome: "NomePrestador",
    whatsapp: "5513999999999", // SEU NÚMERO AQUI
    mensagemPadrao: "Sua mensagem personalizada..."
};
```

#### 3.5. Adicione no `script.js` da raiz
```javascript
{
    id: 7,
    nome: "Nome do Prestador",
    categoria: "categoria",
    descricao: "Breve descrição...",
    cidade: "cidade",
    cidadeNome: "Nome da Cidade",
    bairro: "bairro",
    rating: 4.8,
    verificado: true,
    garantia: true,
    precoMedio: true,
    disponivel: true,
    imagem: "URL_IMAGEM",
    urlPage: "prestadores/nome-pasta/index.html" // ← IMPORTANTE!
}
```

## 📱 WhatsApp - Como Funciona

Cada prestador tem seu próprio número configurado em `perfil.js`:

```javascript
whatsapp: "5513999999999"
```

**Formato:**
- 55 = Brasil (DDI)
- 13 = DDD da sua região
- 999999999 = Número completo (9 dígitos)

**SEM espaços, hífens ou parênteses!**

Quando o usuário clica nos botões:
- ✅ Abre WhatsApp automaticamente
- ✅ Mensagem já pré-digitada
- ✅ Número correto do prestador

## 🎨 Paleta de Cores

- **Primary**: #0EA5E9 (Azul vibrante)
- **Secondary**: #1E293B (Azul escuro)
- **Success**: #10B981 (Verde - verificado)
- **Warning**: #F59E0B (Laranja - premium)
- **Info**: #4F46E5 (Roxo - garantia)

## 🌐 Deploy

### Opções Gratuitas:

**1. Vercel (Recomendado):**
```bash
# Instala Vercel CLI
npm i -g vercel

# Na pasta do projeto
vercel

# Pronto! Site online em 1 minuto
```

**2. Netlify:**
- Arraste a pasta inteira no https://app.netlify.com/drop
- Deploy instantâneo

**3. GitHub Pages:**
```bash
# Crie repositório
git init
git add .
git commit -m "Initial commit"
git remote add origin URL_DO_SEU_REPO
git push -u origin main

# Ative GitHub Pages nas configurações
```

## 📋 Próximos Passos (FASE 2)

### Curto Prazo (1-2 semanas)

- [ ] **Adicionar 20-30 prestadores reais**
- [ ] **Fotos profissionais** de cada prestador
- [ ] **Integração com API do WhatsApp** (envio automático)
- [ ] **Sistema de busca** por nome do prestador

### Médio Prazo (3-4 semanas)

- [ ] **Backend com Firebase**
  - Banco de dados Firestore
  - Autenticação
  - Upload de imagens
  
- [ ] **Dashboard do Prestador**
  - Login
  - Editar perfil
  - Ver estatísticas
  - Gerenciar galeria

- [ ] **Sistema de Avaliações Real**
  - Clientes podem avaliar
  - Moderação de reviews
  - Resposta do prestador

### Longo Prazo (2-3 meses)

- [ ] **Chat Interno** (opcional)
- [ ] **App Mobile** (React Native)
- [ ] **Sistema de Agendamento**
- [ ] **Pagamento Integrado**

## 🛠️ Tecnologias Usadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo (Grid/Flexbox)
- **JavaScript Vanilla** - Lógica e interatividade
- **Font Awesome** - Ícones
- **Unsplash** - Imagens de alta qualidade

## 💡 Dicas de Personalização

### Mudar cores:
```css
/* Em styles.css, linha 11 */
:root {
    --primary-color: #0EA5E9; /* Muda aqui */
}
```

### Adicionar categoria de serviço:
```javascript
// Em script.js, linha 63
<option value="nova-categoria">Nome da Categoria</option>
```

### Mudar fotos:
Use **Unsplash.com** para fotos gratuitas:
```
https://images.unsplash.com/photo-ID?w=400&h=300&fit=crop
```

## 📞 Suporte

**Dúvidas?**
- Abra as páginas no navegador
- Aperte F12 para ver o Console
- Qualquer erro vai aparecer lá

## 🔒 Segurança

**Números de WhatsApp:**
- Estão expostos no código (é proposital)
- Usuários precisam ver pra clicar
- Se quiser proteger, use backend + API

**Imagens:**
- Atualmente usa Unsplash (URLs públicas)
- Para produção, hospede suas próprias imagens

---

**Versão**: 2.0.0 (Estrutura com pastas)  
**Última atualização**: Abril 2026  
**Status**: ✅ MVP Funcional - Pronto para uso!

## 🎉 Próximo Nível

Quando tiver 50+ prestadores, considere:
- Migrar para React (componentes reutilizáveis)
- Backend Node.js + Express
- Banco MongoDB ou Firebase
- CI/CD automatizado

**Mas por agora: TESTE, VALIDE, ITERE!** 🚀
