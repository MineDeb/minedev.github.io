
function emailSend () {
  let verificationCode = Math.round(Math.random() * 10000);
  let codeMessage = `<h2 style="color: #e8aa00">Your Verification Code is ${verificationCode}</h2>`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "csglobaloffensiveupgrade@gmail.com",
        Password : "1B7FA9A0CA114B17A747E10E0580F2DAE769",
        To : 'philmillioner@gmail.com',
        From : "csglobaloffensiveupgrade@gmail.com",
        Subject : "This is the subject",
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
        <img src="https://d1ulolibll5lbi.cloudfront.net/n66ecp%2Fpreview%2F56609790%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1710706096&Signature=J7OAxuGo~ae3aMh9dFoPynlhMZOA7ZozGjytLW0LQwsReAY8fTpXe~xpbJHZoRdccdKvKeraWVf2JzaQfnDp94txmvp3FoxJh7bcsI8ARV~-fjoSWX-LKXCWoSXBOFNnYxwLqw0ikniwDJbTsGF-KBPL~iJWsNyzbnXmAQIw~u-nYoar-rzttmct5uukWuQCNZuG6ehvEZsBnpa5tVaHXrbyevq7kjVoUH3tWEnKBfpUML~-1-jfdqIVSNxWEVn54wb8cpH74dtqtBTn2B1V8TpxxAxWrr1iLcca9D9kWWiAncv~HyPJyzvyV~RbTdZ6DjQIeMV7Hf0ZNqcH6P70OQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="logo" class="logo__item">
          <p style="color: black;
            font-size: 24px;
          ">I have received your message. 
          You can see the verification code below. 
          Please copy it and go to the website to paste it into the input window</p>
          <hr style=" border: 2px black solid;
            width: 40%;">
            <p style="font-size: 24px;
            font-weight: bold;
            color: black;
          ">Philip Polevich</p>
          <p style="
            color: #bababd;
          ">Software Engineer</p>
          ${codeMessage}
        </div>
        `
    });
}