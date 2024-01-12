import RateLimit from "@/components/RateLimit";
import Footer from "@/components/footer";
import Search from "@/components/Search";
import { useGetRateLimitQuery } from "@/redux/services/githubApi";

function Home() {
  return (
    <main className="h-full flex-wrap pt-12">
      <RateLimit />
      {/* <Search /> */}
      <Footer />
    </main>
  );
}

export default Home;
