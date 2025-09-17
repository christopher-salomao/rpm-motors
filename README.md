# RPM Motors 🚗

Uma landing page moderna para oficina mecânica, desenvolvida como parte do curso Fullstack Pro do Sujeito Programador. Este projeto demonstra a integração de um CMS para gerenciamento de conteúdo dinâmico.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![SASS](https://img.shields.io/badge/SASS-1.60-CC6699?style=for-the-badge&logo=sass)
![Cosmic.js](https://img.shields.io/badge/Cosmic.JS-CMS-5C6BDB?style=for-the-badge)

## ✨ Funcionalidades

- **Landing Page Responsiva:** Design adaptado para todos os dispositivos
- **CMS Integrado:** Gerenciamento de conteúdo através do Cosmic JS
- **Conteúdo Dinâmico:** Atualizações de conteúdo sem necessidade de deplo
- **Ícones Modernos:** Utilizando Lucide React
- **Tipagem Estrita:** Desenvolvido com TypeScript para maior confiabilidade

## 🛠️ Tecnologias Utilizadas

- **Next.js 15:** Framework React com App Router
- **TypeScript:** Superset JavaScript com tipagem estática
- **SASS:** Pré-processador CSS para estilização avançada
- **Lucide Rea**ct: Biblioteca de ícones modernos
- **Cosmic JS:** CMS headless para gerenciamento de conteúdo

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Conta no [Cosmic.js](https://www.cosmicjs.com/)
- Chaves de API do Cosmic JS

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/christopher-salomao/rpm-motors.git
   cd rpm-motors
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env.local` na raiz do projeto.
   - Adicione suas chaves de API do Cosmic JS:

     ```env
     NEXT_PUBLIC_API_URL=sua_url_da_api
     NEXT_PUBLIC_URL=http://localhost:3000

     COSMIC_READ_KEY=sua_chave_de_leitura_do_cosmic
     COSMIC_WRITE_KEY=sua_chave_de_escrita_do_cosmic
     ```

4. Execute o projeto em desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
5. Abra http://localhost:3000 no seu navegador.

## 📦 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Compila o projeto para produção
- `start`: Inicia o servidor em modo produção

## 📱 Responsividade

O design da landing page é totalmente responsivo, garantindo uma ótima experiência para:

- Desktop
- Tablets
- Dispositivos móveis (smartphones)

## 🔌 Integração com Cosmic JS

O projeto demonstra a integração com Cosmic JS como CMS headless:

- Gerenciamento de conteúdo dinâmico
- Atualizações de conteúdo sem necessidade de deploy
- Interface amigável para administradores

## 📄 Licença

Este projeto foi desenvolvido para fins educativos e não possui fins comerciais.
