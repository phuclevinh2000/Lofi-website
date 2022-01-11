import React, { useState } from 'react';
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addList, removeList, addDone, removeDone } from '../../redux/actions';
import Message from '../Message/Message';
import './TodoList.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState('');

  const data = useSelector((state) => state.todoItems);
  const { todoList, repeat } = data;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addList(list));
    setList('');
  };

  const handleDelete = (item) => {
    dispatch(removeList(item));
  };

  const handleComplete = (item) => {
    dispatch(addDone(item));
  };

  const handleNotComplete = (item) => {
    dispatch(removeDone(item));
  };
  return (
    <div className='todoList'>
      <Form className='mx-2 my-2' onSubmit={submitHandler}>
        <Form.Group controlId='inputList'>
          <Row>
            <Col md={8}>
              <Form.Control
                type='text'
                value={list}
                onChange={(e) => setList(e.target.value)}
                placeholder='Enter list'
                required
              />
            </Col>
            <Col md={4}>
              <Button type='submitted'>Add</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {todoList.length > 0 ? (
        <>
          {repeat && (
            <Message variant='danger'>This note is already added</Message>
          )}
          <ListGroup className='todolistList'>
            {todoList.map((list) => (
              <ListGroup.Item
                variant={list.complete === true ? 'success' : 'primary'}
                key={list.name}
              >
                <Row>
                  <Col md={8} xs={8}>
                    - {list.name}
                  </Col>
                  <Col md={2} xs={2}>
                    {list.complete === true ? (
                      <Button
                        variant='success'
                        onClick={() => handleNotComplete(list.name)}
                      >
                        <i className='fas fa-check'></i>
                      </Button>
                    ) : (
                      <Button
                        variant='danger'
                        onClick={() => handleComplete(list.name)}
                      >
                        <i className='fas fa-eraser'></i>
                      </Button>
                    )}
                  </Col>
                  <Col md={2} xs={2}>
                    <Button
                      variant='dark'
                      onClick={() => handleDelete(list.name)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : (
        <ListGroup>
          <ListGroup.Item className='text-center'>
            Nothing to do yet
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default TodoList;
