import React from 'react';
class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        return(
            <div className="fr center mt-64">
            <div className="login fc start">
                <div className="log-header fr center">---Login---</div>
                <div className="fr center mt-16">
                    <input type="text" placeholder="enter your name"/>
                </div>
                <div className="fr center mt-10">
                    <input type="password" placeholder="enter your password."/>
                </div>
                <div className="fr center mt-16">
                    <input type="submit" value="submit" />
                </div>
            </div>
            </div>
        )
    }
}
export default Login;