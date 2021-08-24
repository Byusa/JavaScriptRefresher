import { getUsefulContents } from '/modules/file.js';

getUsefulContents('https://github.com/Byusa/PublicData/blob/master/example_1.json',
    data => { doSomethingUseful(data); });