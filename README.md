# Fullstack Project

TutorMatch is a project that helps students find the best tutors.

  - List Tutors
  - Create, Edit and Remove tutors

### Tech

TutorMatch uses a number of open source projects to work properly:

* [NextJS](https://nextjs.org) - React Framework
* [KoaJS](https://koajs.com/) - Node.js Framework
* [Prisma](https://www.prisma.io/) - Database ORM Tools
* [Docker](https://www.docker.com/) - Utility to pack, ship and run any application as a lightweight container.

## How to use

This project is very easy to install in a [Docker](https://www.docker.com/) containers and by default, the Frontend container will expose port 3000.

### Download example & install dependencies

Clone the repository:

```
git clone https://github.com/conradob/TutorMatch.git
```

```sh
$ cd TutorMatch
$ docker-compose up backend frontend
```

### Database generation

Prisma is a tool to manage data modelling and migrations but if the service is still booting up the backend will not be able to deploy the datamodel.
For this case just restart the backend container and Prisma will deploy to the database again.

License
----

MIT

