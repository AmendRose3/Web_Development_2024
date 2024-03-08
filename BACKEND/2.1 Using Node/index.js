const fs=require("fs");//filesystem module is imported

// fs.writeFile("Msg.txt","Everything is possible through him",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

  fs.readFile("Msg.txt","utf8",(err, data) => {
    if (err) throw err;
    // const fileContents = data.toString(); // Convert the data buffer to a string and store it in a variable
    console.log(data);
  });
