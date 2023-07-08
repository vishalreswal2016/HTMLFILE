import FreindFollower from "./FriendFollower";
import FriendGender from "./FriendGender";
import FriendName from "./FriendName";

const Friend = ({name, followers, gender}) =>{

    return (
    <div>
        <FriendName name={name}/>
        <hr />
        <FriendGender gender={gender}/>
        <FreindFollower followers={followers}/>
    </div>
    )
}
export default Friend;