import {delay} from 'utils/frames';

const getData = async () => {
  await delay(1000);
  return [{name: 'Nammmm'}, {name: 'Nu'}];
};
export default {
  getData,
};
