/**
 * @flow
 * @relayHash 7a47e51c331024ca5de1f71e40458273
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ProjectsPageQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query ProjectsPageQuery {
  viewer {
    ...ProjectInfo_viewer
    id
  }
}

fragment ProjectInfo_viewer on Viewer {
  allProjects(last: 100, orderBy: id_ASC) {
    edges {
      node {
        ...Project_project
        id
      }
    }
  }
}

fragment Project_project on Project {
  id
  canonicalName
  resources {
    edges {
      node {
        id
        type
        name
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
    "name": "ProjectsPageQuery",
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
            "name": "ProjectInfo_viewer",
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
  "name": "ProjectsPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ProjectsPageQuery",
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
  "text": "query ProjectsPageQuery {\n  viewer {\n    ...ProjectInfo_viewer\n    id\n  }\n}\n\nfragment ProjectInfo_viewer on Viewer {\n  allProjects(last: 100, orderBy: id_ASC) {\n    edges {\n      node {\n        ...Project_project\n        id\n      }\n    }\n  }\n}\n\nfragment Project_project on Project {\n  id\n  canonicalName\n  resources {\n    edges {\n      node {\n        id\n        type\n        name\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
