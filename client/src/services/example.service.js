import axios from "axios";

class ExampleService {
  constructor() {
    this.api = axios.create({
      baseURL:
        process.env.REACT_APP_HAPROXY_SERVICE_URL ||
        "http://149.100.138.125:6001",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createOne = async (requestBody) => {
    return this.api.post("/examples", requestBody);
  };

  // GET /api/examples
  getAll = async () => {
    return this.api.get("/examples");
  };

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/examples/${id}`);
  };

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/examples/${id}`, requestBody);
  };

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/examples/${id}`);
  };
}

// Create one instance of the service
const exampleService = new ExampleService();

export default exampleService;
