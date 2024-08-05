import React from "react";
import NovelAreaItem from "./NovelAreaItem";

const NovelArea = () => {
  const blog_items = [
    {
      url: "https://www.wattpad.com/1186115136-soulless-persona-prologue",
      src: "/img/blog/h2_blog_img01.jpg",
      tag: "By Tatsuhiko",
      title: "Prologue",
      desc: `Back when tigers used to smoke, and the raptors but myth. Woke up a man with much to remember as the number of stars before the explosion.`,
    },
    {
      url: "https://www.wattpad.com/1186443489-soulless-persona-who%27s-who",
      src: "/img/blog/h2_blog_img02.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 1 : Who's Who",
      desc: `A city they reached, Libertalia it was named. Spoke "Dastan" - but why his name figured and nothing else he remembered - "something alluring in those narrow streets".`,
    },
    {
      url: "https://www.wattpad.com/1186856000-soulless-persona-heaven%27s-gate",
      src: "/img/blog/h2_blog_img03.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 2 : Heaven's gate",
      desc: `As Dastan dragged his foot through the harsh desert to heracleion, each step filled with thoughts to make the road easily forgettable and so he marched for 2 days only for his souls to relax a few minutes in between`,
    },
    {
      url: "https://www.wattpad.com/1400630936-soulless-persona-forbidden-entrance",
      src: "/img/blog/h2_blog_img04.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 3 : Forbidden Entrance",
      desc: `

      From the depths of the chamber, Dastan gazed upon a massive gate leading to the heart of Heracleion. The barrier stood imposingly, giving no hint of an entry point or a way to signal those within`,
    },
    {
      url: "https://www.wattpad.com/1401368520-soulless-persona-heracleion",
      src: "/img/blog/h2_blog_img05.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 4 : Heracleion",
      desc: `As Dastan stepped through the gate, the world transformed around him, revealing the fabled city of Heracleion. The air hummed with an otherworldly energy`,
    },
    {
      url: "https://www.wattpad.com/1413317881-soulless-persona-wonder-of-us",
      src: "/img/blog/h2_blog_img06.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 5 : Wonder Of Us",
      desc: `A full day's search led Dastan to the elusive Witch's House, its location concealed in the labyrinthine alleys of Heracleion. As he approached, the air hung heavy with anticipation`,
    },
    {
      url: "https://www.wattpad.com/1424613346-soulless-persona-the-veil-of-wisdom",
      src: "/img/blog/h2_blog_img07.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 6 : The Veil of Wisdom",
      desc: `With the Oracle's enigmatic guidance echoing in his mind, Dastan emerged from the Witch's House into the moonlit streets of Heracleion. The city seemed to pulsate with a newfound energy, its ancient secrets whispering in the night breeze.`,
    },
    {
      url: "https://www.wattpad.com/1424613553-soulless-persona-the-labyrinth-of-shadows",
      src: "/img/blog/h2_blog_img08.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 7 : The Labyrinth of Shadows",
      desc: `As Dastan ventured forth from the Sanctum of Ages, the weight of newfound knowledge settled upon his shoulders like a heavy cloak. The Council of Elders' guidance had illuminated the path before him, yet the journey ahead remained shrouded in uncertainty. With determination burning in his heart, he set his sights on the next leg of his quest.`,
    },
    {
      url: "https://www.wattpad.com/1424613673-soulless-persona-the-echoes-of-eternity",
      src: "/img/blog/h2_blog_img09.jpg",
      tag: "By Tatsuhiko",
      title: "Chapter 8 : The Echoes of Eternity",
      desc: `As Dastan emerged from the depths of the labyrinth, he found himself standing on the precipice of a vast expanse, stretching out before him like a canvas painted with the echoes of eternity. The air hummed with a palpable energy`,
    },
  ];

  return (
    <section className="blog-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title text-center mb-60">
              <span className="sub-title">My Novel</span>
              <h2 className="title">Read My Latest Story</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <NovelAreaItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NovelArea;
