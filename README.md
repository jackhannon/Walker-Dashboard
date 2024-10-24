# Walker-Dashboard

This dashboard serves to demo and compare autonomous agents fitted for various task, in the current state, that is limited to an agent that attempts to walk bipedal.

How to install and run: 

  1. run `npm install` in the bash console in the `backend` directory of the project

  2. run `npm install` in the bash console in the `frontend` directory of the project

  3. Configure enviroment:
     The frontend variable's "VITE_API_URL" port number must match the backend variables "PORT" variable

     The frontend variable's "VITE_SOCKET_URL" port number must match the backend variables "PORT" variable

     Set the "DATABASE_URL" to a postgres connection url
        
  4. In the `frontend` directory run `npm run dev` in the bash console to start both the backend and frontend start commands
