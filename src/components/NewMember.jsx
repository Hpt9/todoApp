import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import styles from "../css/NewMember.module.scss"

export default function NewMember() {
  return (
    <div className={styles.new_user}>
      <div className={styles.users}>
        <AvatarGroup total={8}>
            <Avatar style={{border: "2px solid #FFF"}} alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar style={{border: "2px solid #FFF"}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar style={{border: "2px solid #FFF"}} alt="Agnes Walker" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar style={{border: "2px solid #FFF"}} alt="Trevor Henderson" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </AvatarGroup>
      </div>
      <button className={styles.btn}>
        +New Member
      </button>
    </div>
  );
}
