import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import NearBy from "@/components/NearBy";
import Search from "@/components/Search";
import Testimonials from "@/components/Testimonials";
import Trending from "@/components/Trending";

export default function Home() {
    return (
        <main>
            <Banner />
            <Search />
            <Trending />
            <Destinations />
            <NearBy />
            <Testimonials />
        </main>
    )
}
