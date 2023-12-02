/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bolajonGet, bolajonPost } from '../store/bolajonlarSlice';
import '../index.css';

function Bolajonlar() {
  const [inputs, setInputs] = useState([]);

  const state = useSelector((state) => state.bolajon);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(state);

  const putData = (obj1, index) => {
    let newUser = { ...obj1 };
    let dates = [...newUser.act, inputs?.[index]];
    newUser.act = dates;
    let kk = {
      id: obj1.id,
      data: newUser,
    };
    dispatch(bolajonPost(kk));
    setInputs(inputs?.map((item, i) => {
      if(index === i) {
        return ''
      }
      return item
    }))
  };

  const clickDelete = (obj, actId) => {
    let newUser = { ...obj };
    let dates = newUser.act.filter((x, index) => index !== actId);
    newUser.act = dates;

    let kk = {
      id: obj.id,
      data: newUser,
    };
    dispatch(bolajonPost(kk));
  };

  // console.log({inputs})

  const handleChange = (val, i) => {
    let arr = [...inputs]
    arr[i] = val
    setInputs(arr)
  }

  useEffect(() => {
    dispatch(bolajonGet());
  }, [state.redirect]);

  // const [theme, setTheme] = React.useState('');

  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? '' : 'dark');
  // };

  return (
    <>
      <div>
        <div className="opoqisi">
          {state.bolajonlar.map((obj, i) => {
            if (obj.teacher === id) {
              return (
                <div className="cardBola" key={i}>
                  <h1>{obj.name}</h1>
                  <p>qancha kun kelmagan</p>
                  {obj.act?.map((num, name) => {
                    return (
                      <div className="text_num" key={name}>
                        <p>{num}</p>
                        <button onClick={() => clickDelete(obj, name)}>
                          delete
                        </button>
                      </div>
                    );
                  })}
                  <input
                    value={inputs?.[i]}
                    placeholder="chiqmagan kunni sonini kriting"
                    onChange={(e) => handleChange(e.target.value, i)}
                    type="text"
                  />
                  <button onClick={() => putData(obj, i)}>hajme</button>

                  {/* <button onClick={() => toggleTheme()}>dark</button> */}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Bolajonlar;
