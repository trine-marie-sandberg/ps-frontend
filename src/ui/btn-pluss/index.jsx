import { useState } from "react";
import { FormContainer } from "../form-container/style";
import { BtnPluss } from "./style";
import { TaskForm } from "../../components/new-task-form";
import CreateFormContainer from "../form-container";

export default function CreatePlussBtn() {
    const [show, setShow] = useState(false);

    return(
        <BtnPluss onClick={() => {
            setShow(true);
        }}>
            {
            show === true ? 
            <CreateFormContainer id="form-container">
                <TaskForm>
                    {setShow}
                </TaskForm>
            </CreateFormContainer> 
            : <></>
            }
            <i className="fa-solid fa-plus"></i>
        </BtnPluss>
    )
}