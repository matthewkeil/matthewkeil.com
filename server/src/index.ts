import { v1 as neo4j } from 'neo4j-driver';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { ApolloServer } from 'apollo-server';


const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', 'letmein')
);

const server = new ApolloServer({ schema, context: { driver } });
