import { useSelector } from "react-redux";
import { PageWrap } from "../../components/pagewrapper/style";
import { useGetAllTasksQuery } from "../../features/tasksapi";
import TaskCards from "../../ui/cardswrap";
import TaskCard from "../../ui/cards";
import { CardsWrapp } from "../../ui/cardswrap/style";

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
                  <CardsWrapp>{data?.map(data => 
                  <TaskCard key={data._id.$oid}>
                    <h2>{data.title}</h2>
                    <p>{data._id.$oid}</p>
                  </TaskCard>
                  )}
                  </CardsWrapp>
                </>
                )}
            </div>
        </PageWrap>
    )
}

export default TasksPage;