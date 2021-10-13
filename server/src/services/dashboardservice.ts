import { Service } from 'typedi';
import { DashBoardRepo } from '../repository/dashboardrepo';
import Logger from '../config/winstonlogger';


@Service()
export class DashBoardService {
    constructor(public DashBoardRepo: DashBoardRepo) { }
    async InsertAllTags(){
        return await this.DashBoardRepo.InsertAllTags()
    }

    async InsertTotalNum(){
        return await this.DashBoardRepo.InsertTotalNum()
    }

    async InsertAllPages(){
        return await this.DashBoardRepo.InsertAllPages()
    }

    async InsertAllAuthors(){
        return await this.DashBoardRepo.InsertAllAuthors()
    }

    async getLatestposts(num){
        return await this.DashBoardRepo.getLatestposts(num)
    }

    async getMonthChartposts(){
        return await this.DashBoardRepo.getMonthChartposts()
    }
}