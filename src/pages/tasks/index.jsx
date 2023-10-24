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
import { FormContainer } from "../../ui/form-container/style";
import { TaskForm } from "../../components/new-task-form";
import SetVisibility from "../../components/visibility";
import { useEffect, useState } from "react";

const TasksPage = () => {

    const { data, error, isLoading } = useGetAllTasksQuery();
    //For demo app👇
    const [ storedTasks, setStoredTasks ] = useState([]);
    const getStoredTasks = {...localStorage};
    let objectKeys = Object.keys(getStoredTasks);
    let loopArray = [];
    useEffect(() => {
        for(let i = 0; i < objectKeys.length; i++) {
            loopArray.push(JSON.parse(localStorage.getItem(objectKeys[i])));
        }
        setStoredTasks(loopArray);
    }, [])
    //👆
    return(
        <PageWrapper>
            <FlexWrapSpaceB>
                <h1>Tasks</h1>
                <CreatePlussBtn>
                </CreatePlussBtn>
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
            {/* For demo app👇 */}
            <CardsWrapp>
                {storedTasks.map(data => 
                <div key={Date.now() + Math.random()}>
                    <FlexWrapSpaceB>
                        <CreateSmallTab>
                            <i className="fa-solid fa-trash"></i>
                        </CreateSmallTab>
                        <CreateSmallTab>
                        <i className="fa-solid fa-pen"></i>
                        </CreateSmallTab>
                    </FlexWrapSpaceB>
                    <Link to={`/task-details?id=${data.stamp}`}>
                      <TaskCard>
                          {data.deadline? <p><i className="fa-regular fa-clock"></i> {data.deadline}</p> : <p><i className="fa-regular fa-clock"></i> No deadline</p> }
                          <h2>{data.title}</h2>
                      </TaskCard>
                    </Link>
                </div>
                )}
            </CardsWrapp>
            {/* 👆 */}
        </PageWrapper>
    )
}

export default TasksPage;