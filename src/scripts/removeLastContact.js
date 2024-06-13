import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dbData = JSON.parse(data);

    if(dbData.contacts &&  dbData.contacts.length > 0) {
        dbData.contacts.pop();

        await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2), 'utf-8');
    }

    } catch (err) {
        console.error('Error', err);
    };
    };

await removeLastContact();
