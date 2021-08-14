# excel-file-uploader

> The project allow an authanticated user to upload an excel file to aws s3 and get the list of the uploaded users with their pagination, and save them in the database

## pre-requisition

- ` Nodejs and express` should be pre installed.

- `npm` or `yarn` package manager should be installed.
- `SQL` database should be installed prefer(`Postgres` or `MYSQL`).

## installation

- Clone the repo locally [here](https://github.com/sengayire/ExcelFileUploader.git) and change directory to the project folder.
- Run `yarn install` to install the project dependencies.
- Create the `.env` file and add required variables.
- Run `yarn db:create` to create the database.
- Run `yarn db:migrate` to migrate modals to the database.
- Run `yarn dev` to start the project in your local machine.

## usage

after the project has been installed in your local environment open the postman and use the below endpoints

### Auth endPoints

> Register user/Sign up: `/api/v1/auth/register` _POST_

- Request payload

```
{
     names: "YOUR FULL NAMES,
    username: 'YOUR USERNAME',
    password: 'YOUR PASSWORD',
    email: 'YOUR EMAIL'
}
```

- Response payload

```
{
  status: 201,
  message: 'User daprince register successfully',
  data: [{
      {
        id: 27,
        names: 'full names',
        username: 'TOUR USERNAME',
        email: 'YOUR EMAIL',
        updatedAt: '',
        createdAt: ''
    },
  }]
  token: 'token'
}
```

> Login: `/api/v1/auth/login` _POST_

- Request payload

```
{
    username: 'YOUR USERNAME'
    password: 'YOUR PASSWORD'
}
```

- Response payload

```
{
  status: 200,
  message: 'Logged in successfully',
  token: 'token'
}
```

### Upload file endPoint

> upload excel file: `/api/v1/upload` _POST_

- Request payload

```
{
    file: 'UPLOADED FILE'
}
```

- Response payload

```
{
    status: 200,
    data: {
        fileName: 'ORIGINAL FILE NAME',
        filePath: 'FILE URL',
        key: 'KEY',
        bucketName: 'BUcKET NAME'
    },
    message: File (ORIGINAL FILE NAME) uploaded successfully
}
```

### users endPoints

> Get uploaded users list: `/api/v1/users` _GET_

- Request

  > Query example: `/api/v1/users?page=1&PerPage`

- Response payload

```
{
    status: 200,
    data: [
        {
            names:'Mabelle Gross',
             NID: ce0540e7-ca5b-5514-abe5-5c783900d894,
             phone: (737) 700-3861,
             email: di@dumko.be,
             gender: Male
        },
        ...
    ],
    meta: {
        page: 2,
        perPage: 20,
        total: 100
    },
    message: users list
}
```

> Save users list: `/api/v1/users` _POST_

- Response payload

```
{
    status: 201,
    message: 'Users saved successfully'
}
```
