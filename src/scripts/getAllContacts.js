import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);
        return dbData.contacts;


    } catch (err) {
        console.error('Error', err );
        return [];
    }
};

console.log(await getAllContacts());
