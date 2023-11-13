import { useState, useEffect } from 'react';
import { CloseBtn, CloseWrap, Form, Input, InputLabelWrap, Label, LabelText, SubmitBtn, TextArea } from './style';
import { useDispatch } from 'react-redux';
import { TaskUpdate, addTask, updateTask } from '../../features/tasksSlice';

export function TaskForm(props) {

    const [ setShow, originalTask ] = props.children;
    const [title, setTitle] = useState(originalTask.title);
    const [descriptions, setDescription] = useState(originalTask.descriptions);
    const [urls, setUrls] = useState(originalTask.urls);
    const [price, setPrice] = useState(originalTask.price);
    const [category, setCategory] = useState(originalTask.category);
    const [deadline, setDeadline] = useState(originalTask.deadline);
    const [author, setAuthor] = useState(originalTask.author);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {

      event.preventDefault();
      const updatedTask = {
        title,
        descriptions,
        category,
        deadline,
        author,
        urls,
        price,
        stamp: Date.now() + Math.random(),
      }
      const postOptions = {
        method: 'POST',
        body: JSON.stringify(updatedTask),
        headers: {
            'Content-Type': 'application/json'    
        }
      }

      //For demo app👇
      //localStorage.setItem(Date.now() + title, JSON.stringify(newTask));
      dispatch(TaskUpdate({
        title,
        descriptions,
        category,
        deadline,
        author,
        urls,
        price,
        _id: originalTask._id.$oid,
      }));
    };

    function close() {
      setShow(false);
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        <CloseWrap>
          <h2>Update task</h2>
          <CloseBtn 
            onClick={close}
            aria-label='Close the create new task form'
          >
            <i className="fa-solid fa-xmark"></i>
          </CloseBtn>
        </CloseWrap>
        <InputLabelWrap>
          <Label>
            <LabelText>Title</LabelText>
            <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <InputLabelWrap>
          <Label>
            <LabelText>Description</LabelText>
            <TextArea
            value={descriptions}
            onChange={(event) => setDescription(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <InputLabelWrap>
          <Label>
            <LabelText>Category</LabelText>
            <Input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <InputLabelWrap>
          <Label htmlFor="deadline">
            <LabelText>Deadline</LabelText>
            <Input
            type="date"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <InputLabelWrap>
          <Label>
            <LabelText>Author</LabelText>
            <Input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <InputLabelWrap>
          <Label>
            <LabelText>Urls</LabelText>
            <Input
            type="text"
            value={urls}
            onChange={(event) => setUrls(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <InputLabelWrap>
          <Label>
            <LabelText>Price</LabelText>
            <Input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          </Label>
        </InputLabelWrap>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    );
  }