
import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";


const Items = () => {
const {isLoading, data, error, isError} = useFetchTasks();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
