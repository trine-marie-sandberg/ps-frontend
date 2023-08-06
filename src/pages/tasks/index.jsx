import { useSelector } from "react-redux";
import { useGetAllTasksQuery } from "../../features/tasksapi";
import { Link } from "react-router-dom";

//UI
import TaskCard from "../../ui/cards";
import { CardsWrapp } from "../../ui/cardswrap/style";
import FlexWrap, { FlexWrapSpaceB } from "../../ui/flexbox";
import CreatePrimaryBtn from "../../ui/btn-primary";
import PageWrapper from "../../ui/pagewrapper";

const TasksPage = () => {

    const { data, error, isLoading } = useGetAllTasksQuery();

    return(
        <PageWrapper>
            <FlexWrapSpaceB>
                <h1>Tasks</h1>
                <CreatePrimaryBtn>Create new task <i className="fa-regular fa-pen-to-square"></i></CreatePrimaryBtn>
            </FlexWrapSpaceB>
            <div>
                { isLoading ? <p>Loading</p> : error ? <p>error {error.data}</p> : (
                <>
                  <CardsWrapp>{data?.map(data => 
                    <Link to={`/task-details?id=${data._id.$oid}`} key={data._id.$oid}>
                      <TaskCard>
                          {data.deadline? <p><i className="fa-regular fa-clock"></i> {data.deadline}</p> : <p><i className="fa-regular fa-clock"></i> No deadline</p> }
                          <h2>{data.title}</h2>
                      </TaskCard>
                    </Link>
                  )}
                  </CardsWrapp>
                </>
                )}
            </div>
        </PageWrapper>
    )
}

export default TasksPage;