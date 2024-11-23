interface Props {
  id: string;
}

const User: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default User;
