/**
 * @flow
 * @relayHash 10d15e7ca43ff88bd02ac0f7c74f8287
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ProjectTableQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query ProjectTableQuery {
  viewer {
    ...ProjectRow_viewer
    id
  }
}

fragment ProjectRow_viewer on Viewer {
  allProjects(last: 100, orderBy: id_ASC) {
    edges {
      node {
        ...ProjectCell_project
        id
      }
    }
  }
}

fragment ProjectCell_project on Project {
  id
  canonicalName
  resources {
    edges {
      node {
        id
        type
        name
        url
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectTableQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectRow_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ProjectTableQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ProjectTableQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "id_ASC",
                    "type": "ProjectOrderBy"
                  }
                ],
                "concreteType": "ProjectConnection",
                "name": "allProjects",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ProjectEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Project",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Project",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "canonicalName",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ResourceConnection",
                                "name": "resources",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ResourceEdge",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Resource",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "id",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "type",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "name",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "url",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allProjects{\"last\":100,\"orderBy\":\"id_ASC\"}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ProjectTableQuery {\n  viewer {\n    ...ProjectRow_viewer\n    id\n  }\n}\n\nfragment ProjectRow_viewer on Viewer {\n  allProjects(last: 100, orderBy: id_ASC) {\n    edges {\n      node {\n        ...ProjectCell_project\n        id\n      }\n    }\n  }\n}\n\nfragment ProjectCell_project on Project {\n  id\n  canonicalName\n  resources {\n    edges {\n      node {\n        id\n        type\n        name\n        url\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
