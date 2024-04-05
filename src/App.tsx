import {useState} from "react";
import {DragContextProvider} from "./components/DragContext.tsx";
import {DragArea} from "./components/DragArea.tsx";
import {DragItem} from "./components/DragItem.tsx";
import "./App.css";
import users from "./users.json";

type UserProps = {
  index: number;
  fullName: string;
  email: string;
};

const UserItem = ({index, fullName, email}: UserProps) => {
  return (
    <div className="user-item">
      <p className="user-item__text">Full name: <span>{fullName}</span></p>
      <p className="user-item__text">Email: <span>{email}</span></p>
      <p className="user-item__text">Index: <span>{index}</span></p>
    </div>
  );
};

export const DraggableUserList = () => {
  const [userList, setUserList] = useState(users);

  return (
    <DragContextProvider>
      <DragArea items={userList} onChange={setUserList}>
        {userList.map((user, index) => (
          <DragItem key={index} id={index}>
            <UserItem index={index + 1} fullName={`${user.firstName} ${user.lastName}`} email={user.email}/>
          </DragItem>
        ))}
      </DragArea>
    </DragContextProvider>
  );
};
