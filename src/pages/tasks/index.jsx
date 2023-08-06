import { useSelector } from "react-redux";
import { PageWrap } from "../../components/pagewrapper/style";
import { useGetAllTasksQuery } from "../../features/tasksapi";

const TasksPage = () => {

    const {items, status} = useSelector(state => state.tasks);
    const { data, error, isLoading } = useGetAllTasksQuery();
    console.log(data)
    return(
        <PageWrap>
            <h1>Tasks</h1>
            <div>
                { isLoading ? <p>Loading</p> : error ? <p>error {error.data}</p> : (
                <>
                  <div>{data?.map(data => 
                  <div key={data._id}>
                    <h2>{data.title}</h2>
                    <p>test</p>
                  </div>
                  )}
                  </div>
                </>
                )}
            </div>
        </PageWrap>
    )
}

export default TasksPage;