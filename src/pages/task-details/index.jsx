import { useGetAllTasksQuery, useGetSingleTaskQuery } from "../../features/tasksapi";
import { Link, useSearchParams } from "react-router-dom";
import PageWrapper from "../../ui/pagewrapper";
import { useSelector } from "react-redux";


export default function TaskDetails() {
    const [searChParams] = useSearchParams();
    const id = searChParams.get('id');
    const { data, error, isLoading } = useGetSingleTaskQuery(id);
    console.log(data)
    return(
        <PageWrapper>
          <Link to={"/tasks"}>Back</Link>
            <div>
                {isLoading ? <p>loading</p> : error ? <p>error {error.data}</p> : 
                <>
                  <h1>{data.title}</h1>
                  <p>Deadline: {data.deadline}</p>
                  <p>Author: {data.author}</p>
                  <p>Category: {data.category}</p>
                  <h2>Description</h2>
                  <div>
                    <p>{data.descriptions}</p>
                  </div>
                </>
                }
            </div>
        </PageWrapper>
    )
}