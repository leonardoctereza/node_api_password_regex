# node_api_password_regex

API que valida se uma senha atende as seguintes regras: 

- Nove ou mais caracteres
- Ao menos 1 diito
- Ao menos 1 letra minúscula
- Ao menos 1 letra maiúscula
- Ao menos 1 caractere especial
- Considere como especial os seguintes caracteres: !@#$%^&*()-+
- Não possuir caracteres repetidos dentro do conjunto


# Instalar e executar o código

- Baixar o código
- Abrir um terminal dentro da pasta do código e digitar os seguintes comandos: 
   - npm install
   - npm start
  - O servidor será inicializado em localhost:3000
   
# Executar testes
 - Apos a instalação do código rodar o comando **npm test**
 
 # Requisições:
 
 - GET / :
    - Retorna status 200 "API OK"
 - GET /password/isValid
    - Body: { password: string}
    - Retorn: { isValid: boolean}
    - Possiveis status: 
      - 200 (Senha valida)
      - 400 (Senha invalida)
      - 500 (Erro)
