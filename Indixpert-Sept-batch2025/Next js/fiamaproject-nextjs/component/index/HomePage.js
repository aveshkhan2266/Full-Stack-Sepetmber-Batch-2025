"use client";
import { Fragment } from "react";
import HeroSlider from "./HeroSilder";
import FeatureSection from "./FeatureSection";
import NewItem from "./NewItem";
import { banners1, banners2 } from "../../data/bannerdata";
import BannerSection from "./BannerSection";
import TopProduct from "./TopProduct";
import LatestNews from "./LatestNews";

function Home() {
    return (
        <Fragment>
            <HeroSlider />
            <FeatureSection />
            <BannerSection banners={banners1} />
            <NewItem />
            <BannerSection banners={banners2} largeBanner />
            <TopProduct />
            <LatestNews />
        </Fragment>
    );
}

export default Home;