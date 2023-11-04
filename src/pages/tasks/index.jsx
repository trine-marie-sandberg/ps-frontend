import { useGetAllTasksQuery } from "../../features/tasksapi";
import { Link } from "react-router-dom";
import { TaskDelete, tasksFetch } from "../../features/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//UI
import TaskCard from "../../ui/cards";
import { CardsWrapp } from "../../ui/cardswrap/style";
import FlexWrap, { FlexWrapSpaceB } from "../../ui/flexbox";
import PageWrapper from "../../ui/pagewrapper";
import CreatePlussBtn from "../../ui/btn-pluss";
import CreateSmallTab from "../../ui/tab-small";
import { BtnHideStyle } from "./style";

const TasksPage = () => {
    //const { data, error, isLoading } = useGetAllTasksQuery();
    const tasks = useSelector(state => state.tasks);
    //FORTSETT: https://www.youtube.com/watch?v=uRoJJKJMbXQ&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=12 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tasksFetch());
    }, []);
    function handleDelete(id) {
        dispatch(TaskDelete(id))
    }
    //For demo app👇
    // const [ storedTasks, setStoredTasks ] = useState([]);
    // const getStoredTasks = {...localStorage};
    // let objectKeys = Object.keys(getStoredTasks);
    // let loopArray = [];
    // useEffect(() => {
    //     for(let i = 0; i < objectKeys.length; i++) {
    //         loopArray.push(JSON.parse(localStorage.getItem(objectKeys[i])));
    //     }
    //     setStoredTasks(loopArray);
    // }, [])
    //👆
    return(
        <PageWrapper>
            <FlexWrapSpaceB>
                <h1>Tasks</h1>
                <CreatePlussBtn>
                </CreatePlussBtn>
            </FlexWrapSpaceB>
            <div>
                { tasks.loading ? <p>Loading</p> : tasks.error ? <p>error {error.data}</p> : (
                <div>
                  <CardsWrapp>{tasks.tasks?.map(data => 
                  <div key={data._id.$oid}>
                    <FlexWrapSpaceB>
                        <BtnHideStyle
                          onClick={() => handleDelete(data._id.$oid)}
                        >
                            <CreateSmallTab>
                                <i className="fa-solid fa-trash"></i>
                            </CreateSmallTab>
                        </BtnHideStyle>
                        <BtnHideStyle>
                            <CreateSmallTab>
                            <i className="fa-solid fa-pen"></i>
                            </CreateSmallTab>
                        </BtnHideStyle>
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
                </div>
                )}
            </div>
            {/* For demo app👇 */}
            {/* <CardsWrapp>
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
            </CardsWrapp> */}
            {/* 👆 */}
        </PageWrapper>
    )
}

export default TasksPage;