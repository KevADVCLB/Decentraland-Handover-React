import {loadSheet} from './fetchSheet.mjs';
import fs from 'fs';

const fetchCopy = async () => {

    const res = await loadSheet('1DCwRypTUfqnkMk7GtIEHBZG1uJ4sSCUZdwTuGgjXf3k', 'copy')

    let rows = res.data.values;
    // console.log(rows)
    const CONT_COL = 10;

    if (rows) {
        const content = {}

        rows.splice(0, 7);
        const KEY_INDEX = 1;
        const ENTRY_INDEX = 9;
        rows.forEach(row => {
            content[row[KEY_INDEX]] = row[ENTRY_INDEX];
        })

        fs.writeFile('./content/content-copy.json', JSON.stringify(content), (err) => {
            if (err) throw err
            console.log('Data written to file')
        })

    } else {
        throw new Error('No copy')
    }
}

fetchCopy()
