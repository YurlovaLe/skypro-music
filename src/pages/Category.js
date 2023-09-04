import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();

  return (
    <div>
      <h1>Category{params.category}</h1>
    </div>
  );
}