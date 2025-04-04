const fs = require('fs');
const path = require('path');

// Define the folder containing the images
const folderPath = '../public/images/projects/2024'; // Replace with your actual folder path

// Output file where the names will be stored
const outputFilePath = '../imageNames.js';

// Read files from the folder
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Filter .jpeg files and get their names
    const jpegFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg')
    .sort((a, b) => {
        // Extract numbers after "2024-" and compare
        const numA = parseInt(a.split('-')[1].split('.')[0]);
        const numB = parseInt(b.split('-')[1].split('.')[0]);
        return numA - numB;
    });

    // Create a JavaScript file content with the array of names
    const fileContent = `// This file is auto-generated. Do not edit manually.\n\nconst imageNames = ${JSON.stringify(jpegFiles, null, 2)};\n\nexport default imageNames;\n`;

    // Write the file
    fs.writeFile(outputFilePath, fileContent, (writeErr) => {
        if (writeErr) {
            console.error('Error writing file:', writeErr);
            return;
        }

        console.log(`File written successfully to ${outputFilePath}`);
    });
});
