import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';


export const addOneContact = async () => {};

try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dbData = JSON.parse(data);

    const newContact = createFakeContact();
    dbData.contacts = dbData.contacts.concat(newContact);
    
    await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2), 'utf-8');
} catch (err) {
    console.error('Error', err );
    
}
await addOneContact();
