import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
  } from 'graphql';

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3005';

  function fetchPosts() {
    return fetch(`${BASE_URL}/posts`).then(res=>res.json()).then(json => json.posts);
  }

  const PostType = new GraphQLObjectType({
      name:'Post',
      description:'post type',
      fields:()=>({
          title:{
                type: GraphQLString,
                resolve:(post) => post.title,
          },
          content:{
              type:GraphQLString,
              resolve:(post) => post.content,
          }
      })
  })
  
const QueryType = new GraphQLObjectType({
    name: 'Query',
    description:'.....',
    fields:()=> ({
        allPosts:{
            type:new GraphQLList(PostType),
            resolve: fetchPosts
        }
    })

    }
)

  export default new GraphQLSchema({
    query: QueryType,
  });