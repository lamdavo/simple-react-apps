import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  const queryCLient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => 
       customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryCLient.invalidateQueries("tasks");
      toast.success("task edited");
    }, 
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ taskId}) => 
       customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryCLient.invalidateQueries("tasks");
      toast.success("task deleted");
    }, 
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="single-item">
      <input type="checkbox" checked={item.isDone} onChange={() => editTask({taskId:item.id, isDone:!item.isDone})} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask({taskId:item.id})}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
