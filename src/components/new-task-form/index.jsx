import { useState, useEffect } from 'react';
import { CloseBtn, CloseWrap, Form, Input, InputLabelWrap, Label, LabelText, SubmitBtn, TextArea } from './style';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasksSlice';

export function TaskForm(props) {

    const [title, setTitle] = useState('');
    const [descriptions, setDescription] = useState('');
    const [urls, setUrls] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [author, setAuthor] = useState('');
    const [stamp, setStamp] = useState('');

    const setShow = props.children;
    const dispatch = useDispatch();
    useEffect(() => setStamp(Date.now() + Math.random()), [])
    const handleSubmit = async (event) => {

      event.preventDefault();
      const newTask = {
        title,
        descriptions,
        category,
        deadline,
        author,
        urls,
        price,
        stamp,
      }
      const postOptions = {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json'    
        }
      }

      //For demo app👇
      //localStorage.setItem(Date.now() + title, JSON.stringify(newTask));

      const response = await fetch("http://10.0.0.68:5000/add/", postOptions);
      const json = await response.json();
      dispatch(addTask({
        title,
        descriptions,
        category,
        deadline,
        author,
        urls,
        price,
        _id: {$oid: json._id.$oid} 
      }));
      setTitle("");
      setDescription("");
      setCategory("");
      setDeadline("");
      setAuthor("");
      setUrls("");
      setPrice(0);
    };

    function close() {
      setShow(false);
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        <CloseWrap>
          <h2>Create new task</h2>
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