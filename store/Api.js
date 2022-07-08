import { observable, action } from 'mobx';
import axios from 'axios';

class Api {
    @observable BASE_URL = 'https://api4.bitlo.com/market/';
   
}

export default new Api();
