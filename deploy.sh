#!/usr/bin/env sh

# Aborta em caso de erros
set -e

# Compila a aplicação (cria a pasta 'dist')
npm run build

# Navega para o diretório de produção
cd dist

# Inicia um novo repositório Git
git init
git add -A
git commit -m 'deploy'

# Envia o conteúdo da pasta 'dist' para o branch 'gh-pages' do seu repositório remoto
# Substitua <USERNAME> e <REPO> pelos seus dados
git push -f git@github.com:AAdriane/rda.git master:gh-pages

# Volta para o diretório original
cd -