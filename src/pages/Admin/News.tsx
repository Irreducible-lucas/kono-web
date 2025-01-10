import { fetchNews } from "@/src/api";
import { search, Spinner } from "@/src/assets";
import { NavHeader, NewsCard, AddNews } from "@/src/components/Admin";
import NewsPreview from "@/src/components/Admin/NewsPreview";
import styles from "@/src/styles";
import { NewsType } from "@/src/types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const News = () => {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const filtered = news?.filter((news: NewsType) =>
      news?.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchText, news]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-white">
        <img src={Spinner} className="h-8 w-8" alt="" />
        <p>Loading data...</p>
      </div>
    );
  }

  if (isError) {
    return <div>Sorry, error occured while fetching data</div>;
  }
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white">
        <NavHeader title="News" />
        <div className="flex gap-8 py-6">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search news"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddNews />
        </div>
      </div>

      {/* Projects Section */}
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid lg:grid-cols-4 gap-3">
          <div className="lg:col-span-3">
            {filteredNews?.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-5">
                {filteredNews?.map((news: any) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(news)}
                    key={news.id}
                  >
                    <NewsCard data={news} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white h-[300px] w-full grid place-items-center">
                <p className="text-center text-blue-700">No News found</p>
              </div>
            )}
          </div>
          <NewsPreview news={selectedItem} setSelectedNews={setSelectedItem} />
        </div>
      </div>
    </div>
  );
};

export default News;
