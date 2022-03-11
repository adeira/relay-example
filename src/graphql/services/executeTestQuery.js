// @flow

import { graphql } from 'graphql';

import schema from '../Schema';

type AnyObject = { +[key: string]: mixed, ... };

export default function executeTestQuery(query: string, variables: ?AnyObject): Promise<AnyObject> {
  return graphql({
    schema,
    source: query,
    variableValues: variables,
  });
}
