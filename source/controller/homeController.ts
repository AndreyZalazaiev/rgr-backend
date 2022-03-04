import express from "express";
import TestRepo from "../repo/testRepo";
import testRepo from "../repo/testRepo";
import HomePageData from "../model/homePageData";

export const getHomeData = (async (req: express.Request, res: express.Response) => {
    const test = await TestRepo.find();
    const homePageData = new HomePageData(test.slice(1), test, news);
    res.send(homePageData);
})


export const news = [
    {
        title: 'Новость №1',
        desc: 'Описание новости №1'
    },
    {
        title: 'Новость №2',
        desc: 'Описание новости №2'
    },
    {
        title: 'Новость №3',
        desc: 'Описание новости №3'
    },
    {
        title: 'Новость №4',
        desc: 'Описание новости №4'
    },
]