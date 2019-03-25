import ApolloClient from "apollo-boost";
import { ApolloCache } from 'apollo-cache';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import gql from "graphql-tag";
import * as React from 'react';
import { ApolloProvider } from "react-apollo";
import './App.css';
import {ILoginData, LoginForm} from "./LoginForm";

import logo from './logo.svg';

const client = new ApolloClient({
  cache: new InMemoryCache() as ApolloCache<NormalizedCacheObject>,
  uri: "/",
});


const GET_LOGIN_TOKEN =  gql`
    query login($username: String!, $password: String!) { 
        token(username: $username, password: $password)
    }`
class App extends React.Component<{}, {token: string | null}> {
  public state = {token: null as null | string};

    public submit = async (event: React.FormEvent<HTMLFormElement>, variables: ILoginData) => {
        event.preventDefault();
        const { data } = await client.query({
            query: GET_LOGIN_TOKEN,
            variables
        });
        this.setState({token: data.token});
    }
    public parseJwt (token: string) {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(window.atob(base64));
        };

  public render() {
    return (
        <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {!this.state.token ? <LoginForm onSubmit={this.submit} />
            : <div>
                <b>Token content:</b>
                <div><pre><code>{
                    JSON.stringify(this.parseJwt(this.state.token as string), null, 2)
                }</code></pre></div>
            </div>
        }
      </div>
</ApolloProvider>
    );
  }

}

export default App;
