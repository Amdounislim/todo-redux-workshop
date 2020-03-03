import React from "react";
import { connect } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import {deleteItem, completeItem} from "../js/actions/actionTask"
import Modals from './Modals'

function ListItems(props) {
  return (
    <ListGroup>
      {props.items.map((el, key) => (
        <ListGroup.Item key={key} style={{ display: "flex" }}>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            onClick={()=>props.completeItem(el.id)}
          />
          <Modals item={el} />
          <Button variant="danger" onClick={()=>props.deleteItem(el.id)}>Delete</Button>
          <p style={{ display: "flex" }} className={el.isComplete?"checked": ""}>{el.text}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

const MapStateToProps = state => {
  return {
    items: state
  };
};

const MapDispatchToProps={
    deleteItem,
    completeItem
}

export default connect(MapStateToProps, MapDispatchToProps)(ListItems);
