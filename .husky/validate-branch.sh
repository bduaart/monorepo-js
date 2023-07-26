#!/bin/bash
# Extrai o nome da branch remota a ser criada
remote_branch=$(git rev-parse --abbrev-ref HEAD)
# Verifica se o nome da branch segue o padrão 'tipo/funcionalidade'
if echo "$remote_branch" | grep -qE '^(bugfix|feature|hotfix|improvement)/[^/]+$'; then
    exit 0
fi
# Verifica se o nome da branch segue o padrão 'release-X.X.X'
if echo "$remote_branch" | grep -qE '^release-[0-9]+\.[0-9]+\.[0-9]+$'; then
    exit 0
fi
echo "Erro: o nome da branch não segue nenhum dos padrões suportados. (bugfix/feature/hotfix/improvement) ou (release-X.X.X)."
exit 1