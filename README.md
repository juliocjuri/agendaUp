![logo do AgendaUp](assets/logo.png)
---
O AgendaUp é um projeto criado com o intuito de auxiliar os usuários a marcar compromissos e a criar convites de reuniões. Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- React
- NodeJS
- MongoDB
- Vite
- Express
- Nginx

O deploy deste projeto foi realizado pela AWS, e pode ser encontrado em: http://54.146.233.205:5000/. O repositório possui uma pipeline com o Github Actions para automatizar o processo de atualização da aplicação que roda na instância EC2 da AWS

As principais features do projeto são: 

- Agendamento de compromissos e reuniões
- Serviço de email para convite 
- Visualização dos compromissos criados por mim e por outros

---
## Descritivo de desenvolvimento

O projeto possui duas aplicações principais:

- App: código que se utiliza de um servidor para servir a aplicação React
- Backend: api de conexão com o MongoDB

![logo do AgendaUp](assets/pm2-view.png)

Para compilar este projeto em ambiente de desenvolvimento, será necessário fazer apenas um ajuste:

No arquivo app/frontend/src/services/services.js, mude o apontamento da api para localhost. Assim, você poderá utilizá-lo em ambiente local

Após isso, dê o comando npm install dentro das pastas:

     backend
     app
     app/frontend

Depois, inicie os dois serviços (api e frontend)

     cd backend
     npm run dev

     cd app/frontend
     npm run dev
