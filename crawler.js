const fs = require('fs');
const cheerio = require('cheerio');

function parseTensorflowDocs(filePath) {
    console.log('Reading file:', filePath);
    
    // Read the JSON file
    let data;
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(fileContent);
        console.log('JSON parsed successfully');
    } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return;
    }

    // Extract the HTML content
    const htmlContent = data[0]?.html;
    if (!htmlContent) {
        console.error('No HTML content found in the JSON');
        return;
    }
    console.log('HTML content extracted');

    // Parse the HTML content
    const $ = cheerio.load(htmlContent);
    console.log('HTML parsed with cheerio');

    // Find all function names
    const functions = $('h3')
        .filter((_, elem) => $(elem).text().includes('tf.node.'))
        .map((_, elem) => $(elem).text().trim())
        .get();

    console.log(`Found ${functions.length} functions`);

    // Extract detailed information for each function
    const functionDetails = {};
    functions.forEach(func => {
        const section = $(`h3:contains("${func}")`);
        if (section.length) {
            const description = section.next('p').text().trim();
            const params = [];
            const paramSection = section.nextAll('h4:contains("Parameters:")').first();
            if (paramSection.length) {
                paramSection.next('ul').find('li').each((_, elem) => {
                    params.push($(elem).text().trim());
                });
            }
            let returns = '';
            const returnsSection = section.nextAll('h4:contains("Returns:")').first();
            if (returnsSection.length) {
                returns = returnsSection.next('p').text().trim();
            }
            functionDetails[func] = { description, parameters: params, returns };
        }
    });

    return { functions, functionDetails };
}

// Use the function
const filePath = 'https://js.tensorflow.org/api_node/4.20.0/'; // Replace with your actual file path
const result = parseTensorflowDocs(filePath);

if (result) {
    const { functions, functionDetails } = result;

    // Print the results
    console.log("Functions found:", functions.length);
    functions.forEach(func => console.log(`- ${func}`));

    console.log("\nDetailed information:");
    Object.entries(functionDetails).forEach(([func, info]) => {
        console.log(`\n${func}`);
        console.log(`Description: ${info.description}`);
        console.log("Parameters:");
        info.parameters.forEach(param => console.log(`  - ${param}`));
        console.log(`Returns: ${info.returns}`);
    });
} else {
    console.log("Failed to parse the document");
}