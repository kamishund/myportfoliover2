export default function sendmail(req, res) {
    let nodemailer = require("nodemailer");

    // 送信用アカウントの設定（ここではGmail）
    const transporter = nodemailer.createTransport({
      port: 465,
      service: 'gmail',
      auth: {
        user:  process.env.NEXT_PUBLIC_MAIL_USER,
        // Googleアカウントでアプリパスワードを取得して入れる
        pass: process.env.NEXT_PUBLIC_MAIL_PASS,
      },
      secure: true,
    });
  
    // 管理人に送るお問い合わせメッセージ通知メール
    const toHostMailData = {
      from: process.env.NEXT_PUBLIC_MAIL_USER,
      to: process.env.NEXT_PUBLIC_MAIL_USER,
      subject: `【お問い合わせ】${req.body.name}様より`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メッセージ】</p>
        <p>${req.body.message}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
      `,
    };
  
    // ゲストに送る自動受付メール
    const toGuestMailData = {
      from: 'sender@mail.com',
      // 入力されたゲストのメールアドレスが入る
      to: `${req.body.email}`,
      subject: `【お問い合わせ自動受付メール】`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `
        <p>
          お問い合わせありがとうございます。
          <br>以下の内容でお問い合わせを承りました。
        </p>
        <p>-----------------------------------------</p>
        <h2>お問い合わせ内容</h2>
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メッセージ】：</p>
        <p>${req.body.message}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>-----------------------------------------</p>
      `,
    };
  
    // 送信する
    transporter.sendMail(toHostMailData, function (err, info) {
     
      if (err) console.log(err);
      else console.log(info);
    });
    transporter.sendMail(toGuestMailData, function (err, info) {
     
      if (err) console.log(err);
      else console.log(info);
    });
  
    res.send('success');
  }