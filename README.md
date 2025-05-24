# 🌐 YouTube Video Downloader (Web)

Este é um **cliente web** desenvolvido com **React** que permite baixar vídeos do YouTube a partir de um link ou ID, se conectando a uma API backend que utiliza `yt-dlp`. Essa aplicação foi construída como uma extensão da [versão mobile](https://github.com/newthiagoassisk8/youtube-video-downloader), com foco no aprendizado de desenvolvimento front-end com React para web.

## 🚀 Funcionalidades

- 📥 Entrada de URL para baixar vídeos do YouTube.
- 📊 Exibição de progresso durante o processo de download.
- ✅ Feedback visual sobre o status do download.
- 🔗 Integração com uma API REST para manipulação do download (via `yt-dlp`).

## 🔁 Versão Mobile

Se você está procurando a versão para **dispositivos móveis**, confira o repositório abaixo:

📱 [YouTube Video Downloader - React Native](https://github.com/newthiagoassisk8/youtube-video-downloader)

## 📡 Backend da Aplicação

A API utilizada por ambas as versões está disponível neste repositório:

🔧 [https://github.com/newthiagoassisk8/ytb-api](https://github.com/newthiagoassisk8/ytb-api)

## 🛠️ Tecnologias Utilizadas

- **React (Vite ou Create React App)**
- **TypeScript**
- **React Router DOM** (caso haja navegação entre páginas)
- **Axios** para requisições HTTP
- **CSS Modules** ou **Tailwind CSS** para estilização

## 📸 Demonstração

![Demonstração da versão web](demoVideo/youtubeVideoDownloaderReact.gif)

## ⚙️ Como rodar o projeto

```bash
# Instale as dependências
npm install

# Rode o projeto
npm start
