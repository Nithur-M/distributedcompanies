import path from "path";
import { promises as fs } from 'fs';

export async function getData() {
    const jsonDirectory = path.join(process.cwd(), 'data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/companies.json', 'utf8');
    //Return the content of the data file in json format
    //res.status(200).json(fileContents);
    const response = JSON.parse(fileContents);
    return response;
}

export default async function handler(req, res) {
    if (req.method === "POST"){
        
    }else {
        const jsonData = await getData();
        res.status(200).json(jsonData);
    }
}