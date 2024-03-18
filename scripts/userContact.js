function emailSend () {

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let link = document.getElementById('link').value;
  let message = document.getElementById('message').value;
  // console.log(`Имя: ${name}\nПочта: ${email}\nСайт: ${link}\nТекст: ${message})`)
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "csglobaloffensiveupgrade@gmail.com",
        Password : "1B7FA9A0CA114B17A747E10E0580F2DAE769",
        To : email,
        From : "csglobaloffensiveupgrade@gmail.com",
        Subject : "Обращение по форме обратной связи",
        Body : `
        <div style="
        font-family: system-ui;
        margin: 0 auto;
        max-width: 560px;
        padding: 40px;
        background-color: white;
        border-radius: 20px;
        transition: 0.3s;
        text-align: center;
        border: 1px solid rgba(180,198,204,0.66);
        border-radius: 17px;">
        <img src="https://i.yapx.cc/XPE0i.png" alt="logo" class="logo__item">
          <p style="color: black;
            font-size: 24px;
          ">Dear <b>${name}</b>, I received a message asking for help with your website (<span style="text-decoration: underline">${link}</span>). 
          You can see the verification code below. 
          I wwill contact you in a while. Best Wishes!</p>
          <hr style=" border: 2px black solid;
            width: 40%;">
            <p style="font-size: 24px;
            font-weight: bold;
            color: black;
          ">Philip Polevich</p>
          <p style="
            color: #bababd;
          ">Software Engineer</p>
        </div>
        `
    }).then(
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "csglobaloffensiveupgrade@gmail.com",
        Password : "1B7FA9A0CA114B17A747E10E0580F2DAE769",
        To : email,
        From : "csglobaloffensiveupgrade@gmail.com",
        Subject : "Обращение по форме обратной связи",
        Body :`<h1>You have a new member</h1>`
    })
    );
}