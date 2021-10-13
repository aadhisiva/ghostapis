
import { Service } from 'typedi';
import { LinksPageRepo } from '../repository/linkpagesrepo';
import Logger from '../config/winstonlogger';


@Service()
export class LinkPageService {
    constructor(public LinksPageRepo: LinksPageRepo) { }
    async fetchAllLinks(){
        return await this.LinksPageRepo.fetchAllLinks()
    }
}