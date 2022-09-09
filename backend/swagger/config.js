module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "POSTS API Document",
    description: "CRUD operations for Posts",
    termsOfService: "",
    contact: {
      name: "Ben Matela",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  paths: {
    "/api/v1/posts": {
      get: {
        tags: ["Posts"],
        summary: "Get all posts",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Posts",
            },
          },
        },
      },
    },
    "/api/v1/posts/{id}": {
      get: {
        tags: ["Posts"],
        summary: "Get post by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Find post by this ID",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Post",
            },
          },
        },
      },
    },
    "/api/v1/posts/put/{id}": {
      put: {
        tags: ["Posts"],
        summary: "Update post by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Find by ID and update",
            type: "string",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Post",
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Post",
            },
          },
        },
      },
    },
    "/api/v1/posts/post": {
      post: {
        tags: ["Posts"],
        summary: "Create new post",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/Post",
              },
            },
          },
        },
        responses: {
          201: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Post",
            },
          },
        },
      },
    },
    "/api/v1/posts/delete/{id}": {
      delete: {
        tags: ["Posts"],
        summary: "Delete post",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "Find by ID and delete",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Post",
            },
          },
        },
      },
    },
  },
  definitions: {
    Post: {
      required: ["id", "userId", "title", "body"],
      properties: {
        id: {
          type: "number",
          uniqueItems: true,
        },
        userId: {
          type: "string",
          uniqueItems: true,
        },
        title: {
          type: "string",
        },
        body: {
          type: "string",
        },
      },
    },
    Posts: {
      type: "array",
      $ref: "#/definitions/Posts",
    },
  },
};
