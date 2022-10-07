import React, { useEffect, useState } from 'react'

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
  onHandleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
interface IUserDetails {
  userName?: string,
  password?: string
}
const LoginForm = (props: IUserDetailsProps) => {
  const [userDetails, setUserDetails] = useState<IUserDetails>()

  return (
    <>
      <form onSubmit={(e)=>props.onHandleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
export default LoginForm