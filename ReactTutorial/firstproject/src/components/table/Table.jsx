import Row from "./Trow";
const Table = (props) => {
const data=props.data;
    return (
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Conatct</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((people)=> <Row data={people}/>)
            }
        </tbody>
    </table>

    ) 
}
export default Table;