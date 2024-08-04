import axios from "axios";
import React, { useEffect, useState } from "react";
import { INews } from "../../types";

const News = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [value, setValue] = useState<string>("");
  const getNews = async (str:string) => {
    let res = await axios.get(
      `https://newsapi.org/v2/everything?q=${str}&from=2024-07-04&sortBy=publishedAt&apiKey=aec160a4a838430f963252fc2d2dbe69`
    );
    let { articles } = res.data;
    setNews(articles);
    console.log(articles, "data");
  };

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getNews(value);
    }
  };

  useEffect(() => {
    getNews(value);
  }, []);

  return (
    <div className="my-[40px]">
      <div className="container">
        <center>
          <h1>News</h1>
        </center>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onKeyDown={(e) => handleInput(e)}
          value={value}
          type="text"
          placeholder="News"
          className="my-[30px] border-2 border-black placeholder:text-black"
        />

        <div className="flex items-start flex-wrap gap-5">
          {news.map((el) => (
            <div className="w-[300px]">
              <img src={el.urlToImage} alt="" className="w-[300px] h-[300px]" />
              <h1 className="text-[20px]">{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
