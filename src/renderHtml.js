function renderHtml(data) {
  let cards = "";

  for (d of data) {
    cards += renderCard(d);

  }

  const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>

    
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons"
    />

    <style>
        body{
    font-family: sans-serif;
}

h2{
    margin: 0px;
}

h3{
  margin: 0px;
}

#header{
    background-color: #e84655;
    color: white;
    text-align: center;
    line-height: 100px;
}

#content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    
}

.team-card {
    /* display: flex; */
    /* width: 25vw; */
    margin: 10px;
    /* padding: 7px; */
    box-shadow: 3px 3px 5px gray;
    background-color: #0077f7;
    border-radius: 3px;
    color: white;
}

.card-header{
    display: block;
    padding: 7px;

}

.card-body{
    display: block;
    /* width: 100%; */
    /* margin: 5px; */
    padding: 10px;
    background-color: lightgray;
    color: black;
}

.card-body-item{
    background-color: white;
    border: lightgray;
    border-width: 1px;
    border-style: solid;
    padding: 7px;
    white-space: pre;
}

.material-icons{
    font-size: 24px;
    padding: 3px;
    margin: 3px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .team-card{
    width: 95vw;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .team-card{
    width: 95vw;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .team-card{
    width: 40vw;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .team-card{
    width: 30vw;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .team-card{
    width: 25vw;
  }
}
    </style>
  </head>
  <body>
    <section id="header"><h1>My Team</h1></section>
    <section id="content">
      ${cards}
    </section>
  </body>
</html>

`;
  return template;
}

function renderCard(data) {
  const varData = {
    manager: `<div class="card-body-item"><strong>Office Number:</strong> ${data.officeNumber}</div>`,
    engineer: `<div class="card-body-item"><strong>GitHub:</strong> <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></div>`,
    intern: `<div class="card-body-item"><strong>School:</strong> ${data.school}</div>`,
  };

  const iconTitle = {
    manager:
      '<p><h3><span class="material-icons">coffee</span>Manager</h3></p>',
    engineer:
      '<p><h3><span class="material-icons">engineering</span>Engineer</h3></p>',
    intern: '<p><h3><span class="material-icons">school</span>Intern</h3></p>',
  };

  const cardTemplate = `
    <div class="team-card">
    <div class="card-header">
      <h2>${data.name}</h2>
      ${iconTitle[data.getRole().toLowerCase()]}    
    </div>
    <div class="card-body">
        <div class="card-body-item"><strong>ID:</strong> ${data.id}</div>
        <div class="card-body-item"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></div>
        ${varData[data.getRole().toLowerCase()]}
    </div>
    </div>
    `;

  return cardTemplate;
}

module.exports = renderHtml;
