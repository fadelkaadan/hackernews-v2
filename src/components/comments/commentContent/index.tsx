interface Props {
  text: string;
}

const CommentContent: React.FC<Props> = ({ text }) => {
  const stringToHTML = (str: string) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body.innerHTML;
  };
  return (
    <div
      style={{ overflowWrap: "anywhere" }}
      className="text-xs"
      dangerouslySetInnerHTML={{ __html: stringToHTML(text) }}
    ></div>
  );
};

export default CommentContent;