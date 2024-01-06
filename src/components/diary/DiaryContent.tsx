
import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Test: FC = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/diary/20231226.md`)
      .then((m) => {
        return m.text();
      })
      .then((md) => {
        setMarkdown(md);
      });
  }, []);

  return (<ReactMarkdown>{markdown}</ReactMarkdown>);
};