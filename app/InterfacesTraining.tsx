export default function InterfacesTraining(){
 
    interface Authenticatable {
        email: string;
        password: string;

        login(): void;
        logout(): void;
    } 

    class AuthenticatableUSer implements Authenticatable {
        constructor(
            public userName: string, 
            public email: string, 
            public password: string) {

        }

        login() {
            // ...
        }

        logout() {
            // ...
        }
    }

    function authenticate(user: Authenticatable) {
        user.login(); // guaranteed to get user object that has in Login method !!!
    }

    let user: Authenticatable;

    user = {
        email: 'test@example.com',
        password: 'abc123',

        login() {
            // reach out to a database, check credentials, create a session
        },

        logout() {
            // clear the session
        },
    }

      return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        </main>
      )
    }
    