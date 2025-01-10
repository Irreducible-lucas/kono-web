import axios from "./axios/index";

export async function fetchHomeData() {
  const { data } = await axios.get("/home");
  console.log("Home Data:", data);
  return data;
}

export async function fetchHeroData() {
  const { data } = await axios.get("/home/1");
  return data;
}

export async function fetchChairmanMessage() {
  const { data } = await axios.get("/home/2");
  return data;
}

export async function fetchProjects() {
  const { data } = await axios.get("/projects");
  return data;
}

export async function deleteProject(id: number) {
  const { data } = await axios.delete(`/projects/${id}`);
  return data;
}

export async function fetchNews() {
  const { data } = await axios.get("/news");
  return data;
}

export async function deleteNews(id: number) {
  const { data } = await axios.delete(`/news/${id}`);
  return data;
}

export async function fetchTestimonials() {
  const { data } = await axios.get("/testimonials");
  return data;
}

export async function deleteTestimonial(id: number) {
  const { data } = await axios.delete(`/testimonials/${id}`);
  return data;
}

export async function fetchAboutInfo() {
  const { data } = await axios.get("/about");
  return data;
}

export async function fetchOfficials() {
  const { data } = await axios.get("/official");
  return data;
}

export async function deleteOfficial(id: number) {
  const { data } = await axios.delete(`/official/${id}`);
  return data;
}

export async function fetchPolicies() {
  const { data } = await axios.get("/policy");
  return data;
}

export async function deletePolicy(id: number) {
  const { data } = await axios.delete(`/policy/${id}`);
  return data;
}

// update codes
export async function updatePolicy(id: any, updatedData: any) {
  const { data } = await axios.put(`/policy/${id}`, updatedData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateHome(id: any, submitData: any) {
  const { data } = await axios.put(`/home/${id}`, submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateAbout(id: any, submitData: any) {
  const { data } = await axios.put(`/about/${id}`, submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateProject(id: any, submitData: any) {
  const { data } = await axios.put(`/projects/${id}`, submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateNews(id: any, submitData: any) {
  const { data } = await axios.put(`/news/${id}`, submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateTestimonial(id: any, submitData: any) {
  const { data } = await axios.put(`/testimonials/${id}`, submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function createProject(submitData: any) {
  const { data } = await axios.post("/projects", submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function createNews(submitData: any) {
  const { data } = await axios.post("/news", submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function createTestimonial(submitData: any) {
  const { data } = await axios.post("/testimonials", submitData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}
