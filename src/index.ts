import dataSource from "./db";
import app from "./app";

async function main() {
  try {
   
    await dataSource.initialize();

    
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (e) {
    console.error("Error initializing the server:", e);
  }
}

main();
