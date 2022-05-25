
### Clone este projeto

```bash
git clone https://github.com/laerthnardelli/devprofile-rn.git
```

Esse projeto, é referente ao curso ministrado pelo professor **[Jorge Aluizio Alves de Souza](https://www.aluiziodeveloper.com.br/)** 

**[Link do Curso](https://www.udemy.com/course/react-native-typescript/)**

O projeto desse curso tem como finalidade via consumo da `api-node-devprofile`:
O cadastro de usuário, login, logout, recuperação a senha via e-mail(ethereal.email), alterar os dados perfil após logado, e listar os demais usuários cadastros no banco de dados e suas respetivas informações.

Tecnologias Utilizadas:<br/>

* React Native<br/>
* Expo Bare Workflow<br/>
* ContextAPI<br/>
* Typescript<br/>
* Styled Component<br/>
* React Hook Form<br/>
* Axios<br/>
* EsLint<br/>
* Prettier<br/>
* Editorconfig<br/>

## Run app mobile

Abra a pasta `devprofile` e instale as dependências:

```bash
npm install

# OU

yarn add
```

Crie um arquivo de variáveis de ambiente `.env`, usar o exemplo `.env.example` e preencha conforme o seu ambiente de desenvolvimento.

Após essa instalação execute a aplicação em ambiente de desenvolvimento devidamente configurado, através do comando `expo start`.


## Run API Node.js

Abra a pasta `api-node-devprofile` e instale as dependências:

```bash
npm install

# OU

yarn add
```

Crie um arquivo de variáveis de ambiente `.env`, usar o exemplo `.env.example` e preencha conforme o seu ambiente de desenvolvimento.

Essa api está configurado para usar o banco de dados SQLite. É preciso rodar as migrações e criar as tabelas e toda a estrutura do banco de dados:

```bash
npm run typeorm migration:run

# OU

yarn typeorm migration:run
```

Execute a aplicação com o comando:

```bash
npm run dev

# OU

yarn dev
```

O servidor estará em execução no endereço `http://localhost:3333`.


## Imagens do projeto<br>

![devprofile 01](https://user-images.githubusercontent.com/54412289/170298333-948c89bf-56f4-4a6f-8346-d899b5bf5460.jpeg)
![devprofile 02](https://user-images.githubusercontent.com/54412289/170298344-dcfb478d-acaa-429f-a493-7f6f52cd8d6e.jpg)
![devprofile 03](https://user-images.githubusercontent.com/54412289/170298346-151005b4-fddd-4a14-9829-17dad1a396b2.jpg)
![devprofile 04](https://user-images.githubusercontent.com/54412289/170298348-73a7b204-296b-4d70-baa1-7cecadcdcb2e.jpg)
![devprofile 05](https://user-images.githubusercontent.com/54412289/170298353-127fa550-ec8e-491b-b594-603f03cc1179.jpg)
![devprofile 06](https://user-images.githubusercontent.com/54412289/170298355-64b83bc6-bd05-47d2-948e-30575d5703d2.jpg)
