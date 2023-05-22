import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <>
      <div className="px-10 md:px-28 py-8">
        <h1 className="text-gray-800 font-semibold text-2xl md:text-3xl text-center mb-16">
          Question and Answer
        </h1>
        <div>
          <h2 className="font-semibold text-xl mb-5">
            What is an access token and refresh token?. How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold mb-3">Access Token: </span>
            It contains all the information the server needs to know if the user
            / device can access the resource you are requesting or not. They are
            usually expired tokens with a short validity period. <br />
            <span className="text-gray-600 font-bold mb-3">
              Refresh Token:{" "}
            </span>
            <p className="mb-5">
              The refresh token is used to generate a new access token.
              Typically, if the access token has an expiration date, once it
              expires, the user would have to authenticate again to obtain an
              access token. With refresh token, this step can be skipped and
              with a request to the API get a new access token that allows the
              user to continue accessing the application resources.
            </p>
            <span className="text-gray-600 font-bold">
              How do they work and where should we store them on the
              client-side?
            </span>
            <p className="">
              A refresh token just helps you re-validate a user without them
              having to re-enter their login credentials multiple times. The
              access token is re-issued, provided the refresh token is a valid
              one requesting permission to access confidential resources
            </p>
            <br />
            <p className="">
              Store it in local browser storage and HTTP cookie in client side,
              HTTP cookie it can be safer than local browser storage
            </p>
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-semibold text-xl mb-5">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Answer: </span>
            SQL databases are based on a relational data model, with structured
            data organized into tables. They use SQL as a query language and are
            suitable for applications with complex queries and data integrity
            requirements.
            <p className="mt-3">
              NoSQL databases, on the other hand, employ various data models and
              are designed for unstructured or semi-structured data. They offer
              flexible schemas, horizontal scalability, and are commonly used
              for large-scale applications and scenarios with rapidly changing
              data needs.
            </p>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-5">
            What is express JS and Nest JS?
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Nest.Js: </span>
            NestJS is a scalable, open-source framework for building server-side
            applications using Node.js and TypeScript. It follows a modular
            structure, supports various design patterns, and integrates well
            with other libraries and frameworks. NestJS simplifies the
            development process and offers built-in features for authentication,
            validation, caching, and logging. It is versatile and widely used
            for RESTful APIs, real-time applications, microservices, and
            server-side rendered applications.
          </p>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Express.Js: </span>
            Express is a small framework that sits on top of Node.js’s web
            server functionality to simplify its APIs and add helpful new
            features. It makes it easier to organize your application’s
            functionality with middle ware and routing.
            <p className="mt-3">
              Express.js is a framework based on Node.js which is used for
              building web-application using approaches and principles of
              Node.js event-driven architecture.
            </p>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mt-5">
            What is MongoDB aggregate and how does it work
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Answer: </span>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
            <p className="mt-3">
              The MongoDB aggregate framework processes data through a pipeline
              of stages. Each stage performs a specific operation on the data
              and passes the results to the next stage. The data flows through
              the stages, allowing for complex data manipulations and
              aggregations. The framework leverages MongoDB's capabilities, such
              as indexes and parallel processing, for efficient performance. It
              enables flexible data analysis and aggregation, empowering tasks
              like filtering, grouping, sorting, and computation. The output of
              the final stage provides the transformed and aggregated data for
              further use or analysis. MongoDB's aggregate framework is a
              powerful tool for extracting insights and performing advanced data
              operations.
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
