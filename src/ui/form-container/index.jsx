import { FormContainer } from "./style";

export default function CreateFormContainer({children}) {

    return(
        <div id="form-container">
            <FormContainer>{children}</FormContainer>
        </div>
    )
}