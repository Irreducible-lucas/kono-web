import { New } from "../constants";
import styles, { layout } from "../styles";
import NewsCard from "./NewsCard";
const News = () => {
  return (
    <section className={` ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-3 mt-3  ">
        {New.slice(0, 6).map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            month={news.month}
            date={news.date}
            image={news.image}
            url={news.url}
            desc={news.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
