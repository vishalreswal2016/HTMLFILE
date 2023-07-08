import RollNo from "./RollNo";
import Fees_Paid from "./Fees_Paid";
import Fees_Remaing from "./Fees_Remaining";

const Name = ({name, rollNo, feesPaid, feesRemaining} ) =>{
    return (
           <>
           <h3>Student Name: {name}</h3>
           <hr />
           <RollNo rollNo={rollNo}/>
           <Fees_Paid feesPaid={feesPaid}/>
           <Fees_Remaing feesRemaining={feesRemaining}/>
           </>
    )
}
export default Name;