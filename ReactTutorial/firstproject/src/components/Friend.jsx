import FriendName from "../FriendName"
const Friend = (props) =>{

    // const name=props.name;
    // const companyName=props.companyName;
    const {name, companyName,}=props;
    return(
    <div>
    <h3>{name}</h3>
    <FriendName name={name}/>
    <hr />
    <p>{companyName}</p>
    </div>
    )
}

export default Friend;