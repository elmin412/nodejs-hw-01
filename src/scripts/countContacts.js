import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);

        return dbData.length;

    } catch (err) {
        console.error('Error', err );
    }
};

console.log(await countContacts());
