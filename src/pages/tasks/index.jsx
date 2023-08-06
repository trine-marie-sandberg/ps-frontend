import { useSelector } from "react-redux";
import { useGetAllTasksQuery } from "../../features/tasksapi";
import { Link } from "react-router-dom";

//UI
import TaskCard from "../../ui/cards";
import { CardsWrapp } from "../../ui/cardswrap/style";
import FlexWrap, { FlexWrapSpaceB } from "../../ui/flexbox";
import CreatePrimaryBtn from "../../ui/btn-primary";
import PageWrapper from "../../ui/pagewrapper";
import CreatePlussBtn from "../../ui/btn-pluss";
import CreateSmallTab from "../../ui/tab-small";

const TasksPage = () => {

    const { data, error, isLoading } = useGetAllTasksQuery();

    return(
        <PageWrapper>
            <FlexWrapSpaceB>
                <h1>Tasks</h1>
                <CreatePlussBtn><i className="fa-solid fa-plus"></i></CreatePlussBtn>
            </FlexWrapSpaceB>
            <div>
                { isLoading ? <p>Loading</p> : error ? <p>error {error.data}</p> : (
                <>
                  <CardsWrapp>{data?.map(data => 
                  <div key={data._id.$oid}>
                    <FlexWrapSpaceB>
                        <CreateSmallTab>
                            <i className="fa-solid fa-trash"></i>
                        </CreateSmallTab>
                        <CreateSmallTab>
                        <i className="fa-solid fa-pen"></i>
                        </CreateSmallTab>
                    </FlexWrapSpaceB>
                    <Link to={`/task-details?id=${data._id.$oid}`}>
                      <TaskCard>
                          {data.deadline? <p><i className="fa-regular fa-clock"></i> {data.deadline}</p> : <p><i className="fa-regular fa-clock"></i> No deadline</p> }
                          <h2>{data.title}</h2>
                      </TaskCard>
                    </Link>
                  </div>  
                  )}
                  </CardsWrapp>
                </>
                )}
            </div>
        </PageWrapper>
    )
}

export default TasksPage;