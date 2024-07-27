const { prompt } = require("enquirer");

createAdmin();

async function createAdmin() {
    const admin = {};
  
    const questions = [
      { type: "input", name: "username", message: "Enter username: " },
      { type: "password", name: "password", message: "Enter password: " },
    ];
  
    const prompt_return = await prompt(questions);
  
    admin.username = prompt_return.username;
    admin.password = prompt_return.password;
  
    try {
      console.log(`Admin user "${admin.username}" created successfully`);
    } catch (error) {
      if (error.message.includes("duplicate key error")) {
        console.log(`Username "${admin.username}" is already taken.`);
      } else console.log(error.message);
    }
  }