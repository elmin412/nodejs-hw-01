import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);

        let newContacts = [];
        for(let i = 0; i < number; i += 1) {
            newContacts.push(createFakeContact());
        }
            dbData.contacts = dbData.contacts.concat(newContacts);
            await fs.writeFile(PATH_DB, JSON.stringify(dbData), 'utf-8');

        } catch (err) {
            console.error('Error', err);
        };
};

generateContacts(5);
