import * as React from 'react';

export interface ILoginData {
    username: string,
    password: string
};
interface IProps {onSubmit: (event: React.FormEvent<HTMLFormElement>, variables: ILoginData) => void}
interface IState {variables: ILoginData}

export class LoginForm extends React.Component<IProps, IState>  {
    public state = {variables : {username: "", password: ""}};

    public render() {
        return (
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="username" required={true} onChange={this.setUsername} />
                    <input type="password" placeholder="password" required={true} onChange={this.setPassword} />
                    <button type="submit">Log in</button>
                </form>
        );
    }

    private setUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({variables: {...this.state.variables, username: event.currentTarget.value}});
    }

    private setPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({variables: {...this.state.variables, password: event.currentTarget.value}});
    }

    private submit = (event: React.FormEvent<HTMLFormElement>) => this.props.onSubmit(event, this.state.variables);

}
