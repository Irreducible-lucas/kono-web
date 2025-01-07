import axios from "./axios/index";

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
