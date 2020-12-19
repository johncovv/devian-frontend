import Axios from 'axios';

import env from '../config/enviroment';

const { baseUrl } = env;

export default Axios.create({ baseURL: `${baseUrl}/api/client` });
