import fs from 'fs';
import path from 'path';

const filepath =path.join(process.cwd(), "public", "static", "data", "products.json");

export function getdata (){
const data =fs.readFileSync(filepath);
return (JSON.parse(data))
}