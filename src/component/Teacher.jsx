import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherGet } from '../store/teacherSlice';
import { Link } from 'react-router-dom';
import '../index.css';

const  Teacher = () => {

  const state = useSelector((state) => state.teacher);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teacherGet());
    return () => {
      
    }
  }, []);

  return (
    <>
      <div>
        {state.teachers.map((x, i) => {
          return (
            <div className="card" key={i}>

              <Link to={`/${x.id}`}>{x.name}</Link>
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Teacher;


