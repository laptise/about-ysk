import { FormEvent, useEffect, useRef, useState } from "react";
import { Layout } from "../components/header";
import styles from "../styles/Dev.module.scss";

const helpText = `
  clear : すべて削除    skills : スキルセット表示`;
const skills = `
TypeScript JavaScript SQL React.js Next.js Firebase Nest.js GraphQl C#`;

const npm = `npmは使えません!`;
const commands: { [key: string]: string } = {
  help: helpText,
  "?": helpText,
  skills,
  npm,
};

const Dev = () => {
  useEffect(() => {
    document.body.dataset.page = "code";
  }, []);
  const [values, setValues] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const ta = useRef<HTMLTextAreaElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = `visitor $ ${value}`;
    let newValues = [...values, newValue];
    switch (value) {
      case "clear":
        newValues = [];
        break;
      default:
        if (commands[value]) {
          newValues.push(`system > ${commands[value]}`);
        } else {
          newValues.push(`system > 存在しないコマンドです。'help'を入力してコマンドを確認してください`);
        }
        break;
    }
    setValues(newValues);
    setValue("");
  };
  useEffect(() => {
    ta.current!.scrollTop = ta.current!.scrollHeight;
  }, [values]);
  return (
    <Layout>
      <h1>Welcome Dev !</h1>
      <form onSubmit={onSubmit}>
        <div id={styles.hello}>
          <div className={styles.header}>
            Jobs
            <div className={styles.buttons}>
              <button style={{ backgroundColor: "#cb3e3e" }} />
              <button style={{ backgroundColor: "#2a8a17" }} />
            </div>
          </div>
          <textarea ref={ta} value={values.join("\n")} style={{ whiteSpace: "pre", lineHeight: 1.5 }} className={styles.body} readOnly></textarea>
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="ここにコマンドを入力..." />
        </div>
      </form>
    </Layout>
  );
};

export default Dev;
