import { useSelector } from "react-redux";
import { PageWrap } from "../../components/pagewrapper/style";
import { useGetAllTasksQuery } from "../../features/tasksapi";

//UI
import TaskCards from "../../ui/cardswrap";
import TaskCard from "../../ui/cards";
import { CardsWrapp } from "../../ui/cardswrap/style";
import FlexWrap, { FlexWrapSpaceB } from "../../ui/flexbox";
import CreateCardBtn from "../../ui/newcardbtn";

const TasksPage = () => {

    const {items, status} = useSelector(state => state.tasks);
    const { data, error, isLoading } = useGetAllTasksQuery();
    console.log(data)
    return(
        <PageWrap>
            <FlexWrapSpaceB>
                <h1>Tasks</h1>
                <CreateCardBtn>Create new task <i className="fa-regular fa-pen-to-square"></i></CreateCardBtn>
            </FlexWrapSpaceB>
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