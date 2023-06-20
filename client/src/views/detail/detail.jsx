import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "./../../redux/action/index";
import "./detail.css";
function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className="detail">
      {detail && (
        <div>
          <h2>
            {detail.name.forename} {detail.name.surname}
          </h2>
          <ul>
            <li>{detail.nationality}</li>
            <li>{detail.dob}</li>
            <li>{detail.teams}</li>
          </ul>

          <p>{detail.description}</p>
          <img className="img" src={detail.image.url} alt="Driver" />
        </div>
      )}
    </div>
  );
}

export default Detail;
