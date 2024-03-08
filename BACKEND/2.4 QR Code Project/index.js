import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image'; // Import qr-image module

inquirer
  .prompt([
    {
      message: "Type your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' }); // Generate QR code image
    qr_svg.pipe(fs.createWriteStream('url.png')); // Save the QR code image as url.png
    console.log("QR code image generated successfully!");
    fs.writeFile(url,(err) => {
            if (err) throw err;
            console.log('URL SAVED');
          });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
