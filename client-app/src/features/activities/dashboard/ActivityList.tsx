import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
}
export const ActivityList: React.FC<IProps> = ({ activities }) => {
  return (
    <Segment clearing>
      <Item.Group>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
              <Button floated="right" content="View" color="blue" />
              <Label basic content={activity.category} />
            </Item.Content>
          </Item>
        ))}
        {/* 
        <Item>
          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <div>Description</div>
              <div>City, Venue</div>
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
            <Button floated="right" content="View" color="blue" />
            <Label basic content="Category" />
          </Item.Content>
        </Item> */}
      </Item.Group>
    </Segment>
  );
};
