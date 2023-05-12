import customFetch from "./utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const useFetchTasks = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { isLoading, data, error, isError };
};

export const useCreateTask = () => {


  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      toast.success("task added");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { createTask, isLoading};
};

export const useEditTask = () => {
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

  return { editTask };
};

export const useDeleteTask = () => {
  const queryCLient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ taskId }) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryCLient.invalidateQueries("tasks");
      toast.success("task deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteTask };
};
