import { PageWrap } from "../../components/pagewrapper/style";
import { useGetAllTasksQuery } from "../../features/tasksapi";

const TasksPage = () => {
    
    const { data, error, isLoading } = useGetAllTasksQuery()
    return(
        <PageWrap>
            <h1>Tasks</h1>
        </PageWrap>
    )
}

export default TasksPage;