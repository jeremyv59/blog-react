import { Form, Input, Button } from "antd";
import React, { useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import "../form/write-form.css";

const WriteForm = () => {
  const { TextArea } = Input;

  const [form] = Form.useForm();
  const context = useContext(BlogContext);

  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const sendArticle = () => {
    let finalData = [article, ...context.data];
    context.setData(finalData);
    form.submit();
    setArticle({
      title: "",
      body: "",
    });
  };

  return (
    <Form form={form} className=" container form_container">
      <h2>Ecrivez quelque chose...</h2>
      <Form.Item className="form_item">
        <h5>Nom :</h5>
        <Input
          placeholder="Renseigner votre nom"
          className="input_name"
          value={article.title}
          onInput={(e) => setArticle({ ...article, title: e.target.value })}
        ></Input>
      </Form.Item>
      <Form.Item className="form_item">
        <h5>Votre article :</h5>
        <TextArea
          value={article.body}
          placeholder="Ecrivez votre article..."
          rows={12}
          className="text_area"
          onInput={(e) => setArticle({ ...article, body: e.target.value })}
        ></TextArea>
      </Form.Item>
      <Form.Item>
        <Button onClick={sendArticle} className="btn">
          Envoyer l'article
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WriteForm;
