import { useState } from "react";
import { BtnPluss } from "./style";
import { TaskForm } from "../../components/new-task-form";
import CreateFormContainer from "../form-container";

export default function CreatePlussBtn() {

    const [show, setShow] = useState(false);

    return(
        <div>
            <BtnPluss onClick={() => {
                setShow(true);
            }}>
                <i className="fa-solid fa-plus"></i>
            </BtnPluss>
            { show && 
            <CreateFormContainer>
                <TaskForm>
                    {setShow}
                </TaskForm>
            </CreateFormContainer> 
            }
        </div>
    )
}