import {TestDocument} from "../repo/testRepo";
import News from "./news";

export default class HomePageData{
    constructor(topTests: TestDocument[], tests: TestDocument[], news: News[]) {
        this.topTests = topTests;
        this.tests = tests;
        this.news = news;
    }

    topTests:TestDocument[];
    tests:TestDocument[];
    news:News[]
}