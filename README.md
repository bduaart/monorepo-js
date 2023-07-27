# Monorepo-JS

### 1. O que é esse projeto?
Este é um projeto monorepositório para a criação, manutenção e a publicação de pacotes NPM no Github Packages de escopo privado, em principal utilizando a dependência `lerna` e o Git Actions para automatizar o seu processo.

### 2. Como publicar ou instalar um pacote de escopo privado

#### 2.1 Requisitos necessários para a utilização

- Docker
- Recomendo estar com o seu NPM atualizado
- PAT (PERSONAL ACCESS TOKEN) Classic do GitHub
- .npmrc

##### 2.2 Criando um PAT(Personal Access Token) Classic no Github
* Para criar ou instalar um pacote desse projeto, é preciso gerar um PERSONAL ACCESS TOKEN no seu <a href=https://github.com/settings/tokens>perfil do GitHub</a>.
* Recomendo que também define a expiração para *NO EXPIRATION*
* Ele deverá ser um *personal access token (classic)* e deverá ter as seguintes permissões:
    - repo
      - repo:status
      - repo_deployment
      - public_repo
      - repo:invite
      - security_events
  - write:packages
      - read:packages
  - delete:packages
* Após isso, copie o arquivo .npmrc.dist e cole na raiz deste projeto ou do projeto que você consumirá a lib e substituia o *TOKEN* pelo seu PAT e o *@USER* pelo nome do seu usuário ou da organização.

#### 2.3 Criando arquivo .npmrc
* No projeto em que você vai consumir a lib, crie um arquivo *.npmrc* na raiz do projeto ou no nivel em que o package.json estiver e cole essa seguinte estrutura:
* Substitua TOKEN pelo seu PAT copiado
* Substitua USER pelo seu usuário do GitHub ou nome da organização
```
//npm.pkg.github.com/:_authToken=TOKEN
@USER:registry=https://npm.pkg.github.com
 ```

#### 2.4 Como criar um pacote novo
- Rodar o comando`lerna create nome-do-pacote`
- O pacote vai ser criado dentro do diretório `packages` e **deve referenciar** este repositório.
- O **nome** do pacote **deve** seguir o padrão *@USER/nome-pacote* ou *@ORGANIZATION/nome-pacote*

#### 2.5 Como publicar um pacote novo (processo automatizado com Git Actions)
- Antes de publicar o pacote, recomendo fortemente que escreva a documentação dele no **README.MD** do seu pacote.
- Deve ser criado uma branch seguindo o padrão *release-**X**.Y.Z* apontando para a branch **main** ou **master** onde o número X sempre **deverá** ser atualizado para todos os pacotes serem ATUALIZADOS e TAGEADOS juntos. Verifique a versão do *package.json* principal que está na raíz do projeto.
- **OBS: Sempre verifique se sua branch main/master está atualizada antes de fazer esse processo.**

#### 2.6 Como referenciar um pacote já existente dentro de um novo pacote
- No *package.json* do pacote novo que será utilizado, deverá ser adicionado uma dependência nova:
- ```"nome-do-pacote-a-ser-referenciado": "file:../nome-do-pacote""```
- **OBS:Não recomendo fazer isso fora do ambiente local, caso for o caso, recomendo instalar como uma dependência nova.**

### 3. Padrão de projeto

#### 3.1 Estrutura de Branch padrão GitFLOW
##### Qualquer branch ou commit fora desse padrão não conseguirá ser publicado nesse repositório.
* Branch
    * main (Produção, tagmento de versão e publicação da lib)
        * hotfix/ (Correções pontuais)
    * develop (Desenvolvimento)
        * feature/ (Desenvolvimento de novas funções)
        * bugfix/ (Correções de bugs)
        * improvement/ (Melhoria de algo existente)
    * release (Para publicação da lib)
        * A tag deve ser sempre manter o padrão **X**.Y.Z, onde o X sempre deverá ser o número a ser aumentado.
        * pacote de versão para teste a partir da branch `develop`, após testada será feito o merge na branch `main`

#### 3.2 Estrutura de Commits aceitos seguindo a [convenção de commits do GIT](https://www.conventionalcommits.org/en/v1.0.0/)
* Commits
  * feat: Novas features
  * fix: Correções
  * docs: Documentações como README, CHANGELOG, SWAGGER
  * style: Estilização
  * refactor: Refatoração de código
  * perf:  Perfomance de alguma configuração ou código
  * test: Testes
  * chore: Configuração ou setup de projeto, por exemplo: arquivos docker, build, package.json, make, scripts


### 4. **OBSERVAÇÕES**:

- O projeto está inteiro automatizado utilizando esteira de Git Actions e Workflows e também outros recursos como `.eslint`, `prettier`, `husky`, `commitlint` e `lint-staged`. É estritamente necessário que siga o padrão do projeto.

### 5. Lista de comandos

| COMANDOS                                                  | DESCRIÇÃO                                                        | 
|-----------------------------------------------------------|------------------------------------------------------------------|
| dcli npm install                                          | Para instalar o projeto                                          |
| dcli npm format:fix                                       | Para formatar código                                             |
| dcli npm lint:fix                                         | Para estruturar código                                           |
| dcli npm i nome-da-dependência                            | Para instalar uma nova dependência em comum entre todos os pacotes |
| dcli npm i nome-da-dependência --workspace nome-do-pacote | Para instalar uma nova dependência em um pacote específico       |
| lerna create nome-do-pacote                               | Para criar um novo pacote                                        |
| lerna publish major X.X.X --yes                           | Para publicar um novo pacote de forma manual                     |

