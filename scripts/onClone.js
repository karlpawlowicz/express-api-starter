const fs = require('fs');
const path = require('path');

// Remove the .git directory
try {
  fs.rmdirSync(path.join(__dirname, '../.git'), { recursive: true });
} catch (error) {
  // eslint-disable-next-line
  console.error(error);
}

// Remove the logs/.gitkeep file
try {
  fs.unlinkSync(path.join(__dirname, '../logs/.gitkeep'));
} catch (error) {
  // eslint-disable-next-line
  console.error(error);
}

// Rename the .env.example file to .env
try {
  fs.renameSync(
    path.join(__dirname, '../.env.example'),
    path.join(__dirname, '../.env')
  );
} catch (error) {
  // eslint-disable-next-line
  console.error(error);
}
