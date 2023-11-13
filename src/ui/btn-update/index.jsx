import { useState } from "react";
import { BtnUpdate } from "./style";
import { TaskForm } from "../../components/update-task-form";
import CreateFormContainer from "../form-container";

export default function CreateUpdateBtn(props) {

    const [show, setShow] = useState(false);
    const originalTask = props.children;
    
    return(
        <div>
            <BtnUpdate onClick={() => {
                setShow(true);
           
            }}>
                <i className="fa-solid fa-pen"></i>
            </BtnUpdate>
            { show && 
            <CreateFormContainer>
                <TaskForm>
                    {setShow}
                    {originalTask}
                </TaskForm>
            </CreateFormContainer> 
            }
        </div>
    )
}