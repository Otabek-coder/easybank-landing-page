import React from "react";
import Articles from "../components/Articles";
import styles from "../styles/Grid.module.css";
import CareerData from "../data/blog.json";

export default function Article() {
  const blog = CareerData.map((item) => {
    return (
      <Articles
        key={item.id}
        title={item.title}
        text={item.text}
        image={item.image}
        author={item.author}
      />
    );
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Articles</h1>
      <div>
        <div className={styles.blog}>{blog}</div>
      </div>
    </div>
  );
}