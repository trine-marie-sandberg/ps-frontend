import styled from "styled-components";

//Close btn
export const CloseWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CloseBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.0);
  font-size: 50px;
  border: none;
  color: white;
  cursor: pointer;
`;
//Form
export const Form = styled.form`
  margin: auto 0;
  width: 100%;
  max-width: 500px;
`;
export const InputLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const LabelText = styled.p`
  font-size: 1.2em;
  padding: 10px 5px;
  margin: 0;
`;
export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  border: none;
`;
export const TextArea = styled.textarea`
  border-radius: 5px;
  min-height: 65px;
  padding: 10px;
  margin: 5px;
  border: none;
`;
export const SubmitBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.0);
  padding: 5px 15px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1.5em;
  color: white;
  border-radius: 5px;
  border-top: 1px solid blue;
  border-bottom: 1px solid green;
  border-left: 1px solid yellow;
  border-right: 1px solid purple;
`;