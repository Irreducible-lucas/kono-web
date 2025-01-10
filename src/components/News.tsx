import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api";

import styles, { layout } from "../styles";
import NewsCard from "./NewsCard";
import { NewsType} from "../types";
import moment from "moment";
const News = () => {
  const { data }: any = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews(),
  });

  return (
    <section className={` ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-3 mt-3  ">
        {data &&
          data
            .slice(0, 6)
            .map((news: NewsType) => (
              <NewsCard
                key={news.id}
                title={news.title}
                month={moment(news.createdAt).format("MMMM")}
                date={moment(news.createdAt).format("DD")}
                image={news.image}
                desc={news.description}
              />
            ))}
      </div>
    </section>
  );
};

export default News;
