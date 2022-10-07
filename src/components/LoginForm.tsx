import { useEffect, useState , useRef} from 'react'

// multiple props in same file typescript
// interface IUserNameProps{
//     userName: string | null | undefined;

// }

// interface IPsswordProps{
//   password: string | null | undefined;

// } 

// const LoginForm = (props:(IUserNameProps & IPsswordProps))=> {
//   const { userName , password} = props

//   return (
//     <>
//       <div>{userName}</div>
//       <div>{password}</div>
//     </>
//   )
// }
// interface IUserNameProps{
//     userName: string | null | undefined;

// }

// Interfcae which doesn't need any arugments for props as func
// interface IUserDetailsProps {
//   onHandleSubmit: () => void
// }
interface IUserDetailsProps {
  // sum: (a: number, b: number) => number;
  // logMessage: (message: string) => void;
  onHandleSubmit: (event: React.FormEvent<HTMLFormElement>, userDetails:IUserDetails) => void
}
interface IUserDetails {
  userName?: string  ,
  password?: string
}
const LoginForm = (props: IUserDetailsProps) => {
  const [userDetails, setUserDetails] = useState<IUserDetails>({userName:"", password:""})
  const userRef = useRef(null)
  const passwordRef = useRef(null)

  return (
    <>
      <form onSubmit={(e)=>props.onHandleSubmit(e, userDetails)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" ref={userRef} value={userDetails?.userName} name="userName" onChange={(e)=>setUserDetails({...userDetails, [e.target.name] :e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control"  ref={passwordRef}  value={userDetails?.password} name="password" onChange={(e)=>setUserDetails({...userDetails, [e.target.name] :e.target.value})}></input>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
export default LoginForm